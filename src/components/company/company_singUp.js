import React from 'react';
import '../../App.css';
import {connect} from 'react-redux'
import { Link } from "react-router-dom"
import { company_sing_Up_Action } from "../../store/action/action"



class Company_SignUp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.signUpHandler = this.signUpHandler.bind(this);
    this.state = {
      companyName: '',
      email: '',
      Address:"",
      contectnum: '',
      password: '',
      job:"",
      time:""
    
    };
  }

  handleChange(e) {
    this.setState({ 
        [e.target.name]:e.target.value
     });
  }

  signUpHandler(){
    let user = {
      companyName: this.state.companyName, 
       email: this.state.email, 
       contectnum: this.state.contectnum, 
       Address: this.state.Address, 
       password: this.state.password, 
       job:this.state.job
    
    } 
    this.props.company_singUp(user)
  }

  render() {
    return (
     <div> 
        <div className="col-md-4 form-div">
        <h1>Company</h1>
          <input type="text"
            name="companyName"
             value={this.state.companyName}
             onChange={this.handleChange} className="form-control"
             placeholder="Company name" />
             <br />

             <input type="text"
            name="job"
             value={this.state.job}
             onChange={this.handleChange} className="form-control"
             placeholder="Job" />
             <br />

             <input type="text"
            name="time"
             value={this.state.time}
             onChange={this.handleChange} className="form-control"
             placeholder="Time" />
             <br />

          <input type="email"
           name="email"
            value={this.state.email}
             onChange={this.handleChange} className="form-control"
             placeholder="Email" />
             <br />

             <input type="text"
           name="Address"
            value={this.state.Address}
             onChange={this.handleChange} className="form-control"
             placeholder="Address" />
             <br />

             <input type="text"
           name="contectnum"
            value={this.state.contectnum}
             onChange={this.handleChange} className="form-control"
             placeholder="Contect Number" />
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
              <Link to="./company_login" > Already have an account</Link>
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
     company_singUp:(student)=>{
        dispatch(company_sing_Up_Action(student))
      }
  })
}


export default connect(mapStateToProps,mapDispatchToProps)(Company_SignUp);

