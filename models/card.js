const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  phone: String,
  cardId: String,
  status: String,
});

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
