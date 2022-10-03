import React, {useEffect,useState} from 'react';
import fire from '../../firebase/firebase';
//import './Profile.css';
//import 'bootstrap/dist/css/bootstrap.min.css';
//import { doc, getDocFromCache } from "firebase/firestore";


// Get a document, forcing the SDK to fetch from the offline cache.


const Profile = () =>{
  
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

     

    return(

        

   
    
<div>
  
    <nav class="navbar navbar-light bg-light">
        <div class="container-fluid">
          <span class="navbar-brand mb-0 h1">Navbar</span>
        </div>
      </nav>
    
    
    
                    
                        <form class="mx-4">
                            
                        
                            <div class="mb-3 form-group w-50">
                                <label class="form-label ">Email address</label>
                                <input disabled onChange={(e) => setEmail(e.target.value)}value={email} id="email" type="email" class="form-control" />
                              </div>
                            
                        
                        
                            <div class="mb-3 form-group w-50">
                                <label class="form-label">Name</label>
                                <input onChange={(e) => setName(e.target.value)} value={name} id="name"  type="text" class="form-control"/>
                              </div>
                        
                        
                            <div class="mb-3 form-group w-50">
                                <label class="form-label">Nick Name</label>
                                <input onChange={(e) => setNickName(e.target.value)} id="nickname" value={nickName}  type="text" class="form-control"/>
                              </div>
                            
                        
                        
                        
                            <div class="mb-3 form-group w-50">
                                <label class="form-label">City</label>
                                <input onChange={(e) => setCity(e.target.value)} id="city" value={city}  type="text" class="form-control"/>
                              </div>
                        
                        
                            <div class="mb-3 form-group w-50">
                                <label class="form-label">Phone</label>
                                <input onChange={(e) => setPhone(e.target.value)}  value={phone} id="phone"  type="number" class="form-control"/>
                              </div>
                              <button onClick={contact_submit} type="submit" id="submit" class="btn btn-primary form-group w-25">Submit</button>
                        </form>
                    
       

        
        </div>
   
    
  
    )
}


export default Profile;