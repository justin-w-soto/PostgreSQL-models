
const { Router } = require('express');
const Location = require('../models/LocationModel.js');

module.exports = Router()
.post ('/', async (req, res, next) => {
    try {
        const location_name = req.body;

        const savedLocation = await Location(location_name);
        res.send(savedLocation);

    } catch (error) {
      next(error);
    }
})
.get ('/location', async (req, res, next) => {
  try {
      const locationData = req.body;

      const locDat = await Location(locationData);
      res.send(locDat);

  } catch (error) {
    next(error);
  }
})