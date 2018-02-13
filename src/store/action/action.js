import ActionTypes from "../constant/constant"
import firebase from "firebase"
import history  from "../../History"


/**************************************************/ 
/**************************************************/ 
/**************************************************/ 
 // Initialize Firebase
 var config = {
    apiKey: "AIzaSyBsFwEFsYYlBJ_TVDHu3NXkW1eHEK4QC1M",
    authDomain: "new-todo-project.firebaseapp.com",
    databaseURL: "https://new-todo-project.firebaseio.com",
    projectId: "new-todo-project",
    storageBucket: "new-todo-project.appspot.com",
    messagingSenderId: "463609736874"
  };
  firebase.initializeApp(config);
/**************************************************/ 
/**************************************************/ 
/**************************************************/

let database = firebase.database().ref("/")
export const admin_sing_in_Action = (user)=>{
    console.log(user)
    return dispatch => {
        // console.log('user ===>>>', user.password);
        firebase.auth().
        createUserWithEmailAndPassword(user.email, user.password)
        .then(function (res) {
            database.child('users/' + res.uid).set(user)
                .then(function () {
                    history.push("./admin_login")
                })
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
      } 
}

export const admin_log_in_Action = (user)=> {
    // console.log(user)
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(function (res) {
            database.child('users/' + res.uid).once('value', function (snapshot) {
                history.push("/Admin_Data")
            })
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            // console.log(error);
        });
      }
}
/*********************************************/
/*********************************************/
/*********************************************/
/*********************************************/
export const student_sing_Up_Action = (user)=>{
    console.log(user)
    return dispatch => {
        // console.log('user ===>>>', user.password);
        firebase.auth().
        createUserWithEmailAndPassword(user.email, user.password)
        .then(function (res) {
            database.child('Students/' + res.uid).set(user)
                .then(function () {
                    history.push("./studant_Data")
                })
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
      } 
}

export const student_log_in_Action = (user)=>{
    // console.log(user)
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(function (res) {
            database.child('Students/' + res.uid).once('value', function (snapshot) {
                history.push("/studant_Data")
            })
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
            // console.log(error);
        });
      }
} 


/*********************************************/
/*********************************************/
/*********************************************/
/*********************************************/
export const company_sing_Up_Action = (user)=>{
    console.log(user)
    return dispatch => {
        // console.log('user ===>>>', user.password);
        firebase.auth().
        createUserWithEmailAndPassword(user.email, user.password)
        .then(function (res) {
            database.child('Company/' + res.uid).set(user)
                .then(function () {
                    history.push("/company_Data")
                })
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                alert('The password is too weak.');
            } else {
                alert(errorMessage);
            }
            console.log(error);
        });
      } 
}

export const company_log_in_Action = (user)=>{
    // console.log(user)
    return dispatch => {
        firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(function (res) {
            database.child('Company/' + res.uid).once('value', function (snapshot) {
                history.push("/company_Data")
            })
        })
        .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                alert('Wrong password.');
            } else {
                alert(errorMessage);
            }
        });
      }
} 

export const studentDataAction = (data)=>{
    return dispatch => {
      dispatch({
           type:ActionTypes.STUDENT_DATA,
           payload:data
       })
      }
}


export const companyDataAction = (data)=>{
    return dispatch => {
      dispatch({
           type:ActionTypes.COMPANY_DATA,
           payload:data
       })
      }
}

export const student_admintDataAction = (data)=>{
    return dispatch => {
      dispatch({
           type:ActionTypes.STUDENT_ADMIN_DATA,
           payload:data
       })
      }
}
export const company_admintDataAction = (data)=>{
    return dispatch => {
      dispatch({
           type:ActionTypes.COMPANY_ADMIN_DATA,
           payload:data
       })
      }
}

export const company_deleteAction = (data)=>{
    console.log(data)
    return dispatch => {
      dispatch({
           type:ActionTypes.COMPANY_DELETE,
           payload:data
       })
      }
}

export const student_deleteAction = (data)=>{
    console.log(data)
    return dispatch => { 
      dispatch({
           type:ActionTypes.STUDENT_DELETE,
           payload:data
       })
      }
    }
