import React, { Component } from 'react';
 import Navbar from './components/navbar'
 import Page from './components/page'
import 'bootstrap/dist/css/bootstrap.min.css';
import Signups from './pages/Signup';
import './App.css'
import login from './pages/login';
// import  CreatePost from './components/CreatePost'
import {  Route, Switch } from 'react-router-dom'
import Profile from './components/profile';
// import Home from './pages/Home'
import edit from './components/edit';
import Homepage from './components/Homepage'
//  import Checking from './components/Checking';

export default class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Navbar/> */}
        {/* <Checking/> */}
        
         <Switch>
          {/* <Switch> */}
           <Route exact path="/" component={Navbar} /> 
          {/* </Switch> */}
        
         <Route path="/home" component={Homepage} />
         <Route path="/profile" component={Profile} />
         <Route path="/edit" component={edit} />
         {/* <div className="auth-wrapper">
            <div className="auth-inner"> */}
               
               <Route path="/login" component={login} />
              <Route path="/signup" component={Signups} /> 
              <Route component={Page} />
             {/* </div>
          </div> */}
         </Switch>
        
      </div>

    )
  }
}
;
