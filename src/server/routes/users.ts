import * as express from 'express';
import db from '../db';

const router = express.Router();

router.get('/', async (req, res)=> {
    try {
        const users = await db.users.all();
        res.json(users);
    } catch (error){
        console.log(error);
        res.status(500).json({msg: 'It worked.', error});
    }
});

export default router;