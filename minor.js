const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.post('/submit-form', async (req, res) => {
  const formData = req.body;
  const fromCurrency = formData.fromCurrency;
  const toCurrency = formData.toCurrency;
  const exchangeRate = formData.exchangeRate;
  const tradeAmount = formData.tradeAmount;
  const tradeDate = formData.tradeDate;
  const tradeTime = formData.tradeTime;

  try {
    // Validate the form data
    if (!isValidCurrencyCode(fromCurrency) || !isValidCurrencyCode(toCurrency)) {
    return res.status(400).json({ error: 'Invalid currency codes' });
const trade = {
    fromCurrency,
    toCurrency,
    exchangeRate,
    tradeAmount,
    tradeDate,
    tradeTime,
    // ... other fields
};
const result = await db.insertTrade(trade);
res.json({ success: true, trade: result });