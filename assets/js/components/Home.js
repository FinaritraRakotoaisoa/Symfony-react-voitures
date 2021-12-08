import React, { Component } from 'react';
import { Route, Switch, Redirect, Link, WithRouter } from 'react-router-dom';
import Catalogues from './Catalogues';
import Admin from './Admin';

class Home extends Component {

  render() {
  	return( 
      <div>
               <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                   <Link className={"navbar-brand"} to={"/"}> CATALOGUE DES VOITURES </Link>
                   <div className="collapse navbar-collapse" id="navbarText">
                       <ul className="navbar-nav mr-auto">
                          <li className="nav-item">
                                 <Link className={"nav-link"} to={"/catalogues"}> Catalogues </Link>
                           </li>
                           <li className="nav-item">
                                 <Link className={"nav-link"} to={"/admin"}> Admin </Link>
                           </li>
                       </ul>
                   </div>
               </nav>
               <Switch>
                   <Redirect exact from="/" to="/catalogues" />
                   <Route path="/catalogues" component={Catalogues} />
                   <Route path="/admin" component={Admin} />
               </Switch>
           </div>
  		)
  }


}

export default Home;