import React, { useContext, useState } from 'react';

function LoginForm() {
  const {login} = useContext();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  const handleChange = (e) => {
    setForm({
      ...from,
      [e.target.name]: e.target.value,

    })
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <h2>Username</h2>
            <input name='username'
            onChange={handleChange}
            value ={form.username}
          placeholder={'Username'}
          />
          </div>
          <div>
            <h2>Password</h2>
            <input name='password'
            onChange={handleChange}
            value ={form.password}
          placeholder={'Password'}
          />
          </div>
          <button type='submit'>SUBMIT</button>

        </form>
     
      </div>
    </div>
  );
}

export default LoginForm;
