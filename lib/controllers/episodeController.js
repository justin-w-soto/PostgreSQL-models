const { Router } = require('express');
const Episode = require('../models/EpisodeModel.js');

module.exports = Router()
.post ('/', async (req, res, next) => {
    try {
        const episodeName = req.body;

        const savedEpisode = await Episode(episodeName);
        res.send(savedEpisode);

    } catch (error) {
      next(error);
    }
})
.get ('/episode', async (req, res, next) => {
  try {
      const episodeData = req.body;

      const epiDat = await Episode(episodeData);
      res.send(epiDat);

  } catch (error) {
    next(error);
  }
})