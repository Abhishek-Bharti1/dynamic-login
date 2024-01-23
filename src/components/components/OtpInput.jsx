import { useState, useRef, useEffect } from "react";

const OtpInput = ({ length, onSubmit }) => {
  const [otp, setOtp] = useState(new Array(length).fill(""));
  const ref = useRef([]);
  useEffect(() => {
    if (ref.current[0]) {
      ref.current[0].focus();
    }
  }, []);
  const handleChange = (index, e) => {
    const value = e.target.value;
    if (isNaN(value)) return;
    const newOtp = [...otp];
    newOtp[index] = value.substring(value.length - 1);
    setOtp(newOtp);
    const combineOtp = newOtp.join("");
    if (combineOtp.length === length) {
      onSubmit(combineOtp);
    }
         //Move cursor to next if current field is filled
         if (value && index < length - 1 && ref.current[index + 1]) {
            ref.current[index + 1].focus();
          }
  };
  const handleClick = (index) => {
    ref.current[index].setSelectionRange(1,1);

    //optional=======>
    if(index>0 && !otp[index-1]){
ref.current[otp.indexOf("").focus()]
    }
  };
  const handleKeyDown = (index,e) => {
if(e.key === "Backspace" && !otp[index] && index>0 && ref.current[index - 1]){
    ref.current[index - 1].focus();
}
  };
  return (
    <div>
      {otp.map((value, index) => {
        return (
          <input
            key={index}
            ref={(input) => (ref.current[index] = input)}
            type="text"
            value={value}
            onChange={(e) => handleChange(index, e)}
            onClick={() => handleClick(index)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            className="otpInputs"
          />
        );
      })}
    </div>
  );
};

export default OtpInput;
