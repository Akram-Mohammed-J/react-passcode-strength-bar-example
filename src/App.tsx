import React from 'react';
import { PasswordIndicator } from "react-passcode-strength-bar";
import { useState } from "react";
import './App.css';

function App() {
   const [passcode, setPasscode] = useState("");
   const [email, setEmail] = useState("");
  return (
    <>
     <div className='container'>
     <div>
     <label htmlFor="email">Email</label>
      <input
        type="text"
        name="password"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
     </div>
     <div>
     <label htmlFor="password">Password</label>
      <input
        type="text"
        name="test"
        value={passcode}
        onChange={(e) => {
          setPasscode(e.target.value);
        }}
      />
     </div>
     <div>
     <PasswordIndicator
        password={passcode}
        show={true}
        indicate={(value)=>console.log(value)}
        colorConfig={{ strong: "green", moderate: "black", weak: "yellow" }}
        containerStyle={{ 
        marginTop: '5px',
        borderRadius: '10px',
        border: '1px solid #ccc',
        padding: '3px',
        width: '300px',
        height: '10px',
      }}
      />
     </div>
     <button>Submit</button>
    </div>
    </>
  );
}

export default App;
