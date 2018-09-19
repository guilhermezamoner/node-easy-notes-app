module.exports = (app) => {
  const notes = require('../controllers/noteController');

  //create a new Note
  app.post('/notes', notes.create);

  // Retrieve all notes
  app.get('/notes', notes.findAll);

  // Retrieve a single note with id
  app.get('/notes/:id', notes.findOne);

  // Update a note with id
  app.get('/notes/:id', notes.update);

  //Delete a note with id
  app.delete('/notes/:id', notes.delete);
};
