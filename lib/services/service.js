const characters = require ('../controllers/characters');
const CharMod = require ('../models/CharacterModel.js');
const fetch = require ('../utils/fetch.js');

module.exports = class Service {
    static async getCharacters() {
        const fetchedChar = await fetch();
        const isFetched = await characters.insert(fetchedChar);
            return isFetched; 
        }
    }

