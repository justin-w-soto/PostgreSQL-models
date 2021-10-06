
const { Router } = require('express');
const Location = require('../models/LocationModel.js');

module.exports = Router()
.post ('/location/:id', async (req, res, next) => {
    try {
        const location_name = req.body;

        const savedLocation = await new Location(location_name);
        res.send(savedLocation);

    } catch (error) {
      next(error);
    }
})
.get ('/location', async (req, res, next) => {
  try {
      const locationData = req.body;

      const locDat = await new Location(locationData);
      res.send(locDat);

  } catch (error) {
    next(error);
  }
})