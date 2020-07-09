import * as React from 'react';
import { Route, RouteComponentProps, Link } from 'react-router-dom';
import type { IChirp } from '../utils/interfaces'

class Admin extends React.Component<AdminProps, AdminState> {
    constructor(props: AdminProps) {
        super(props);
        this.state = {
            name: '',
            text: ''
        };
    }


    handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({ name: e.target.value });

    }

    handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        this.setState({ text: e.target.value });

    }

    handleDeleteChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        const res = await fetch( `/api/chirps/${this.props.match.params.chirpid}`, {

            method: 'DELETE',
        
        });
        const serverMsg = await res.json();
        console.log(serverMsg);
        this.props.history.push('/');
        

    }


    handleEditChirp = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault(); 
        const res = await fetch( `/api/chirps/${this.props.match.params.chirpid}`, {

            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name: this.state.name, text: this.state.text })

        });
        const serverMsg = await res.json();
        console.log(serverMsg);
        this.props.history.push(`/details/${this.props.match.params.chirpid}`);
        

    }




    async componentDidMount() {
        const res = await fetch('/api/chirps/' + this.props.match.params.chirpid);
        const chirp: IChirp = await res.json();
        this.setState({ name: chirp.name, text: chirp.text });

    }



    render() {
        return (

            <section className="row justify-content-center mt-3">
                <div className="col-md-8">
                    <form className="form-group p-3 border rounded-lg shadow-sm">
                        <label htmlFor="name"> Name</label>
                        <input value={this.state.name} onChange={this.handleNameChange} type="text" className="form-control my-1" />
                        <label htmlFor="text"> Text</label>
                        <textarea value={this.state.text} onChange={this.handleTextChange} rows={10} className="form-control my-1" />
                        <button onClick={this.handleEditChirp} className="btn btn-outline-primary btn-block mt-3 mx-auto w-50">Save</button>
                        <button onClick={this.handleDeleteChirp} className="btn btn-outline-primary btn-block mt-3 mx-auto w-50">Delete</button>
                        <Link to={`/details/${this.props.match.params.chirpid}`} className="btn btn-outline-primary btn-block mt-3 mx-auto w-50">Go Back</Link>

                    </form>
                </div>
            </section>

        );

    }

}

interface AdminProps extends RouteComponentProps<{ chirpid: string} >{}
interface AdminState {
    name: string;
    text: string;
}

export default Admin;