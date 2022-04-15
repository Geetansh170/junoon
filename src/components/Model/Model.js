import React from "react";
import "./Modal.css";
import Login from "../Login/loginForm"
import SignUp from "../Login/signupForm"
import LogHandler from "../Login/LogHandler"


function Modal({ closeModel }) {
  return (
    <div>
    {/*  <div className="modalBackground">
       <div className="modalContainer"> */}
        {/* <div className="titleCloseBtn">
          <button
            onClick={() => {
              closeModel(false);
            }}
          >
            X
          </button>
        </div> */}

        {/* <Login/> */}
        {/* <SignUp /> */}
        <LogHandler />
        {/* <p>Lorem5adsfasdllllllllllllllllllllllllllnkh m,</p> */}

        {/* <div className="title">
          <h1>Are You Sure You Want to Continue?</h1>
        </div>
        <div className="body">
          <p>The next page looks amazing. Hope you want to go there!</p>
        </div>
        <div className="footer">
          <button
            onClick={() => {
              closeModel(false);
            }}
            id="cancelBtn"
          >
            Cancel
          </button>
          <button>Continue</button>
        </div> */}




   </div>
    //  {/* </div>
    //  </div> */}
  );
}

export default Modal;