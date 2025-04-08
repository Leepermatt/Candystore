'use strict';

const indexController = {};

indexController.buildIndex = async function (req, res) {
  res.json({
    message: 'Welcome to the Candy Store Webpage',
    available_routes: {
      '/api-docs': 'View the API documentation',
      '/home': 'Candy Store homepage'
    }
  });
};

// Render the Home Page at `/home`
indexController.buildHome = async function (req, res) {
  try {
    res.render('index', { title: 'Welcome to the Candy Store!' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

module.exports = indexController;  