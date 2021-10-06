const pool = require ('../utils/pool.js');

module.exports = class AirDate {
    id; 
    air_date;

    constructor(row){
        this.id = row.id;
        this.air_date = row.air_date;
    }

    static async insert({ id, air_date }) {
        const { rows } = await pool.query(
            `INSERT INTO airdate (id, air_date) VALUES ($1, $2) RETURNING *`,
            [id, air_date]
        );
        return new AirDate(rows[0]);
    }

    static async getAirDateData() {
        const { rows } = await pool.query(

            'SELECT id, air_date FROM airdate');
      
          return rows.map(row => new AirDate(row));  
    }
    
}