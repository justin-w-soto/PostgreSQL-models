const { Router } = require('express');
const Image = require('../models/ImageModel.js');

module.exports = Router()

.post ('/', async (req, res, next) => {
    try {
        const imageCharacter = req.body;

        const savedImage = await Image(imageCharacter);
        res.send(savedImage);

    } catch (error) {
      next(error);
    }
})

.get ('/character/avatar', async (req, res, next) => {
  try {
      const avatarData = req.body;

      const charImg = await new Image(avatarData);
      res.send(charImg);

  } catch (error) {
    next(error);
  }
})

.get ('/character/avatar/:id', async (req, res, next) => {
    try {
        const avatarId = req.body;
  
        const charId = await new Image(avatarId);
        res.send(charId);
  
    } catch (error) {
      next(error);
    }
  })