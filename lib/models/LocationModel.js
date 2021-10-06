const pool = require ('../utils/pool.js');

module.exports = class Location {
    id; 
    name;

    constructor(row){
        this.id = row.id;
        this.location_name = row.location_name;
    }

    static async insert({ id, location_name }) {
        const { rows } = await pool.query(
            `INSERT INTO location (id, name) VALUES ($1, $2) RETURNING *`,
            [id, location_name]
        );
        return new Location(rows[0]);
    }

    static async getLocationData() {
        const { rows } = await pool.query(

            'SELECT id, name FROM location');
      
          return rows.map(row => new Location(row));  
    }
    
}