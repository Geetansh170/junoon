import React, {useState, useEffect} from 'react';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Login from '../components/pages/Login';
import '../components/pages/Login.css';
import Logout from '../components/pages/Logout';


import fire from '../firebase/firebase';

const LogHandler =() => {

  const [user, setUser] = useState('');
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError,setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [hasAccount,setHasAccount] = useState(false);
  //const [profile,setProfile] = useState('false');

  const clearInputs = () => {
    setEmail('');
    setPassword('');
  }

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }

  
  //for pushing to firestore
  const push_to_firebase = function(){
  //  alert("information updated");
   // console.log(data);
    var db = fire.firestore();

    db.collection('users').doc(email).set({
        email:email,
        name:'',
        city:'',
        phone:'',
        nickName:'',
        timestamp: Date.now()
    })
    .then(function() {
        console.log("Message sent");
       
    })
    .catch(function(error) {
        console.error("Message could not be sent: ", error);
    });
  }

  const handleProfile = () =>{

  }

  //for calling function of databases
  
  const handleLogin = () => {
    clearErrors();
    fire.auth().signInWithEmailAndPassword(email,password)
    .catch((err)  =>{
      switch (err.code) {
        case "auth/invalid-email":
          case "auth/user-disabled":
            case "auth/user-not-found":
               setEmailError(err.message);
               break;
               case "auth/wrong-password":
                 setPasswordError(err.message);
                 break;
      }
    });
  };

    const handleSignUp = () => {
      clearErrors();
      fire.auth()
      .createUserWithEmailAndPassword(email,password)
      .catch((err) => {
        switch(err.code){
          case "auth/email-already-in-use":
            case "auth/invalid-email":
              setEmailError(err.message);
              break;
              case "auth/weak-password":
                setPasswordError(err.message);
                break;
        }
      });
      push_to_firebase();
    };

    const handleLogout = () =>{

      fire.auth().signOut();
    };
    
    const authListener = () => {
      fire.auth().onAuthStateChanged((user) => {
        if(user) {
          clearInputs();
          setUser(user);

        }
          else  {
            setUser("");
          }
        
      });
    };

    
    useEffect(() => {
      authListener();
    }, []);
  
  return (
   
    
     
     
   <div className="LogHandler">
   
  

    {user?(<Logout handleLogout={handleLogout} />):
    
(
        <Login email ={email}
        setEmail={setEmail}
        password={password}
         setPassword={setPassword}
          handleLogin={handleLogin} 
          handleSignUp={handleSignUp} 
          hasAccount={hasAccount} 
          setHasAccount={setHasAccount} 
          emailError={emailError}
          passwordError={passwordError}/>
          
)};
</div>
     
    
     
  );

}

export default LogHandler;
