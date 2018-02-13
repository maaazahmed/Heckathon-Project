import React,{Component} from "react"
import "./style/quiz.css"
import { connect }  from "react-redux"
import {singuot} from "../store/action/action"
import history from "../History"
class Navigation extends Component{

    logout(){
       this.props.singUot()
        history.push("/")
    }

    render(){
        return(
            <div className="row Navigation navbar-fixed">
               <div className="col-md-12" >
                 <h2>Campus Recruitment System</h2>
              </div>                
            </div>   
        )
    }
}


  
  
  export default (Navigation);
  
  