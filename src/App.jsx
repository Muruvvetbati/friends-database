import React, { useEffect } from 'react';
import axios from 'axios';
import './index.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';
import { Router, Switch } from 'react-router-dom';
import AuthContextProvider from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

function App() {
  useEffect(() => {
    axios
      .post('https://nextgen-project.onrender.com/api/s11d2/friends', {
        name: 'Mark',
        email: 'mark@f.com',
        age: 60,
      })
      .then((res) => console.log(res, 'al'))
      .catch((error) => console.log(error));
  }, []);
  return (
    <AuthContextProvider>
    <div className="App">
        <Header/>
      <Switch>
        <Router path = '/login'>
        <LoginForm />
        </Router>
        <Router path = '/header'>
        </Router>
        <PrivateRoute exact path='/friends'>
          <FriendsList/>
        </PrivateRoute>
        <PrivateRoute exact path='/friends/add'>
          <AddFriend/>
        </PrivateRoute>
        <PrivateRoute exact path='/'>
          <FriendsList/>
        </PrivateRoute>
      </Switch>
    
    </div>
    </AuthContextProvider>
  );
}

export default App;
