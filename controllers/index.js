'use strict';

const indexController = {};

indexController.buildIndex = async function (req, res) {
  // Render the 'index' view and pass a title to the view
  res.render('index', { title: 'Welcome to the Candy Store' });
};

module.exports = indexController;
