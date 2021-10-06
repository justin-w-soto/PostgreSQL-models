const { Router } = require('express');
const Character = require('../models/CharacterModel.js');

module.exports = Router()
.post ('/', async (req, res, next) => {
    try {
        const characterName = req.body;

        const savedCharacter = await Character(characterName);
        res.send(savedCharacter);

    } catch (error) {
      next(error);
    }
})
.get ('/character', async (req, res, next) => {
  try {
      const characterData = req.body;

      const charDat = await Character(characterData);
      res.send(charDat);

  } catch (error) {
    next(error);
  }
})