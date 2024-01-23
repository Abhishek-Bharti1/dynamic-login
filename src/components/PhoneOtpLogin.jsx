import { useState } from "react";
import OtpInput from "./components/OtpInput.jsx";
const PhoneOtpLogin = () => {
  const [phone, setPhone] = useState("");
  const [showOtp, setShowOtp] = useState(false);

  const handlePhoneNumber = (e) => {
    setPhone(e.target.value);
  };

  const handlePhoneSubmit = (e) => {
    e.preventDefault();

    //phone validations======>
    const regex = /[^0-9]/g;
    if (phone.length < 10 || regex.test(phone)) {
      alert("Invalid Phone Number");
      return;
    }
    //Call API=====>
    //Show OTP Field
    setShowOtp(true);
  };
  const onOtpSubmit = () => {
    alert("Login Successfull");
  };
  return (
    <div>
      {!showOtp ? (
        <form onSubmit={handlePhoneSubmit}>
          <input
            type="text"
            value={phone}
            onChange={handlePhoneNumber}
            placeholder="Enter Phone Number"
          />
          <button type="submit">Submit</button>
        </form>
      ) : (
        <div>
          <p>Enter OTP sent to {phone}</p>
          <OtpInput length={4} onSubmit={onOtpSubmit} />
        </div>
      )}
    </div>
  );
};

export default PhoneOtpLogin;
