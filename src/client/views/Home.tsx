import * as React from 'react';
import { useState, useEffect } from 'react';
import type { IChirp } from '../utils/interfaces';
import ChirpCard from '../component/ChirpCard';
import Form from '../component/Form';

const Home: React.FC<HomeProps> = (props) => {

    const [chirps, setChirps] = useState<IChirp[]>([]);

    const getChirps = async () => {
        const res = await fetch('/api/chirps');
        const chirps = await res.json();
        setChirps(chirps);
    };

    useEffect(() => {
        getChirps();

    }, []);



    return (
        <main className="container">
            <section className="row justify-content-center mt-3">

                <Form pizza={getChirps} />

            </section>

            <section className="row justify-content-center mt-3">

                {chirps.map(chirp => (
                    <ChirpCard key={`chirp-card-${chirp.id}`} chirp={chirp} />

                ))}




                {/* 
                Getting chirps and mapping them into a list */}
                {/* <div className="col-8">
                    <ul className="list-group list-group-flush">
                        {chirps.map((chirp) => (
                            <li

                                className="list-group-item list-group-item-info py-4 d-flex justify-content-between align-items-center"
                                key={`chirp-key-${chirp.id}`}>
                                <span>
                                    <b>{chirp.name}:</b> </span>
                                <span className="ml-2">
                                    {chirp.chirp}
                                </span>


                            </li>
                        ))}
                    </ul>
                </div> */}













            </section>

        </main>
    );
}

interface HomeProps {
    


}

export default Home;































//Half Stack Class Base

// //use 'type' so there is not footprint on the code--does not compile to JS
// import type { IChirp } from '../utils/interfaces'
// import * as moment from 'moment';
// import { RouteComponentProps } from 'react-router-dom';

// class Home extends React.Component<HomeProps, HomeState> {
//     constructor(props: HomeProps) {
//         super(props);
//         this.state = {
//             chirps: []
//         };

//     }

//     async componentDidMount() {
//         const res = await fetch('/api/chirps');
//         const chirps = await res.json();
//         this.setState({ chirps });

//     }

//     render() {
//         return (
//             <section className="row justify-content-center mt-3">
//                 <div className="col-md-6">
//                     <ul className="list-group-item list-group-item" >
//                         {this.state.chirps.map(chirp => {
//                             return <li onClick={() => this.props.history.push(`/details/${chirp.id}`)} className="list-group-item py-3 hover-pt" key={`chirp-li-${chirp.id}`}>
//                                 <h6>@ {chirp.name}</h6>
//                                 <br />
//                                 <p>{chirp.text}</p>
//                                 <br />
//                                 <small className="text-muted">{moment(chirp.written_at).format('MMMM Do YYYY, h:mm:ss a')}</small>
//                             </li>

//                         })}

//                     </ul>
//                 </div >
//             </section >

//         );

//     }

// }

// interface HomeProps extends RouteComponentProps { }

// interface HomeState {
//     chirps: IChirp[]
// }



// export default Home;