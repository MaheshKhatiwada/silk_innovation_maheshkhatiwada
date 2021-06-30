import React, { useState } from "react";
import "../css/login.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
import axios from "axios";

const url = "https://stagingapi.icash.com.np/api/login";

function Login(props) {
  const [user, setUser] = useState({
    firstInput: "",
    secondInput: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState([]);
  const [info,setInfo]=useState([]);

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleShowPassword = () => {
    setUser({ ...user, showPassword: !user.showPassword });
  };

  const handleSubmit=async(e)=> {
    e.preventDefault();
    console.log(user);
    setErrors([]);

    const payload = {};
    if (
      /^((984)|(986)|(975)|(974)|(982)|(981)|(972)|(988)|(985))\d{7}$/.test(
        user.firstInput
      )
    ) {
      payload.mobile_no = user.firstInput;
    } else if (
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        user.firstInput
      )
    ) {
      payload.email = user.firstInput;
    } else {
      setErrors(["Invalid mobile_no or email"]);
      return;
    }

    if (/^\d{4}/.test(user.secondInput)) {
      payload.pin = user.secondInput;
    } else {
      payload.password = user.secondInput;
    }

    console.log(payload);

    try {
      const { data } =  await axios.post(url, payload, {
        headers: { "App-Authorizer": "647061697361" },
      });
      setInfo({...info,data});
     // console.log(localStorage.setItem('token',data.access_token));
     console.log(data.access_token);//gives token
      // console.log(info.data.user); gives user

      //props.history.push("/dashboard");

    } catch (error) {
      //console.error(error.response.data.message);
      const errorMsg = error.response.data.message;
      if (errorMsg) {
        setErrors([errorMsg]);
      } else {
        setErrors(["Something went wrong"]);
      }
      // }
      console.error(error);
    };
  }
    //console.log(errors);
    return (
      <div className="login">
        <h3>Login Form</h3>

        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="formInput">
              <input
                type="text"
                name="firstInput"
                placeholder="Email/Phone Number"
                onChange={handleChange}
              />
            </div>
            <div className="formInput">
              <input
                type={user.showPassword ? "text" : "password"}
                name="secondInput"
                placeholder="Password/Pin"
                onChange={handleChange}
              />
              {user.showPassword ? (
                <VisibilityOffIcon
                  className="icon"
                  onClick={handleShowPassword}
                />
              ) : (
                <VisibilityIcon className="icon" onClick={handleShowPassword} />
              )}
            </div>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div>
          {errors.map((err, idx) => {
            return (
              <div key={idx} className="error">
                {err}
              </div>
            );
          })}
        </div>
      </div>
    );
  };

export default Login;
