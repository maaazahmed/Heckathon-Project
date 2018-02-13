import React, { Component } from 'react';
import { Router, Route } from "react-router-dom"
import AdminSignUp from "./components/Admin/admin_singUp"
import AdminLogIn from "./components/Admin/admin_login"
import history from "./History"
import Admin_data from "./components/Admin/Admin_Data"
import NaveComponent from "./components/Navebar"
import StudantSignUp from "./components/studant/studant_singUp"
import StudantLogIn from "./components/studant/studant_login"
import Studant_data from "./components/studant/studant_Data"

import Company_data from "./components/company/company_Data"
import Company_LogIn from "./components/company/company_login"
import Company_SignUp from "./components/company/company_singUp"
import Navigation from "./components/navigation"


class Routers extends Component{
    render(){
       return(
         <Router history={history}>
            <div>
               <Navigation />
              <Route exact path="/" component={NaveComponent} />
              <Route exact path="/admin_singUp" component={AdminSignUp} />
              <Route exact path="/admin_login" component={AdminLogIn} />
              <Route exact path="/Admin_Data" component={Admin_data} />
              {/*********************************************************/}
              <Route exact path="/studant_singUp" component={StudantSignUp} />
              <Route exact path="/studant_login" component={StudantLogIn} />
              <Route exact path="/studant_Data" component={Studant_data} />
              {/*********************************************************/}
              <Route exact path="/company_singUp" component={Company_SignUp} />
              <Route exact path="/company_login" component={Company_LogIn} />
              <Route exact path="/company_Data" component={Company_data} />
             </div>
         </Router>
       )
    }
    
}


export default Routers