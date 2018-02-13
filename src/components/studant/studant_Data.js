import React,{Component} from "react"
import { connect } from "react-redux"
import firebase from "firebase";
import "../style/quiz.css"
import { companyDataAction } from "../../store/action/action" 
let database = firebase.database().ref("/")
class Studant_data extends Component{
    constructor(){
        super()
    }

    componentWillMount(){
        database.child("Company").on("child_added",(snapshot)=>{
            let obj = snapshot.val()
            obj.id = snapshot.key
            this.props.componyData(obj)
        })
    }

    render(){
        return(
            <div>
              <div>
                  <h1 className="h1">Companys</h1>
                {this.props.root.company.map((val, index)=>{
                    return (
                        <div key={index} className="post_data">
                        <div className="card post" >
                          <div className="card-block">
                           <h3 className="card-title">{val.companyName}</h3>
                            <div>
                               <b>Job: </b> {val.job}
                            </div>  
                            <div>
                               <b>Email: </b> {val.email}
                            </div>   
                            <div>
                               <b>Email: </b> {val.contectnum}
                            </div> 
                            <div>
                               <b>Address: </b> {val.Address}
                            </div> 
                           </div>
                        </div>                      
                      </div>  
                    )
                })}         
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
    componyData:(data)=>{
        dispatch(companyDataAction(data))
    }
     })
  }
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(Studant_data);
  
  

