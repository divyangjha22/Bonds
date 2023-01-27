import React from 'react'
import "./about.css"
import "./MemberStyle.css"
import Feedback from "./Feedback"
// import { useLocation, useParams } from 'react-router-dom'



const About = () => {


const Team = (props)  =>{
  return(
    <>
     <div className="team">
    <div className="team-img">
      <img src={props.img} alt="Team Image" />
      <div className="team-social">
        <a className="social-tw" href=""><i className="fab fa-twitter"></i></a>
        <a className="social-fb" href=""><i className="fab fa-facebook-f"></i></a>
        <a className="social-li" href=""><i className="fab fa-linkedin-in"></i></a>
        <a className="social-in" href=""><i className="fab fa-instagram"></i></a>
        <a className="social-yt" href=""><i className="fab fa-youtube"></i></a>
      </div>
    </div>
    <div className="team-content">
      <h2>{props.name}</h2>
     
      <h3>
        {props.area}
      </h3>
      <p> {props.disc} </p>
      </div>
      </div>
    </>
  )
}

  
  
  return (
    <>
    <div className="about-section">
        <div className="inner-container">
            <h1 className='title'>About Us</h1>
            <p className="text">
                An online Platform to trade domestic bonds as well as corporate Bonds
            </p>
            <div className="member">
                
                  <span >
                  <Team name = "Abhishek Joshi" 
                  area = "Block Chain Developer"
                  img = "Images/developer.jfif"
                   />
                </span>
                <span>
                  <Team
                  name = "Divyang Jha" 
                  area = "React Developer"
                  img = "Images/developer.jfif" />
                </span>
                <span>
                  <Team
                  name = "Gaurav Soni" 
                  area = "Content Designer"
                  img = "Images/developer.jfif" />
                  
                </span>
               
            </div>
            </div>
            <Feedback />
            </div>
            

    

    </>
  )
}

export default About;