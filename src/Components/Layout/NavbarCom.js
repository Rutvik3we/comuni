import React, { Component } from 'react';
import logo from '../Layout/logo.jpg';
import '../Layout/NavbarCom.css';
import Profile from '../Login/Profile';
import Carasole from './Carasole';
import Login from '../Login/Login';
import Register from '../Login/Register';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { Nav, Navbar } from 'react-bootstrap';
export class NavbarCom extends Component {
  render() {
    return (
      <Router>
        
      <nav class="navbar navbar-expand-lg navbar-dark  static-top" style={{backgroundColor:"skyblue"}}>
      <div class="container">
        
        <a class="navbar-brand" href="#">
          <img src={logo} alt="..." height="100"/>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
            <a class="nav-link active" href="/home">Home</a>
              {/* <Nav.Link  as={Link} to="/profile"  >Profile</Nav.Link> */}
            </li>
            <li class="nav-item">
              
              <a class="nav-link active" id="Home" aria-current="page" href="/profile">Profile</a>
              
            </li>
           
              {/* <button class="btn btn-primary" href="/login" onClick={Login} type="submit" aria-expanded="false">
                Login
              </button> */}

              <Link type="button" class="btn btn-primary"as={Link} to="/login" >Login</Link>
              &nbsp;
              <Link type="button" class="btn btn-primary"as={Link} to="/register" >Registration</Link>
            
          </ul>
        </div>
        
      </div>
    
    </nav>
    
    
    <div>
                    <Switch>
                        <Route path="/profile">
                            <Profile />
                        </Route>
                        <Route path="/home">
                            <Carasole />
                        </Route>
                        <Route path="/login">
                            <Login />
                        </Route>
                        <Route path="/register">
                            <Register />
                        </Route>
                        
                    </Switch>
                </div>
              
    </Router>
    
    
    )
  }
}

export default NavbarCom
