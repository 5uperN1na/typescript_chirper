import * as React from 'react';
import {useState, useEffect } from 'react';

const Profile: React.FC<ProfileProps> = (props) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className = "col-12">
                    <h1 className="display-1 text-center text-primary">Profile View</h1>
                </div>
            </section>
         
        </main>
    );
}

interface ProfileProps {}

export default Profile;