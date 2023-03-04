import './index.css';

import { BiCopyright } from 'react-icons/bi';

import {MdSchool} from 'react-icons/md';

import {MdComputer} from 'react-icons/md';

import {GrProjects} from 'react-icons/gr';
 
import {GrAchievement} from "react-icons/gr";

import {BsLinkedin} from 'react-icons/bs';

import {MdEmail} from 'react-icons/md';
import {FaHome} from 'react-icons/fa';
import {BsTelephoneFill} from 'react-icons/bs';

const Resume = () =>{
  return (
    <div className='resume-container'>


<div className="sidebar">
        <div className="education-container">
          <a href="#educationSection" style={{textDecoration: "none"}}><MdSchool className="icon-style"/></a>
          <a href="#educationSection" style={{textDecoration: "none", marginLeft: '8px'}} className="display-styling"><h2>Education</h2></a>
        </div>


        <div className='skills-container'>
        <a href="#skillSection" style={{textDecoration: "none"}}><MdComputer className="icon-style"/></a>
        <a href="#skillSection" style={{textDecoration: "none", marginLeft: '8px'}} className="display-styling"><h2>Skills</h2></a>
        </div>

        <div className="projects-container">
        <a href="#projectsSection" style={{textDecoration: "none"}}><GrProjects className="projects-icon"/></a>
        <a href="#projectsSection" style={{textDecoration: "none", marginLeft: '8px'}} className="display-styling"><h2>Projects</h2></a>
        </div>

        <div className="achievements-container">
          <a href="#achievementsSection" style={{textDecoration: "none", color: "indigo"}}><GrAchievement className='achievements-icon'/></a>
          <a href="#achievementsSection" style={{textDecoration: "none", marginLeft: '8px'}} className="display-styling"><h2>Achievements</h2></a>
        </div>
    
  </div>

















    <div className="sidebar-bg-container">






      
      <div className="bg-container-resume">

      <div className='details-image-container'>
      <div className='details-container'>

        <h1 className="heading-resume">Veeresh Kumar Kavali</h1>
        <div className="address-container">
          <FaHome className="home-icon"/>
          <p className="paragraph">Guntakal, Andhra Pradesh, 515801 |</p>
          <MdEmail className='mail-icon'/>
          <a href="https://Veereshkumar956@gmail.com/#inbox?compose=new" target="_self"><p className="mail-paragraph">Veereshkumar956@gmail.com</p></a>
        </div>
        <div className='linkedin-container'>
          <BsLinkedin className="icon"/>
          <a href="https://www.linkedin.com/in/veereshkumar18" target="_self"><p className="linkedin-paragraph">https://www.linkedin.com/in/veereshkumar18</p></a>
        </div>

        <div className="phone-number-container">
          <BsTelephoneFill className='icon'/>
          <p className="phone-number-heading">Phone No: <span className="phone-number">9989379112</span></p>
        </div>

      </div>

      <img src="https://res.cloudinary.com/dxgomsuxu/image/upload/v1677426811/Veeresh_Pic_In_White_bg_sh3yj6.jpg" alt="veeresh pic" className="veeresh-pic"/>

      </div>
        <h1 id="educationSection" className="side-heading">EDUCATION</h1>
        <hr className="hr-line"/>
        <div className="text-container">
          <p className='text-paragraph'>NxtWave Disruptive Technologies</p>
          <p className="text-paragraph">Feb'22-Ongoing</p>
        </div>
        <p className="bottom-text-paragraph">Industry Ready Certification in Full-stack Development</p>

        <div className="text-container">
          <p className='text-paragraph'>Sri Venkateswara University College of Engineering, Tirupati</p>
          <p className="text-paragraph">2017 - 2021</p>
        </div>
        <p className="bottom-text-paragraph">B Tech (Bachelor of Technology)_Civil Engineering (CE) (8.35 CGPA)</p>

        <div className="text-container">
          <p className='text-paragraph'>Sri Chaitanya Junior College, Vijayawada</p>
          <p className="text-paragraph">2013 - 2015</p>
        </div>
        <p className="bottom-text-paragraph">Intermediate_MPC (95.6%)</p>


        <div className="text-container">
          <p className='text-paragraph'>ST.Peter's English Medium High School, Guntakal</p>
          <p className="text-paragraph">2012 - 2013</p>
        </div>
        <p className="bottom-text-paragraph">Secondary School Of Certificate (9.7 CGPA)</p>

        <h1 id="skillSection" className="side-heading">SKILLS</h1>
        <hr className="hr-line"/>
        <p className="course-title">Frontend:<span className="course-name">HTML, CSS, Bootstrap, JavaScript, React.js</span></p>
        <p className="course-title">Backend:<span className="course-name">Python, Express, Node.js</span></p>
        <p className="course-title">Databases:<span className="course-name">SQLite</span></p>


        <h1 id="projectsSection" className="side-heading">PROJECTS</h1>
        <hr className="hr-line"/>

        <div>
          <h1 className="project-heading">Food Munch (<a href="https://veereshfoodmunc.ccbp.tech" target="_self"><span className="project-link">veereshfoodmunc.ccbp.tech</span></a>)</h1>
          <p className="project-description">Developed a responsive website for Food Store where users can see a list of food items, detailed information
            about a food item, offers</p>

          <ul className="unordered-list-resume">
              <li className="list-item-resume">Designed page using following HTML structure elements like li, header, article, footer elements and
                  different bootstrap components to show different sections in the website and different bootstrap classes
                  for responsiveness through mobile-first approach.
              </li>
              <li className='list-item-resume'>Implemented local search functionality by using input element, JavaScript event listeners & filtered
                  countries using Array filter method.
              </li>
          </ul>
          <p className="course-title">Technologies used:<span className="course-name">HTML, CSS, Bootstrap</span></p>
        </div>

        <div>
          <h1 className="project-heading">Countries Search (<a href="https://veereshcountry.ccbp.tech" target="_self"><span className="project-link">veereshcountry.ccbp.tech</span></a>)</h1>
          <p className="project-description">Developed responsive countries search application which shows all countries and respective population in the
             world. We can also search by specific country</p>

          <ul className="unordered-list-resume">
              <li className="list-item-resume">Fetched countries list from server asynchronously using fetch GET HTTP API call and implemented
                  responsiveness using Bootstrap grid system and CSS box model
              </li>
              <li className='list-item-resume'>Implemented local search functionality by using input element, JavaScript event listeners & filtered
                  countries using Array filter method.
              </li>
          </ul>
          <p className="course-title">Technologies used:<span className="course-name">HTML, CSS, , JS, REST API Calls, Bootstrap</span></p>

        </div>

        <div>
          <h1 className="project-heading">IPL Dashboard (<a href="https://veereshiplboard.ccbp.tech" target="_self"><span className="project-link">veereshiplboard.ccbp.tech</span></a>)</h1>
          <p className="project-description">Implemented IPL Dashboard app where users can list of ipl team, individual team details and respective team
            matches info</p>
          <ul className="unordered-list-resume">
              <li className="list-item-resume">Implemented UI such as home dashboard, individual team info routes by using React Router library
                  components like Route, Switch, Link, props, lists & keys.
              </li>
              <li className='list-item-resume'>Fetched teams list from server asynchronously using fetch GET HTTP API call & individual team
                  details, matches info by sending team id as path parameter.
              </li>
              <li className='list-item-resume'>Implemented 404 not found page for invalid paths by keeping 404 Route as last route in the Switch
                  component with * path.
              </li>
          
          </ul>
          <p className="course-title">Technologies used:<span className="course-name">React JS, Routing, REST API Calls, CSS, Bootstrap</span></p>
        </div>

        <h1 id="achievementsSection" className="side-heading">ACHIEVEMENTS</h1>
        <hr className="hr-line"/>

        <ul className='unordered-list-resume'>
              <li className="list-item-resume">Participated in CCBP 50days coding challenge and secured a certificate</li>
              <li className='list-item-resume'>Secured 1st place with Elite + Gold certificate by scoring 94% in NPTEL Plastic Waste Management
                online course among 16,000+ participants 
              </li>
              <li className='list-item-resume'>Participated in One Day National Workshop On ‘Precast Construction Technology(PCT)’ conducted in
                S.V university, Tirupati and secured a certificate 
              </li>
        </ul>
    
      </div>
    </div>

    <div className="footer-element">
          <BiCopyright style={{color: "white"}} />
          <p className="zoho-mail">veereshk@peoplelinkvc.com</p>
    </div>
  </div>
  

  )

}

export default Resume


