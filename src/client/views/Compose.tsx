import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

class Compose extends React.Component<ComposeProps, ComposeState> {
    constructor(props: ComposeProps) {
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

    handleChirpSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        console.log({ name: this.state.name, text: this.state.text });
        const res = await fetch('/api/chirps', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ name: this.state.name, text: this.state.text })

        });
        const serverMsg = await res.json();
        console.log(serverMsg);
        this.props.history.push('/');
 
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
                        <button onClick={this.handleChirpSubmit} className="btn btn-outline-primary btn-block mt-3 mx-auto w-50">Submit</button>

                    </form>
                </div>

            </section>


        );

    }

}

interface ComposeProps extends RouteComponentProps { }
interface ComposeState {
    name: string;
    text: string;
};

export default Compose;