import * as React from 'react';

class Template extends React.Component<TemplateProps, TemplateState> {
    constructor(props: TemplateProps) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <main className="container">
                <section className="row justify-content-center mt-3">
                    <h1 className="display-1 text-primary text-center"> Template!!!</h1>
                </section>
            </main>

        );

    }

}

interface TemplateProps{}
interface TemplateState {}

export default Template;