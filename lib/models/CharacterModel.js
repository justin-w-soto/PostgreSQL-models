import pool from '../utils/pool.js';
import quotes from '../controllers/characters.js';

export default class Character {
    id; 
    character;

    constructor(row){
        this.id = row.id;
        this.character = row.character;
    }
    
}