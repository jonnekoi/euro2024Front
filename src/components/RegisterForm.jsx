import React from 'react';

const url = 'http://localhost:3000/v1'
const RegisterForm = ({ setIsLoggedIn }) => {
  const handleSubmit = async (event)=> {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    data.role = 'user';
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    };
    try {
      const response = await fetch(url + '/auth/register', fetchOptions);
      if(response.ok) {
        setIsLoggedIn(true);
      }
      else if(response.status === 409) {
        alert("Username already exists!");
      }
    } catch (error){
      console.log(error);
    }
  }

  return (
      <>
        <div className="content-wrapper">
          <div className="flex justify-center" id="form-container">
            <form id="register-form" className="border p-4" onSubmit={handleSubmit}>
              <div>
                <input type="text" name="name" placeholder="Name" required={true} id="reg-name" className="border rounded p-2 m-1"/>
              </div>
              <div>
                <input type="text" name="username" placeholder="Username" required={true} id="reg-username" className="border rounded p-2 m-1"/>
              </div>
              <div>
                <input type="email" name="email" placeholder="email" required={true} id="reg-email" className="border rounded p-2 m-1"/>
              </div>
              <div>
                <input type="password" name="password" placeholder="Password" id="reg-password" required={true} className="border rounded p-2 m-1"/>
              </div>
              <div>
                <button type="submit" className="border rounded px-4 py-2 bg-blue-500 text-white mt-2">Register</button>
              </div>
            </form>
          </div>
        </div>
      </>
  )
};

export default RegisterForm;
