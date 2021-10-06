const pool = require ('../utils/pool.js');

module.exports = class Character {
    id; 
    name;

    constructor(row){
        this.id = row.id;
        this.name = row.name;
    }

    static async insert({ id, name }) {
        const { rows } = await pool.query(
            `INSERT INTO character (id, name) VALUES ($1, $2) RETURNING *`,
            [id, name]
        );
        return new Character(rows[0]);
    }

    static async getCharacterData() {
        const { rows } = await pool.query(

            'SELECT id, name FROM character');
      
          return rows.map(row => new Character(row));  
    }
    
}