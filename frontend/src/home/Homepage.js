import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from '..auth/UserContext';

/**Homepage of Website.
 * Shows Welcome Message, Naviation, login/register buttons
 * Routed at /
 */

function Homepage() {
    const { currentUser } = useContext(UserContext);

    return (
        <div className='Homepage'>
            <div className='container text-center'>
                <h1>Pirate Chicks Vintage</h1>
                <p>Welcome to Our Vintage Treasure Chest!</p>
                {currentUser
                    ? <h2>
                    Welcome Back, {currentUser.username}!
              </h2>
              : (
                  <p>
                    <Link className="btn btn-primary font-weight-bold mr-3"
                          to="/login">
                      Log in
                    </Link>
                    <Link className="btn btn-primary font-weight-bold"
                          to="/signup">
                      Sign up
                    </Link>
                  </p>
              )}
            </div>
        </div>
    )
}

export default Homepage;