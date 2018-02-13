import React,{Component} from "react"
import { connect } from "react-redux"
import firebase from "firebase";
import "../style/quiz.css"
import {student_admintDataAction,
   company_admintDataAction,
   student_deleteAction
  } from "../../store/action/action" 
import {company_deleteAction} from "../../store/action/action"  
let database = firebase.database().ref("/")

class Admin_data extends Component{
    constructor(){
        super()
    }

    componentWillMount(){
        database.child("Students").on("child_added",(snapshot)=>{
            let obj = snapshot.val()
            obj.id = snapshot.key
            this.props.student_adminData(obj)
        })

        database.child("Company").on("child_added",(snapshot)=>{
            let obj = snapshot.val()
            obj.id = snapshot.key
            this.props.company_adminData(obj)
        })
    }
    deleteHendler(id, ind){
     database.child(`Company/${id}`).remove()
     let deleteComp = this.props.root.company;
     let deletedItem = deleteComp.slice(0,ind).concat(deleteComp.slice(ind+1))
     console.log(deletedItem)
     this.props.company_delete(deletedItem)
    }

    student_delete(id,index){
      database.child(`Company/${id}`).remove()
      let deleteComp = this.props.root.students;
      let deletedItem = deleteComp.slice(0,index).concat(deleteComp.slice(index+1))
      console.log(deletedItem)
      this.props.student_delete(deletedItem)
    }


    render(){
        return(
            <div className="main_div">
                 <h1 className="h1">Admin</h1>
               <div className="row">
                 <div className="col-md-6">
                  <h2 className="h2">Company</h2>
                  <div>
                  {this.props.root.company.map((val, index)=>{
                    return (
                        <div key={index} >
                        <div className="card post_data" >
                          <div className="card-block" className="post">
                           <h3  className="card-title" >{val.companyName}</h3>
                            <div>
                               <b>Job: </b> {val.job}
                            </div>  
                            <div>
                               <b>Email: </b> {val.email}
                            </div>   
                            <div>
                               <b>Contact: </b> {val.contectnum}
                            </div> 
                            <div>
                               <b>Address: </b> {val.Address}
                            </div>
                            <button 
                            type="button"
                             className="btn btn-danger"
                             onClick={this.deleteHendler.bind(this,val.id, index)}
                             >delete
                             </button> 
                           </div>      
                        </div>    
                      </div>  
                    )
                })}      
                  </div>
                 </div>
                  <div className="col">
                 <h2 className="h2">Students</h2>                  
                  {this.props.root.students.map((val, index)=>{
                    return (
                        <div key={index} className="post_data">
                        <div className="card post_data" >
                          <div className="card-block" className="post">
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
                            <button 
                            type="button"
                             className="btn btn-danger"
                             onClick={this.student_delete.bind(this,val.id, index)}
                             >delete
                             </button> 
                           </div>
                        </div>                      
                      </div>  
                    )
                })}  
                </div>
              </div>
              </div>
        )
    }
}


const mapStateToProps = (state) =>{
    return ({
        root:state.root
      })
   }
   
  
  const mapDispatchToProps = (dispatch) =>{
   return ({
    student_adminData:(data)=>{dispatch(student_admintDataAction(data))},
    company_adminData:(data)=>{dispatch(company_admintDataAction(data))},
    company_delete:(data)=>{dispatch(company_deleteAction(data))},
    student_delete:(data)=>{dispatch(student_deleteAction(data))}

     })
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Admin_data);
  
  

