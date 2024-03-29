import React,{useState} from 'react'
import firebase from '../../configs/firebase'


const TestApp = () => {

    const [mobile, setMobile] = useState('')
    const [otp, setOtp] = useState('')


     let handleChangeMobile = (e) =>{
        setMobile(e.target.value)
      }

      let handleChangeOtp = (e) =>{
        setOtp(e.target.value)
      }




      let configureCaptcha = () =>{
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', {
          'size': 'invisible',
          'callback': (response) => {
            // reCAPTCHA solved, allow signInWithPhoneNumber.
            onSignInSubmit();
            console.log("Recaptca verified")
          },
          defaultCountry: "IN"
        });
      }
      let onSignInSubmit = (e) => {
        e.preventDefault()
        configureCaptcha()
        const phoneNumber = "+91" + mobile;
        console.log(phoneNumber)
        const appVerifier = window.recaptchaVerifier;
        firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
            .then((confirmationResult) => {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
              window.confirmationResult = confirmationResult;
              console.log("OTP has been sent")
              // ...
            }).catch((error) => {
              // Error; SMS not sent
              // ...
              console.log("SMS not sent")
            });
      }
      let onSubmitOTP = (e) =>{
        e.preventDefault()
        const code = otp;
        console.log(code)
        window.confirmationResult.confirm(code).then((result) => {
          // User signed in successfully.
          const user = result.user;
          console.log(JSON.stringify(user))
          alert("User is verified")
          // ...
        }).catch((error) => {
          // User couldn't sign in (bad verification code?)
          // ...
        });
      }
     
        return (
          <div>
            <h2>Login Form</h2>
            <form onSubmit={onSignInSubmit}>
              <div id="sign-in-button"></div>
              <input type="number" name="mobile" placeholder="Mobile number" required onChange={handleChangeMobile}/>
              <button type="submit">Submit</button>
            </form>
    
            <h2>Enter OTP</h2>
            <form onSubmit={onSubmitOTP}>
              <input type="number" name="otp" placeholder="OTP Number" required onChange={handleChangeOtp}/>
              <button type="submit">Submit</button>
            </form>
          </div>
        )
      

}

export default TestApp