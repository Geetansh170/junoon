import React, { useEffect, useState } from 'react'
import LoginForm from './loginForm'
import SignupForm from './signupForm'
import { motion } from 'framer-motion'
import { AccountContext } from './accountContext'
import fire from '../../firebase/firebase';
import Profile from '../Profile/Profile';
import Navbar from './Navbar/Navbar';

const backdropVariants = {
    expanded:{
        width: "190%",
        height: "1080px",
        borderRadius: "50%",
        transform : "rotate(60)"
    },
    collapsed:{
        width: "160%",
        height: "550px",
        borderRadius: "50%",
        transform : "rotate(60)"
    }
}

const expadingTransition = {
    type: "spring",
    duration: 2.3,
    stiffness: 30,
}



export default function AccountBox() {

    const [expanded,setExpanded] = useState(false)
    const [active, setActive] = useState("signin")
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

    const playExpandingAnimation = () =>{
            setExpanded(true)
            setTimeout(()=>{
                setExpanded(false)
            },expadingTransition.duration *1000 -1000)
    }

    const switchToSignup =()=>{
        playExpandingAnimation()
        setTimeout(()=>{
            setActive("signup")
        },400)   
        setHasAccount(!hasAccount)
        
    }
    const switchToSignin =()=>{
        playExpandingAnimation()
        setTimeout(()=>{
            setActive("signin")
        },400) 
         
    }
    
    const handleLogin = () => {
    clearErrors();
    console.log(email,password)
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
      window.location.href="/profile";
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
      clearInputs();
     // alert("account created");
     // window.location.href = "/login"
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
  
    
    const contextValue ={switchToSignup ,active,setActive,switchToSignin,clearInputs,clearErrors, handleLogin, handleSignUp, handleLogout,email,setEmail,password,setPassword,user,setUser}




    return (
      <>
      { user?(<>
      <AccountContext.Provider value={contextValue}>
      <div className="navbar-container">
       <Navbar />
      </div>
     <Profile/>
   </AccountContext.Provider>
  </>
      ):
      (<div className='AppContainer'>
      
     
        <AccountContext.Provider value={contextValue}>
            <div className="navbar-container">
             <Navbar />
        </div>
        <div className="BoxContainer"> 
            <div className="TopContainer">
                <motion.div initial={false} transition={expadingTransition} className="BackDrop" animate={expanded? "expanded" : "collapsed"} variants={backdropVariants}/>
                    {active==='signin' && <div className="HeaderContainer">
                        <h2 className="HeaderText">Welcome</h2>
                        <h2 className="HeaderText">Back</h2>
                        <h5 className="SmallText">Please sign-in to continue</h5>
                    </div>}
                    {active==='signup' && <div className="HeaderContainer">
                        <h2 className="HeaderText">Create</h2>
                        <h2 className="HeaderText">Account</h2>
                        <h5 className="SmallText">Please sign-up to continue</h5>
                    </div>}
            </div>
            <div className="InnerContainer">
                {active === "signin" && <LoginForm />}
                {active === "signup" && <SignupForm />}
                
            </div>
        </div>
        </AccountContext.Provider>
       
      
        
        </div>
      )}
      </>
      
      
    )
}
