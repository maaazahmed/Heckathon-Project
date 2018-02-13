import React,{Component} from "react"
import { connect } from "react-redux"
import firebase from "firebase";
import "../style/quiz.css"
import { studentDataAction } from "../../store/action/action" 


let database = firebase.database().ref("/")
class Company_data extends Component{
    constructor(){
        super()
    }

    componentWillMount(){
        database.child("Students").on("child_added",(snapshot)=>{
            let obj = snapshot.val()
            obj.id = snapshot.key
            this.props.studentData(obj)
        })
    }

    render(){
        return(
            <div>
                 <h1 className="h1">Students</h1>   
                {this.props.root.students.map((val, index)=>{
                return (
                        <div key={index}>
                        <div className="card post" >
                          <div className="card-block post_data">
                           <h3 className="card-title">{val.username}</h3>
                           <div>
                              <b>Roll No : </b>{val.rollnumber}  
                            </div> 
                            <div>
                              <b>Email: </b>{val.email}  
                            </div>   
                            <div>
                              <b>Certification: </b>{val.classS}  
                            </div>
                            <div>
                              <b>Percentage : </b>{val.marks}  
                            </div>
                            <div>
                              <b>Year : </b>{val.year}  
                            </div>
                           </div>
                        </div>                      
                      </div>  
                    )
                })}         
             </div>   
        )
    }
}


const mapStateToProps = (state) =>{
    // console.log(state.root)
    return ({
        root:state.root
      })
   }
   
  
  const mapDispatchToProps = (dispatch) =>{
   return ({
    studentData:(data)=>{
        dispatch(studentDataAction(data))
    }
     })
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Company_data);
  
  

