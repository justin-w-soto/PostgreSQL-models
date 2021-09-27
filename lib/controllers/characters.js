import { Router } from 'express';
import CharacterModel from '../models/CharacterModel.js';


export default Router()
    .post('/characters', async (req, res, next) => {
        try {
            const character = await CharacterModel.postIt(req.body);
            res.send(character);
            
        } catch (error) {
            next(error);
        }
    })