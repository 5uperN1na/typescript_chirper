import * as React from 'react';
import { useHistory } from 'react-router-dom';
import {useState, useEffect } from 'react';
import type { IUser } from '../utils/interfaces';

const Form: React.FC<FormProps> = (props) => {

const history = useHistory();

const [userid, setUserid] = useState<string>('');
const [chirp, setChirp] = useState<string>('');
const [users, setUsers] = useState<IUser[]>([]);

useEffect(() => {
    const getUsers = async () => {
        const res = await fetch ('/api/users');
        const users = await res.json();
        setUsers(users);
    }
   getUsers();

}, []);

const addChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const res = await fetch('/api/chirps', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({userid, chirp})
    });
    const serverMessage = await res.json();
    console.log(serverMessage);
    console.log({userid, chirp});
    setUserid('');
    setChirp('');
    // history.push(`/details/${serverMessage.id}`);
    props.pizza();
}


    return (
    
                <div className = "col-md-7">
                    <form className="form-group p-3 border-primary rounded-lg bg-lightgray">
                        {/* <label>Userid</label>
                        <input value={userid} onChange={e => setUserid(e.target.value)} type="text" className="form-control my-1" />

 */}

                        <label>Userid</label>
                        <select value={userid} onChange={e => setUserid(e.target.value)} className="form-control my-1">
                            <option value="0">Select User...</option>
                            {users.map(user => (
                                <option key={`user-option-${user.id}`} value={user.id}>{user.name}</option>
                            ))}
                        </select>
                        
                        <label>Chirp</label>
                        <textarea value={chirp} onChange={e => setChirp(e.target.value)} rows={5} className="form-control my-1" />
                        <button onClick={addChirp}className="btn btn-primary btn-block w-50 mx-auto mt-3"> Add a Chirp</button>
                    

                    </form>
                </div>
        
    );
};

interface FormProps {
    pizza: () => Promise<void>; 
}

export default Form;