import React, { useEffect } from 'react';
import axios from 'axios';
import './index.css';
import LoginForm from './components/LoginForm';
import Header from './components/Header';
import FriendsList from './components/FriendsList';
import AddFriend from './components/AddFriend';

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
    <div className="App">
      <Header />
      <LoginForm />
    </div>
  );
}

export default App;
