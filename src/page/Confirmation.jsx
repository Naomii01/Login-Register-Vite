import { useState } from "react";
import "./Confirmation.css";
import "./SignIn.css";

export default function Confirmation(){
    
      const [otp, setOtp] = useState (new Array(4).fill(""))


      function handleChange (e,index){
        if(isNaN(e.target.value))
         return false;

        setOtp([...otp.map((data, indx) => (indx ===index? e.target.value:data))])

        if(e.target.value && e.target.nextSibling){
            e.target.nextSibling.focus()
          }
      }


    


    return (
        
        <div className="confirmationContainer">
            <h1 className="logo">Enter OTP</h1>
         <div className="otp-area">
            {
            otp.map((data, i)=>{
                return <input type ="text"
                 value={data}
                 maxLength={1}
                 onChange= {(e)=>handleChange(e, i)}
                 />;
            })
        }
         </div>
         <center>
         <button type="submit" className="signInButton"
         onClick={()=>alert(otp.join(""))}
         >Submit</button></center>

        </div>
    );
}