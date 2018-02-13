import ActionTypes from "../constant/constant"

const INITAL_STATE = {
   students:[],
   company:[],
   flage:false
}


const reducer = (state = INITAL_STATE ,action) => {    
   switch(action.type){
       case ActionTypes.STUDENT_DATA:
       return({
           ...state,
           students:[...state.students,action.payload]
       })

       case ActionTypes.COMPANY_DATA:
       return({
           ...state,
           company:[...state.company,action.payload]
       })
       case ActionTypes.STUDENT_ADMIN_DATA:
       return({
           ...state,
           students:[...state.students,action.payload]
       })
       case ActionTypes.COMPANY_ADMIN_DATA:
       return({
           ...state,
           company:[...state.company,action.payload]
       })
       case ActionTypes.COMPANY_DELETE:
       return({
           ...state,
           company:[...action.payload]
       })
       case ActionTypes.STUDENT_DELETE:
       return({
           ...state,
           students:[...action.payload]
       })
       case ActionTypes.SING_OUT:
       return({
           ...state,
           flage:true
       })
       
     default:
        return state
    }
}
export default reducer