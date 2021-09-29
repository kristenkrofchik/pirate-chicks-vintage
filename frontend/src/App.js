import React, { useState, useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import useLocalStorage from './common/useLocalStorage';
import Navigation from './routes/Navigation';
import LoadingSpinner from './common/LoadingSpinner';
import PirateApi from './common/Api';
import UserContext from './auth/UserContext';
import jwt from 'jsonwebtoken';
import Routes from './routes/Routes';
import Homepage from './home/Homepage';

//key name for stroing token in localstorage for 'remember me' re-login
export const TOKEN_STORAGE_ID = 'pirate-token';

/**Pirate Chicks Vintage main app.
 * set different elements of state---
 * infoLoaded - has user data been pulled from API? manages the loading spinner.
 * currentUser- how we tell if a user is logged in.
 * token- for logged in users, their authentication JWT. read from localStorage and synced to there.
 */

function App() {
  const [infoLoaded, setInfoLoaded] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const [token, setToken] = useLocalStorage(TOKEN_STORAGE_ID);


  /**Load user info from Pirate Chicks API. runs when a user logs in and has a token.*/
  useEffect(function loadUserInfo() {

    async function getCurrentUser() {
      if (token) {
        try {
          let { username } = jwt.decode(token);
          // put the token on the Api class so it can use it to call the API.
          PirateApi.token = token;
          let currentUser = await PirateApi.getCurrentUser(username);
          setCurrentUser(currentUser);
        } catch (err) {
          console.error("App loadUserInfo: problem loading", err);
          setCurrentUser(null);
        }
      }
      setInfoLoaded(true);
    }
    setInfoLoaded(false);
    getCurrentUser();
  }, [token]);

  /**Handle user logout */
  function logout() {
    setCurrentUser(null);
    setToken(null);
  }

  /**Handles signup. auto logs user in and sets token. */
  async function signup(signupData) {
    try {
      let token = await PirateApi.signup(signupData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  /**Handles login. */
  async function login(loginData) {
    try {
      let token = await PirateApi.login(loginData);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("login failed", errors);
      return { success: false, errors };
    }
  }

  if (!infoLoaded) return <LoadingSpinner />;


  return (
    <BrowserRouter>
      <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      <div className='App grid-container'>
        <Navigation logout={logout} />
        <Routes login={login} signup={signup} />
        <Homepage />
      </div>
    </UserContext.Provider>
  </BrowserRouter>
  );
}

export default App;
