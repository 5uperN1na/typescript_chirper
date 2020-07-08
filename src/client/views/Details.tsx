import * as React from 'react';
//use 'type' so there is not footprint on the code--does not compile to JS
import type { IChirp } from '../utils/interfaces'
import { RouteComponentProps } from 'react-router-dom';

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
                <h1 className="display-1 text-primary text-center"> Details for {this.state.chirp?.name}!!</h1>
            </section>


        );

    }

}

interface DetailsProps extends RouteComponentProps<{ chirpid: string }> { }

interface DetailsState {

    chirp: IChirp
}

export default Details;