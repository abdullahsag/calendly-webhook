
const express = require('express');
const controller = require('./index');

const router = express.Router();

router.post('/webhook_callback', (req, res) => {
  controller.CalendlyWebhookCallback(req, res)
});

module.exports = router;

