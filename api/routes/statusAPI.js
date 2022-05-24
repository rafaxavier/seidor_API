const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ status: 'Server is running!' });
});

module.exports = function(app){
  app.use(router);
}