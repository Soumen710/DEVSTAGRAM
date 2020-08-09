import React, { Component } from 'react';
class Service extends Component {
    render() {

        if (this.props.data) {
            var profilepic = "images/" + this.props.data.image7;
            var svgpic4 = "images/" + this.props.data.image4;
            var svgpic5 = "images/" + this.props.data.image5;
            var svgpic6 = "images/" + this.props.data.image6;

        }

        return (
            <section id="service">
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profilepic} alt="Devstagram" />
                    </div>
                    <div className="nine columns main-col">
                        <h2>Our Services</h2>
                    </div>
                    <img className="svg-pic4" src={svgpic4} alt="Devstagram" />
                    <img className="svg-pic5" src={svgpic5} alt="Devstagram" />
                    <img className="svg-pic6" src={svgpic6} alt="Devstagram" />
                    <div className="design">
                        <h1>Wev-Design</h1>
                        <p>dgfkjwhsdfjkhksdjhgfkjsdhgkjhvlashdlghiv alihdgfvlihlhlsdfhvlkheflkh</p>
                    </div>
                    <div className="develop">
                        <h1>Wev-Development</h1>
                        <p>dgfkjwhsdfjkhksdjhgfkjsdhgkjhvlashdlghiv alihdgfvlihlhlsdfhvlkheflkh</p>
                    </div>
                    <div className="app">
                        <h1>App-Development</h1>
                        <p>dgfkjwhsdfjkhksdjhgfkjsdhgkjhvlashdlghiv alihdgfvlihlhlsdfhvlkheflkh</p>
                    </div>
                </div>

            </section>
        );
    }
}
export default Service;

