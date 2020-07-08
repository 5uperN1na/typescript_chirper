import * as express from 'express';
import chirpstore from '../utils/chirpstore';

const router = express.Router();

//Testing example
// router.get('/', (req, res, next) => {
//     res.json('TESTING!!!');
// });

//let customers = [];

//Get method
router.get('/:chirpid?', (req, res, next) => {
    const chirpid = Number(req.params.chirpid)

    if (chirpid || chirpid === 0) {
        const chirp = chirpstore.GetChirp(chirpid);

        //check to see if chirpid exist, if not, returns a response. if it does, it will get that chirp.
        if (Object.keys(chirp).length === 0) {
            res.status(404).json({ msg: `chirp ${chirpid} does not exist` });
        } else {
            res.json({ id: chirpid, ...chirp })

        }

    } else {

        const data = chirpstore.GetChirps();
        const chirps = Object.keys(data).map((key: any) => ({ id: key, ...data[key] }));
        chirps.pop();
        res.json(chirps);

    }


});


//old GET method
// router.get('/:id?', (req, res) => {

//     const id = Number(req.params.id)
//     if (id) {
//         res.json(chirpstore.GetChirp(id));
//     } else {
//         const raw = chirpstore.GetChirps()
//         const customers = Object.keys(raw).map(key =>{
//             return{
//                 id: key,
//                 comment: raw[key].comment,
//                 firstname: raw[key].firstname

//             }
//         })
//         customers.pop();
//         res.send(customers);
//     }
// });

//old POST method

// router.post('/', (req, res) => {
//     chirpstore.CreateChirp(req.body);
//     //res.sendStatus(200);
//     let customer = {};
//     customer.firstname = req.body.firstname;
//     customer.comment = req.body.comment;


//     customers.push(customer);

//     return res.send(customer);

// });



router.post('/', (req, res) => {
    const chirpDTO = req.body;
    chirpDTO['written_at'] = new Date();
    chirpstore.CreateChirp(chirpDTO);
    res.status(200).json({ msg: `chirp was added` });

});



//old DELETE method

// router.delete('/:id?', (req, res) => {
//     const id = Number(req.params.id)
//     chirpstore.DeleteChirp(id)
//     id ? res.send("deleted") : res.sendStatus(404);
// });



//Delete method
router.delete('/:chirpid', (req, res) => {
    const chirpid = Number(req.params.chirpid)
    const chirpDTO = req.body;
    chirpstore.DeleteChirp(chirpid)
    res.status(200).json({ msg: `chirp ${chirpid} deleted`, id: chirpid });
});


//old PUT method

// router.put('/:id?', (req, res) => {
//     const id = Number(req.params.id)
//     let data = req.body;
//     chirpstore.UpdateChirp(id, data)
//     id ? res.send("edited") : res.sendStatus(404);
// });


//Put method
router.put('/:chirpid', (req, res) => {
    const chirpid = Number(req.params.chirpid)
    const chirpDTO = req.body;
    chirpstore.UpdateChirp(chirpid, chirpDTO)
    res.status(200).json({ msg: `chirp ${chirpid} updated`, id: chirpid });
});








export default router;