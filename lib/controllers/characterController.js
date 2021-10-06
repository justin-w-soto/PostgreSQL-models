const { Router } = require('express');
const CharacterModel = require('../models/CharacterModel.js');

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