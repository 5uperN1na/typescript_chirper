import * as React from 'react';

class Admin extends React.Component<AdminProps, AdminState> {
    constructor(props: AdminProps) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            
                <section className="row justify-content-center mt-3">
                    <h1 className="display-1 text-primary text-center"> Admin!!!</h1>
                </section>
           

        );

    }

}

interface AdminProps{}
interface AdminState {}

export default Admin;