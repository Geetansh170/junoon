import React from 'react';
import {Link} from 'react-router-dom';
import fire from  '../../firebase/firebase';

const Logout = ({handleLogout})=> {
    let user = (fire.auth().currentUser)?'true':'false';
    return (
        <section className="hero">
            <nav>
                <h2>Welcome</h2>
              <Link to="/profile">  <button >Profile</button> </Link>
              {user?(
                <button onClick={handleLogout}>Logout</button>):
                (<button>Login</button>)
              }

            </nav>
        </section>
    );
};

export default Logout;