import React,{Component} from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import {NavLink} from 'react-router-dom'
import Logo from "../img/favicon.jpg";

class TopNavBar extends Component {
    render() {
        return (
            <Navbar bg="info" variant="dark" key={Math.random}>
            <div className="navbrand"><NavLink to='/welcome' className="link"><img src={Logo} alt="Logo"/> EasyHmeals</NavLink></div>
            <Nav className="mr-auto">
              <div className="navlink"><NavLink to='/keto' className="link">KETO</NavLink></div>
              <div className="navlink">||</div>
              <div className="navlink"><NavLink to='/musclebuilding' className="link">Muscle Building</NavLink></div>
              <div className="navlink">||</div>
              <div className="navlink"><NavLink to='/weightloss' className="link">Weight Loss</NavLink></div>
            </Nav>

            <Nav className="ml-auto">
              <div className="navlink"><NavLink to='/quiz' className="link">Quiz</NavLink></div>
              <div className="navlink">||</div>
              <div className="navlink"><NavLink to='/results' className="link">Results</NavLink></div>
              <div className="navlink">||</div>
              <div className="navlink"><NavLink to='bienvenue' className="link">Français</NavLink></div>
            </Nav>
          </Navbar>
          
        )
    }
}

export default TopNavBar