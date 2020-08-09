import React, { Component } from 'react';

class About extends Component {
  render() {

    if(this.props.data){
      var profilepic= "images/"+this.props.data.image3;
      var bio = this.props.data.bio;
    
      
    }

    return (
      <section id="about">
      <div className="row">
         <div className="three columns">
            <img className="profile-pic"  src={profilepic} alt="Devstagram" />
         </div>
         <div className="nine columns main-col">
            <h2>About Us</h2>
         </div>
            <div className="story">
            <p className="responsive-headline">{bio}</p>
            </div>
      </div>

   </section>
    );
  }
}

export default About;
