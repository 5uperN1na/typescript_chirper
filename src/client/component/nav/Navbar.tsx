import * as React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component<NavbarProps, NavbarState> {



    render() {
        return (

            <div className="row justify-content-center">
                <nav className="col-6 justify-content-center border-bottom border-top border-danger p-2">
                    <NavLink className="text text-decoration-none text-primary mx-3 py-1 btn-btn-link" activeClassName='text-danger border-bottom border-top border-primary' exact to='/'>Home </NavLink>
                    <NavLink className="text text-decoration-none text-primary mx-3 py-1 btn-btn-link" activeClassName='text-danger border-bottom border-top border-primary' exact to='/compose'>Compose </NavLink>
                </nav>
            </div>



        );

    }

}

interface NavbarProps { }
interface NavbarState { }

export default Navbar;