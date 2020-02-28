import React, { Component } from 'react'
import { Navbar, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import Navgurukul_logo from '../components/navgurukul.png'
class NavBar extends Component {
  render() {
    console.log(this.props, )
    return (
      <Navbar expand="lg" variant="light" style={{ backgroundColor: '#3578E5' }}>
        {/* <h1>Navgurukul</h1> */}
        <img src={Navgurukul_logo} style={{height:"200px"}} alt="img"/>

        <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
            <Link to="/login" ><Button variant="primary" style={{height:'40px',width:"90px"}}>Login</Button> </Link>
            </li>
            <li className="nav-item">
            <Link to="/signup"> <Button variant="primary" style={{height:'40px',width:"90px"}}>Signup</Button></Link>
            </li>
          </ul>
        </div>
      </Navbar>
    )
  }
}
export default NavBar

