import * as React from 'react';
import { NavLink } from 'react-router-dom';

class Navbar extends React.Component<NavbarProps, NavbarState> {



    render() {
        return (

            <nav className="row justify-content-center">
               
                    <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link"  exact to='/'>Home </NavLink>
                    <NavLink className="text text-decoration-none text-danger mx-3 py-5 btn-btn-link"  exact to='/compose'>Add Chirp </NavLink>
                    <img src="/newChirp3.png" alt="chirper"   />
                 
            </nav>

        );

    }

}

interface NavbarProps { }
interface NavbarState { }

export default Navbar;