import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import { userContext } from '../../App';
import firebaseConfig from './firebase.config';
import { useHistory, useLocation } from 'react-router-dom';

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
} else {
    firebase.app(); // if already initialized, use that one
}

const Login = () => {
  
  // const handleGoogleSignIn = () => {
        // firebase.initializeApp(firebaseConfig);
        // var provider = new firebase.auth.GoogleAuthProvider();
        // firebase.auth()
        //     .signInWithPopup(provider)
        //     .then((result) => {

        //         var credential = result.credential;


        //         var token = credential.accessToken;

        //         var user = result.user;

        //     })
        //     .catch((error) => {

        //         var errorCode = error.code;
        //         var errorMessage = error.message;

        //         var email = error.email;

        //         var credential = error.credential;

        //     });
        let history = useHistory();
        let location = useLocation();
    
        const [loggedInUser, setLoggedInUser] = useContext(userContext)
        console.log(loggedInUser.uid);
        let { from } = location.state || { from: { pathname: "/" } };
        const provider = new firebase.auth.GoogleAuthProvider();
        const handleGoogleSignIn = () => {
            firebase.auth().signInWithPopup(provider)
                .then((result) => {
                    const user = result.user;
                    setLoggedInUser(user);
                    history.replace(from);
                })
                .catch((error) => {
                    this.errorMessage = 'Error - ' + error.message
                  //  var errorMessage = error.message;
                //    error(errorMessage, {
                //         position: "top-center",
                //         autoClose: 3000,
                //         hideProgressBar: false,
                //         pauseOnHover: true,
                //         draggable: true,
                //         progress: undefined,
                   // })
                });
        }
        const handleGooglelogout = () => {
            firebase.auth().signOut().then(() => {
                setLoggedInUser('')
            }).catch((error) => {
                // An error happened.
            });
    
        }
    
    
        const handleSubmitForm = (e) => {
            e.preventDefault()
        }
      
    return (
        <div>
             <form action="" onSubmit={handleSubmitForm}>
                    <input disabled placeholder="email" type="email" className="form-control" />
                    <br />
                    <input disabled placeholder="password" type="password" className="form-control" />
                    <br />
                    <div className="text-center">
                        {
                            !loggedInUser.email ? <button onClick={handleGoogleSignIn} className=" btn btn-outline-success w-50">Continue With Google</button>
                                :
                                <button onClick={handleGooglelogout} className=" btn btn-outline-success w-50 m-1">Log Out</button>
                        }
                        <p className="mt-2">Dont have an account? <a href="/">Create an account</a> </p>
                    </div>
                </form>
             {/* <h3>This is login</h3>
            <botton onClick={handleGoogleSignIn}>submit</botton> */}
        </div> 
    );
};  


export default Login;
