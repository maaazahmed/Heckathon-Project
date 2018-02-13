import React,{Component} from "react"
import { connect } from "react-redux"
import Bootstrap from "bootstrap/dist/css/bootstrap.css"
import history from "../History"


class NaveComponent extends Component{
    constructor(){
        super()
        this.adminLogIn = this.adminLogIn.bind(this) 
        this.studantLogIn = this.studantLogIn.bind(this) 
        this.companyLogIn = this.companyLogIn.bind(this) 
    }


    adminLogIn(){
        history.push("/admin_login")
    }

    studantLogIn(){
        history.push("/studant_singUp")
    }

    companyLogIn(){
        history.push("/company_singUp")
    }

    render(){
        return(
            <div className="namve_button"> 
                <button className="btn btn-outline-primary btn-lg btn-block" onClick={ this.adminLogIn }>Admin Login</button>
                <br />
                <button className="btn btn-outline-primary btn-lg btn-block" onClick={ this.studantLogIn }>Student Login</button>
                <br /> 
                <button className="btn btn-outline-primary btn-lg btn-block" onClick={ this.companyLogIn }>Company Login</button>
             </div>   
        )
    }
}


const mapStateToProps = (state) =>{
    return ({
      })
   }
   
  
  const mapDispatchToProps = (dispatch) =>{
   return ({
     LogIn:(user)=>{
       }
     })
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(NaveComponent);
  
  

