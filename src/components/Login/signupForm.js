import React , {useContext} from 'react'
import { AccountContext } from './accountContext'

export default function SignUp() {
    const {switchToSignin,clearInputs,clearErrors, handleLogin, handleSignUp, handleLogout,email,setEmail,password,setPassword} = useContext(AccountContext)
    return (
        <div className="commonBox">
            
            <form className="FormContainer">
                <input type="text" className="Input" placeholder="Full Name" />
                <input type="text" className="Input" placeholder="Email" required value={email}
          onChange={(e) => setEmail(e.target.value)}/>
                <input type="password" className="Input" placeholder="Password" 
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}/>
                <input type="password" className="Input" placeholder="Confirm Password" />
            </form>
            <div className="Marginer-top" />
            <div className="Marginer-top" />
            <button className="SubmitButton" type="submit" onClick={handleSignUp}>Sign Up</button>
            <div className="Marginer-top" />
            <a href="#" className="MutedLink" >Aldready have an account <a href="#" className="BoldLink" onClick={switchToSignin}>Sign In</a></a>
            <div className="Marginer-top" />

        </div>
    )
}
