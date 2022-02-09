import React,{useContext} from 'react'
import Gauth from "../../GAuth/googleAuth";
import { AccountContext } from './accountContext';
import Profile from '../Profile/Profile';

export default function LoginForm() {
    const {switchToSignup,clearInputs,clearErrors, handleLogin, handleSignUp, handleLogout,email,setEmail,password,setPassword,user,setUser} = useContext(AccountContext)
    
    return (
        <>
       {user?(''):(
        <div className="commonBox">
            <form className="FormContainer">
                <input type="email" className="Input" placeholder="Email" 
                 required
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" className="Input" placeholder="Password" 
                 required
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}/>
            </form>
            <div className="Marginer-top" />
            <a href="#" className="MutedLink" >Forgot Password</a>
            <div className="Marginer-top" />
            <button className="SubmitButton" type="submit" onClick={handleLogin}>Sign In</button>
            <div className="Marginer-top" />
           <Gauth/>
            <div className="Marginer-top" />
            <a href="#" className="MutedLink" >Dont have an account? <a href="#" className="BoldLink" onClick={switchToSignup}>Sign Up</a></a>

        </div>
    )}
    </>
    )
}
