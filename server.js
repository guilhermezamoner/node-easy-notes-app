const express = require('express');
const bodyParser = require('body-parser');
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

const app = express();

app.use(bodyParser.urlencoded({extended : true}));

app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(()=> {
  console.log("Successfuly connected!");
}).catch(err => {
  console.log("error!");
  process.exit();
});

app.get('/', (req, res) => {
  res.json({"message": "Hello world"});
});

require('./app/routes/noteRouter.js')(app);

app.listen(3000, () => {
  console.log("Server on port 3000 ");
});
