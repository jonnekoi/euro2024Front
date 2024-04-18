import React, {useState} from 'react';

const url = 'http://localhost:3000/v1';
const LoginForm = ({ setIsLoggedIn }) => {
  const handleSubmit = async (event)=> {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(url +'/auth/login', fetchOptions);
      const responseData = await response.json();
      if(response.ok) {
        const { user, token } = responseData;
        sessionStorage.setItem('token', token);
        sessionStorage.setItem('user', JSON.stringify(user));
        setIsLoggedIn(true);
        console.log("login ok");
      }
    } catch (error){
      alert("Väärä käyttäjänimi tai salasana!")
    }
  }


  return (
      <>
        <div className="content-wrapper mb-10 mt-10">
          <div className="flex justify-center" id="form-container">
            <form id="login-form" className="border p-4" onSubmit={handleSubmit}>
              <div>
                <input type="text" name="username" placeholder="Username" className="border rounded p-2 m-1"/>
              </div>
              <div>
                <input type="password" name="password" placeholder="Password" className="border rounded p-2 m-1"/>
              </div>
              <div>
                <button type="submit" className="border rounded px-4 py-2 bg-blue-500 text-white mt-2">Log In</button>
              </div>
            </form>
          </div>
        </div>
      </>
  )
};

export default LoginForm;
