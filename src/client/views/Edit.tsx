import * as React from 'react';
import { useState, useEffect } from 'react';
import { useParams, useHistory, Link } from 'react-router-dom';
import { IChirp } from '../utils/interfaces';
import type { IUser } from '../utils/interfaces';


const Edit: React.FC<EditProps> = (props) => {

    const { chirpid } = useParams();

    const history = useHistory();

    const [chirp, setChirp] = useState<string>('');


    const editChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const res = await fetch(`/api/chirps/${chirpid}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            // body: JSON.stringify({ name: name, text: chirp })
            body: JSON.stringify({ name, chirp })


        });
        const serverMsg = await res.json();
        console.log(serverMsg);
        history.push('/');


    }

    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className="col-6">
                <form className="form-group p-3 border-primary rounded-lg bg-lightgray">

                    <div className="shadow p-4 mb-4 bg-white">
                        <h3 className="text-center"> Edit</h3>


                        
                        <textarea value={chirp} onChange={e => setChirp(e.target.value)} rows={5} className="form-control my-1" />
                        <button onClick={editChirp} className="btn btn-primary btn-block w-30 mx-auto mt-3"> Save</button>


                    </div>
                    <div className="d-flex align-items-center justify-content-between">
                        <Link to={`/details/${chirpid}`} className="btn btn-info btn-sm">Go Back</Link>

                        {/*                         
                        <button onClick={() => editChirp(chirpid)} className="button muted-button">Edit</button>  */}
                        {/* <Link to={`/admin/${chirpid}`} className="btn btn-outline-success btn-block mt-2 mx-auto w-25">Update</Link> */}
                    </div>
                    </form>
                
                
                </div>
               













            </section>

        </main>
    );
}

interface EditProps { }

export default Edit;