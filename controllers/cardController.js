const Card = require('../models/Card');

async function getCardStatus(req, res) {
  const { phoneNumber, cardId } = req.query;

  try {
    const result = await Card.findOne({ $or: [{ phone: phoneNumber }, { cardId: cardId }] });

    if (result) {
      res.json({ status: result.status });
    } else {
      res.status(404).json({ error: 'Card not found' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

module.exports = {
  getCardStatus,
};
