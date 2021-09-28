import { Router } from 'express';
import Character from '../models/CharacterModel.js';


export default Router()
    .post('/character', async (req, res, next) => {
        try {
            const character = await Character(req.body);
            res.json(character);
            
        } catch (error) {
            next(error);
        }
    })