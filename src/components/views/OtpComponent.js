import React from "react";
import { useState } from "react";
import firebase from "../../configs/firebase";

let OtpComponent = () => {
  let [otpPhoneNumber, setOtpPhoneNumber] = useState("");
  let [otp, setOtp] = useState("");

  

  let handlePhoneNumber = (e) => {
    setOtpPhoneNumber(e.target.value);
  };

  let handleOtp = (e) => {
    setOtp(e.target.value);
  };

let configureCaptcha = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      "sign-in-button",
      {
        size: "invisible",
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log("Recaptcha verified");
        },
        defaultCountry: "IN"
      }
    );
  };

let onSubmitOTP=(e)=>{
    e.preventDefault();
    if(otp.length!==6){
      alert("Enter valid OTP")
      return;
    }


    const code = otp;
    window.confirmationResult.confirm(code).then((result) => {
        alert("User is verified");
    }).catch((error) => {
      // User couldn't sign in (bad verification code?)
      // ...
      alert("Incorrect OTP");
    });

    setOtp("");

}





  let onSignInSubmit=(e)=>{
    e.preventDefault();
    if(otpPhoneNumber.length!==10){
      alert("Enter valid phone number")
      return;
    }
    configureCaptcha()
    const phoneNumber = "+91"+otpPhoneNumber;
    const appVerifier = window.recaptchaVerifier;
    firebase.auth().signInWithPhoneNumber(phoneNumber, appVerifier)
        .then((confirmationResult) => {
          // SMS sent. Prompt user to type the code from the message, then sign the
          // user in with confirmationResult.confirm(code).
          window.confirmationResult = confirmationResult;
          alert("OTP sent");
          // ...
        }).catch((error) => {
          // Error; SMS not sent
          // ...
          alert("SMS not sent");
        });

        setOtpPhoneNumber("");
  }




  return (
    <>
      <div
        className="ui container"
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="ui two column stackable padded grid">
          <div className="column">
            <div className="ui card" style={{ border: "1px solid" }}>
              <div className="content">
                <div className="header">Login</div>
              </div>
              <div className="content">
                <form className="ui form" onSubmit={onSignInSubmit}>
                  <div className="fourteen wide field">
                    <div className="ui black labeled input">
                      <div className="ui black label">+91</div>
                      <input
                        type="number"
                        placeholder="Enter phone Number"
                        onInput={handlePhoneNumber}
                        value={otpPhoneNumber}
                        style={{
                          backgroundColor: "#A9A9A9",
                          webkitTextFillColor: "black",
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <div id="sign-in-button"></div>
                  </div>
                  <div className="field">
                    <button className="ui button primary">
                      send OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="column">
            <div className="ui card" style={{ border: "1px solid" }}>
              <div className="content">
                <div className="header">OTP Verify</div>
              </div>
              <div className="content">
                <form className="ui form" onSubmit={onSubmitOTP}>
                  <div className="thirteen wide field">
                    <div className="ui input">
                      <input
                        type="number"
                        placeholder="Enter otp Number"
                        onInput={handleOtp}
                        value={otp}
                        style={{
                          backgroundColor: "#A9A9A9",
                          webkitTextFillColor: "black",
                        }}
                        required
                      />
                    </div>
                  </div>
                  <div className="field">
                    <button className="ui button primary">
                      verify OTP
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OtpComponent;
