import React,{useState,useEffect} from "react";
import fire from '../../firebase/firebase';
import './Profile.css';
import { makeStyles, Typography, Box, withStyles } from "@material-ui/core";
import Navbar from '../../components/Login/Navbar/Navbar';


import AboutUserDetail from "./UserDetails";
import NewBadge from "./Badge";

const Profile = () => {
  // const classes = useStyles();
  const [user,setUser] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [city, setCity] = useState('');
  const [name, setName] = useState('');
  const [nickName, setNickName] = useState('');

var db = fire.firestore();
  var push_to_firebase = function(data){
      alert("information updated");
      console.log();
    

      db.collection('users').doc(email).update({
          name:data["name"],
          nickName:data["nickname"],
          phone:data["phone"],
          city:data["city"],
          timestamp: Date.now()
      })
      .then(function() {
          console.log("Message sent");
         
      })
      .catch(function(error) {
          console.error("Message could not be sent: ", error);
      });
    }
  

  var contact_submit = function(e){
     e.preventDefault();
      var name = document.getElementById("name");
      var email = document.getElementById("email");

      var nickname = document.getElementById("nickname");
      var phone = document.getElementById("phone");

      var city = document.getElementById("city");
     
     

      var data = {
        "name": name.value,
        "email": email.value,
        "phone":phone.value,
        "city":city.value,
        "nickname":nickname.value
      }
      push_to_firebase(data);

  }

  const fetchProfile=async(email)=>{
      var docRef = db.collection("users").doc(email);
    
docRef.get().then((doc) => {
  if (doc.exists) {
      console.log("Document data:", doc.data());
      let e= doc.data();
      (e.email)? setEmail(e.email):setEmail('');
      (e.phone)? setPhone(e.phone):setPhone('');
      (e.city)? setCity(e.city):setCity('');
      (e.nickName)? setNickName(e.nickName):setNickName('');
      (e.name)? setName(e.name):setName('');

  } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
  }
}).catch((error) => {
  console.log("Error getting document:", error);
});

  };
  const authListener = () => {
    
    
     // var user = fire.auth().currentUser;
      fire.auth().onAuthStateChanged((user) => {
        if(user) {
           setUser('');
          setUser(user);
          fetchProfile(user.email);

          
        }
        
    
          else  {
            alert('Please login');
          }
        
      
    });
  }

    
    
    useEffect(() => {
      authListener();
    }, []);
  const arr = [ 
    {
      position: 'Winner',
      competition: 'Monochrome'
    },
    {
      position: 'Winner',
      competition: 'Monochrome'
    },
  

  ]

  return (
    
    <>
      <Navbar/>
      <div className="circle-bottom"></div>
      <div className="circle-top"></div>
      <div className="profile">
        <div className="photo-links">
          <div className="image">
            <img src="" alt="profileImage" />
            <p style={{fontSize: 18}} className="headingColor">USER</p>
            <p style={{ fontSize: 14, opacity: 0.8 }}>
              POSITION
            </p>
          </div>
          <div className="link-wrapper">
            <a style={{fontSize: 18}} className="headingColor" href="https://www.instagram.com/?hl=en">
              <i className="fab fa-instagram" />
              @INSTANAME
            </a>

            <a style={{fontSize: 18}} className="headingColor" href>
              <i className="fas fa-images" />
              My images
            </a>
            <a style={{fontSize: 18}} className="headingColor" href>
              <i className="fas fa-paper-plane" />
              Upcoming comp
            </a>
          </div>
          <div className="new-competition">
            <p>NEW COMPETITION</p>
            <i class="fas fa-gamepad"></i>
          </div>
        </div>


        <div className="about-me">
          <AboutUserDetail
            nickname={nickName}
            phone={phone}
            city={city}
            email={email}
          />
          <div className="all-badge">
            <h2>Badges</h2>
            <div className="badges">
              <div className="couple-badges">
                {arr.map((arrItem, index) => {
                  return <NewBadge arrItem={arrItem} />;
                })}
              </div>
            </div>
          </div>
        </div>
        </div>
    
    </>
    
  );
};

export default Profile;