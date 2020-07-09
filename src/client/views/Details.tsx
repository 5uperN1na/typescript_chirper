import * as React from 'react';
//use 'type' so there is not footprint on the code--does not compile to JS
import type { IChirp } from '../utils/interfaces'
import { RouteComponentProps, Link } from 'react-router-dom';

class Details extends React.Component<DetailsProps, DetailsState> {
    constructor(props: DetailsProps) {
        super(props);
        this.state = {
            chirp: null
        };
    }


    async componentDidMount() {
        const res = await fetch('/api/chirps/' + this.props.match.params.chirpid);
        const chirp = await res.json();
        this.setState({ chirp });

    }


    render() {
        return (


            <section className="row justify-content-center mt-3">
                <div className="col-6">

                    <h4 className= "text-center"> Name: {this.state.chirp?.name}!!</h4>
                    <h4 className="text-center"> Chirp: {this.state.chirp?.text}!!</h4>

                    <div className="d-flex align-items-center justify-content-between">
                        <Link to='/'>&lt;&lt;Go Back</Link>
                        <Link to={`/admin/${this.state.chirp?.id}`}>&gt;&gt;Edit/Delete Chirp</Link>
                    </div>
                </div>


            </section>



        );

    }

}

interface DetailsProps extends RouteComponentProps<{ chirpid: string }> { }

interface DetailsState {

    chirp: IChirp
}

export default Details;