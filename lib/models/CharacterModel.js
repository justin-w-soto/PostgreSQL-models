import pool from '../utils/pool.js';

export default class Character {
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
    
}