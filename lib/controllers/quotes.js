import { Router } from 'express';
import QuotesModel from '../models/QuotesModel.js';


export default Router()
    .post('/', async (req, res, next) => {
        try {
            const quote = await QuotesModel.create(req.body);
            res.send(quote);
            
        } catch (error) {
            next(error);
        }
    })