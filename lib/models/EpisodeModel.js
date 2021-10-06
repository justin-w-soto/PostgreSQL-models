const pool = require ('../utils/pool.js');

module.exports = class Episode {
    id; 
    name;

    constructor(row){
        this.id = row.id;
        this.name = row.name;
    }

    static async insert({ id, name }) {
        const { rows } = await pool.query(
            `INSERT INTO episode (id, name) VALUES ($1, $2) RETURNING *`,
            [id, name]
        );
        return new Episode(rows[0]);
    }

    static async getEpisodeData() {
        const { rows } = await pool.query(

            'SELECT id, name FROM episode');
      
          return rows.map(row => new Episode(row));  
    }
    
}