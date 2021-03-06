import React from 'react';
import '../../App.css';
import {connect} from 'react-redux'
import { Link } from "react-router-dom"
import { admin_sing_in_Action } from "../../store/action/action"
class AdminSignUp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.signUpHandler = this.signUpHandler.bind(this);
    this.state = {
      username: '',
      email: '',
      contectnum: '',
      password: '',
    };
  }

  handleChange(e) {
    this.setState({ 
        [e.target.name]:e.target.value
     });
  }

  signUpHandler(){
    let user = {
       username: this.state.username, 
       email: this.state.email, 
       contectnum: this.state.contectnum, 
       password: this.state.password, 
    } 
    

    this.props.singInWithEmailAndPass(user)
  }

  render() {
    return (
     <div> 
        <div className="col-md-4 form-div">
        <h1>Admin SignUp</h1>
          <input type="text"
            name="username"
             value={this.state.username}
             onChange={this.handleChange} className="form-control"
             placeholder="Username" />
             <br />
             
          <input type="email"
           name="email"
            value={this.state.email}
             onChange={this.handleChange} className="form-control"
             placeholder="Email" />
             <br />

             <input type="text"
           name="contectnum"
            value={this.state.contectnum}
             onChange={this.handleChange} className="form-control"
             placeholder="Phone Number" />
             <br />
          
          <input type="password"
           name="password"
            value={this.state.password}
             onChange={this.handleChange} className="form-control" 
             placeholder="Password" />
             <br />

             <button type="button"
              className="btn btn-primary btn-block"
              onClick={this.signUpHandler}>SignUp</button>
                <br />
              <Link to="./admin_login" > Already have an account</Link>
        </div>     
      </div>     
      
    );
  }
}

const mapStateToProps = (state) =>{
  return({

  })
}
const mapDispatchToProps = (dispatch) =>{
  return({
      singInWithEmailAndPass:(user)=>{
        dispatch(admin_sing_in_Action(user))
      }
  })
}


export default connect(mapStateToProps,mapDispatchToProps)(AdminSignUp);

