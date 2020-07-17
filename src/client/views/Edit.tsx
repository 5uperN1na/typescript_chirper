import * as React from 'react';
import {useState, useEffect } from 'react';

const Edit: React.FC<EditProps> = (props) => {
    return (
        <main className="container">
            <section className="row justify-content-center mt-3">
                <div className = "col-12">
                    <h1 className="display-1 text-center text-primary">Edit View</h1>
                </div>
            </section>
         
        </main>
    );
}

interface EditProps {}

export default Edit;