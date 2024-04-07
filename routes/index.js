const calendlyRoutes = require('../src/webhook_callback/routes');

module.exports = (app) => {

  app.use('/calendly', calendlyRoutes);
  app.use('*', (req, res) => {
    res.send('Not found!!!');
  });
};
