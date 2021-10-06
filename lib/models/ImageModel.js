const pool = require ('../utils/pool.js');

module.exports = class Image {
    id; 
    url;

    constructor(row){
        this.id = row.id;
        this.url = row.url;
    }

    static async insert({ id, url }) {
        const { rows } = await pool.query(
            `INSERT INTO image (id, url) VALUES ($1, $2) RETURNING *`,
            [id, url]
        );
        return new Image(rows[0]);
    }

    static async getImageData() {
        const { rows } = await pool.query(

            'SELECT id, url FROM image');
      
          return rows.map(row => new Image(row));  
    }
    
}