import React from "react";
import "../css/login.css";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOffIcon from "@material-ui/icons/VisibilityOff";
;

function Login({handleSubmit,handleChange,handleShowPassword,user,errors}) {

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
