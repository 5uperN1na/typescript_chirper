import * as React from 'react';
import * as moment from 'moment';
import { useParams, useHistory, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { IChirp } from '../utils/interfaces';

const Details: React.FC<DetailsProps> = (props) => {
    const { chirpid } = useParams();
    const history = useHistory();

    const [chirp, setChirp] = useState<IChirp>(null);

    useEffect(() => {
        const getChirp = async () => {
            const res = await fetch(`/api/chirps/${chirpid}`);
            const chirp = await res.json();
            setChirp(chirp);
        };
        getChirp();
    }, [chirpid]);



    const deleteChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        // e.preventDefault(); 
        const res = await fetch( `/api/chirps/${chirpid}`, {
            method: 'DELETE',
        
        });
        const serverMsg = await res.json();
        console.log(serverMsg);
        history.push('/');  

    }


  

    return (
        <main className="container">
            <section className="row justify-content-center mt-3">


                <div className="col-md-7">
                    <div className="card-header bg-info text-white my-2"> {chirp?.name}</div>
                    <div className="card-body bg-success">
                        <h6 className="card-title">{chirp?.chirp}</h6>
                    </div>
                    <div className="card-footer d-flex justify-content-between align-items-center">
                        <p><i>{moment(chirp?.created_at).format("MMM Do YY")}</i></p>
                        <button onClick={() => history.push('/')} className="btn btn-info btn-sm">Go Back</button>

                        <button onClick={() => deleteChirp(chirpid)} className="btn btn-danger btn-sm">Delete</button>
                     
                        <Link to={`/edit/${chirpid}`} className="btn btn-warning btn-sm">Edit</Link>
                    </div>
                </div>


            </section>

        </main>
    );
}

interface DetailsProps { }

export default Details;

































//Half Stack Class Based Componenets
// import * as React from 'react';
// //use 'type' so there is not footprint on the code--does not compile to JS
// import type { IChirp } from '../utils/interfaces'
// import { RouteComponentProps, Link } from 'react-router-dom';

// class Details extends React.Component<DetailsProps, DetailsState> {
//     constructor(props: DetailsProps) {
//         super(props);
//         this.state = {
//             chirp: null
//         };
//     }


//     async componentDidMount() {
//         const res = await fetch('/api/chirps/' + this.props.match.params.chirpid);
//         const chirp = await res.json();
//         this.setState({ chirp });

//     }


//     render() {
//         return (


//             <section className="row justify-content-center mt-3">
//                 <div className="col-6">

//                     <div className="shadow p-4 mb-4 bg-white">
//                         <h4 className="text-center"> Name: {this.state.chirp?.name}!!</h4>
//                         <h3 className="text-center"> Chirp: {this.state.chirp?.text}!!</h3>
//                     </div>
//                     <div className="d-flex align-items-center justify-content-between">
//                         <Link to='/' className="btn btn-outline-primary btn-block mt-2 mx-auto w-25">Go Back</Link>
//                         {/* <Link to='/'>&lt;&lt;Go Back</Link> */}
//                         {/* <Link to={`/admin/${this.state.chirp?.id}`}>&gt;&gt;Edit/Delete Chirp</Link> */}
//                         <Link to={`/admin/${this.state.chirp?.id}`} className="btn btn-outline-success btn-block mt-2 mx-auto w-25">Update</Link>
//                     </div>
//                 </div>


//             </section>



//         );

//     }

// }

// interface DetailsProps extends RouteComponentProps<{ chirpid: string }> { }

// interface DetailsState {

//     chirp: IChirp
// }

// export default Details;