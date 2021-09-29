import characters from '../controllers/characters';
import CharMod from '../models/CharacterModel.js';
import fetch from '../utils/fetch.js';

export default class Service {
    static async getCharacters() {
        const fetchedChar = await fetch();
        const isFetched = await characters.insert(fetchedChar);
            return isFetched; 
        }
    }

