import React from 'react';
import './SignUp.css';

const Success = () => {
  return (
    <div className="flex flex-col items-center pt-10 gap-3 text-2xl">
  <span className="text-1971C2 font-semibold">
    You Have Successfully Registered!!
  </span>
  <span>
    Click on the button below to Continue to the Sign In page to Log in
  </span>
  <button className="py-3 px-9 bg-a6d8ff text-1971C2 font-bold rounded-2xl border-2 border-1971C2">
  <Link to="/">Sign In</Link>
  </button>
</div>
   
  )
}

export default Success