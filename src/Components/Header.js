import React, { Component } from 'react';
import ParticlesBg  from "particles-bg";

class Header extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name;
      var svgpic= "images/"+this.props.data.image;
      var svgpic2= "images/"+this.props.data.image1;
      var svgpic3= "images/"+this.props.data.image2;
     
    }

    return (
      <header id="home">
      <ParticlesBg type="cobweb" bg={true} />
      <nav id="nav-wrap">
         <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
	      <a className="mobile-btn" href="#home" title="Hide navigation">Hide navigation</a>

         <ul id="nav" className="nav">
            <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
            <li><a className="smoothscroll" href="#about">About</a></li>
            <li><a className="smoothscroll" href="#service">Services</a></li>
            <li><a className="smoothscroll" href="#contact">Contact</a></li>
         </ul>
      </nav>

      <div className="row banner">
      
         <div className="banner-text">
            <h1 className="responsive-headline">{name}</h1>
            </div>
            <br></br><br></br>
            <h3>
  <a href="" className="typewrite" data-period="2000" data-type='[ "Hi, We are Devstagram.", "We are Creative.", "We Invent Design.", "We Love to Develop." ]'>
    <span className="wrap"></span>
  </a>
</h3>
  <hr/>
       
         <img className="svg-pic3"  src={svgpic3} alt="Devstagram" />

         </div>
         <img className="svg-pic2"  src={svgpic2} alt="DevstagramT" />
        

            <img className="svg-pic"  src={svgpic} alt="Devstagram" />
 

      <p className="scrolldown">
         <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
      </p>

   </header>
    );
  }
}

export default Header;
