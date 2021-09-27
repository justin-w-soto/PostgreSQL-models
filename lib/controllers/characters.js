import { Router } from 'express';
import QuotesModel from '../models/CharacterModel.js';


export default Router()
    .post('/', async (req, res, next) => {
        try {
            const character = await CharacterModel.create(req.body);
            res.send(character);
            
        } catch (error) {
            next(error);
        }
    })