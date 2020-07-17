import { Query } from '../index';

//get all chirps
// const all = () => Query('SELECT * FROM chirps');

//join chirps table with users table using the id from the users table
const all = () => Query('SELECT chirps.*, users.name FROM chirps JOIN users on users.id=chirps.userid');

const one = (id: number) => Query('SELECT chirps.*, users.name FROM chirps JOIN users on users.id = chirps.userid WHERE chirps.id = ?', [id]);


const deleteChirp = (id: number) => Query('DELETE FROM chirps WHERE id = ?', [id]);

const insert = (userid: number, chirp: string) => Query('INSERT INTO chirps (userid, chirp) VALUE (?, ?)', [userid, chirp]);

const edit = (chirp: string, id: number) => Query('UPDATE chirps SET chirp = ? WHERE id = ?', [chirp, id]);

 
export default{
    all,
    one,
    deleteChirp,
    insert,
    edit
}