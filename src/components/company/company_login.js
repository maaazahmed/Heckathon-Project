import React, { Component } from 'react';
import '../style/login_signup.css';
import {connect} from 'react-redux'
import { Link }  from "react-router-dom"
import {company_log_in_Action} from "../../store/action/action"



class Company_LogIn extends Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.logInHandler = this.logInHandler.bind(this);

    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({ 
        [e.target.name]:e.target.value
     });
  }

  logInHandler(){
    let user = {
       email: this.state.email, 
       password: this.state.password, 
    } 
    this.props.company_LogIn(user)

    this.setState({ 
      email: '',
      password: '',
   });
  
  }

  render() {
    return (
     <div> 
        <div className="col-md-4 form-div">
        <h1>Company</h1>
          <input type="email"
           name="email"
            value={this.state.email}
             onChange={this.handleChange} className="form-control"
             placeholder="Email" />
             <br />
          
          <input type="password"
           name="password"
            value={this.state.password}
             onChange={this.handleChange} className="form-control" 
             placeholder="Password" />
             <br />

             <button type="button"
              className="btn btn-primary btn-block"
               onClick={this.logInHandler} >LogIn</button>
               <br />
              <Link to="/company_singUp" > Creacte an account</Link>
        </div>     
      </div>     
      
    );
  }
}

const mapStateToProps = (state) =>{
  return ({
    })
 }
 

const mapDispatchToProps = (dispatch) =>{
 return ({
   company_LogIn:(user)=>{
     dispatch(company_log_in_Action(user))
     }
   })
}


export default connect(mapStateToProps,mapDispatchToProps)(Company_LogIn);

