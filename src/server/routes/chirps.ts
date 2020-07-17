import * as express from 'express';
import db from '../db';
import chirpstore from '../utils/chirpstore';

const router = express.Router();

//Testing example
// router.get('/', (req, res, next) => {
//     res.json('TESTING!!!');
// });

//let customers = [];

//GET route with query reference from routes/chirps.ts

router.get('/:id?', async (req, res) => {
    const id = Number(req.params.id);
    try {
        if (id) {
            //make the one note an object by using [chirp]
            const [chirp] = await db.chirps.one(id);
            res.json(chirp);

        } else {
            const chirps = await db.chirps.all();
            res.json(chirps);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Success!", error });
    }

});



//GET route with query reference from routes/chirps.ts

// router.get('/', async (req, res)=>{
//     try {
//         const chirps = await db.chirps.all();
//         res.json(chirps);

//     }catch (error){
//         console.log(error);
//         res.status(500).json({msg: "Testing my code!", error });
//     }

// });


//Delete
router.delete('/:id', async (req, res) => {
    const id = Number(req.params.id);
    try {
        await db.chirps.deleteChirp(id);
        res.json({ msg: "Chirp deleted.", id });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Success", error });
    }

});


//Post
router.post('/', async (req, res) => {
    const newChirp = req.body;
    try {

        const cannedResponse = await db.chirps.insert(newChirp.userid, newChirp.chirp);
        res.status(201).json({ msg: "New chirp inserted", id: cannedResponse.insertID });

    } catch (error) {
        console.log(error);
        res.status(500).json({ msg: "Success", error });
    }

});

router.put('/:id', async (req, res) => {
    const id = Number(req.params.id);
    const editChirp = req.body;
    try {
        const cannedResponse = await db.chirps.edit(editChirp.chirp, id);
        res.json({msg: "Chirp updated", id, cannedResponse});
    }catch (error){
        console.log(error);
        res.status(500).json({msg: "bad girl", error});
    }

});




//Half stack GET method
// router.get('/:chirpid?', (req, res, next) => {
//     const chirpid = Number(req.params.chirpid)

//     if (chirpid || chirpid === 0) {
//         const chirp = chirpstore.GetChirp(chirpid);

//         //check to see if chirpid exist, if not, returns a response. if it does, it will get that chirp.
//         if (Object.keys(chirp).length === 0) {
//             res.status(404).json({ msg: `chirp ${chirpid} does not exist` });
//         } else {
//             res.json({ id: chirpid, ...chirp })

//         }

//     } else {

//         const data = chirpstore.GetChirps();
//         const chirps = Object.keys(data).map((key: any) => ({ id: key, ...data[key] }));
//         chirps.pop();
//         res.json(chirps);

//     }


// });


//Half Stack POST method
// router.post('/', (req, res) => {
//     const chirpDTO = req.body;
//     chirpDTO['written_at'] = new Date();
//     chirpstore.CreateChirp(chirpDTO);
//     res.status(200).json({ msg: `chirp was added` });

// });



// //Half Stack DELETE method
// router.delete('/:chirpid', (req, res) => {
//     const chirpid = Number(req.params.chirpid)
//     const chirpDTO = req.body;
//     chirpstore.DeleteChirp(chirpid)
//     res.status(200).json({ msg: `chirp ${chirpid} deleted`, id: chirpid });
// });


// //Half Stack PUT method
// router.put('/:chirpid', (req, res) => {
//     const chirpid = Number(req.params.chirpid)
//     const chirpDTO = req.body;
//     chirpstore.UpdateChirp(chirpid, chirpDTO)
//     res.status(200).json({ msg: `chirp ${chirpid} updated`, id: chirpid });
// });








export default router;