var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/flashcard', function(err) {
  if (err) { throw err; }
});

var cardSchema = new mongoose.Schema({
  name : { type : String, match: /^[a-zA-Z0-9-_]+$/ }
});

var cardModel = mongoose.model('card', cardSchema);

var newCard = new cardModel({ name : 'the new card' });
console.log(newCard.name);

mongoose.connection.close();