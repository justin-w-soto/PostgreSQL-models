const { Router } = require('express');
const AirDate = require('../models/AirDateModel.js');

module.exports = Router()
.post ('/', async (req, res, next) => {
    try {
        const airDateDate = req.body;

        const savedAirDate = await AirDate(airDateDate);
        res.send(savedAirDate);

    } catch (error) {
      next(error);
    }
})
.get ('/episode/:air_date', async (req, res, next) => {
  try {
      const airDateData = req.body;

      const airDat = await AirDate(airDateData);
      res.send(airDat);

  } catch (error) {
    next(error);
  }
})