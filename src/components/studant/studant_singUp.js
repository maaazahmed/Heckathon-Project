import React from 'react';
import '../../App.css';
import {connect} from 'react-redux'
import { Link } from "react-router-dom"
import { student_sing_Up_Action } from "../../store/action/action"



class StudantSignUp extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.handleChange = this.handleChange.bind(this);
    this.signUpHandler = this.signUpHandler.bind(this);
    this.state = {
      username: '',
      email: '',
      rollnumber:"",
      marks:"",
      contectnum: '',
      password: '',
      classS:"",
      year:""
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
       rollnumber: this.state.rollnumber, 
       password: this.state.password, 
       marks:this.state.marks,
       classS:this.state.classS,
       year:this.state.year,
    } 
    

    this.props.student_singInWithEmailAndPass(user)
  }

  render() {
    return (
     <div> 
        <div className="col-md-4 form-div">
        <h1>Student SignUp</h1>
          <input type="text"
            name="username"
             value={this.state.username}
             onChange={this.handleChange} className="form-control"
             placeholder="Name" />
             <br />
             
             <input type="text"
           name="rollnumber"
            value={this.state.rollnumber}
             onChange={this.handleChange} className="form-control"
             placeholder="Roll number" />
             <br />

             <input type="text"
           name="classS"
            value={this.state.classS}
             onChange={this.handleChange} className="form-control"
             placeholder="Class" />
             <br />

             <input type="text"
           name="marks"
            value={this.state.marks}
             onChange={this.handleChange} className="form-control"
             placeholder="Percentage" />
             <br />
             
             <input type="text"
           name="year"
            value={this.state.year}
             onChange={this.handleChange} className="form-control"
             placeholder="year" />
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
              <Link to="./studant_login" > Already have an account</Link>
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
      student_singInWithEmailAndPass:(student)=>{
        dispatch(student_sing_Up_Action(student))
      }
  })
}


export default connect(mapStateToProps,mapDispatchToProps)(StudantSignUp);

