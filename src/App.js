import React ,{useState} from 'react'
import  Dashboard  from './components/Dashboard';
import { BrowserRouter,Switch,Route } from 'react-router-dom'
import axios from "axios";
import Login from './components/Login'

const url = "https://stagingapi.icash.com.np/api/login";


function App(props) {
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
         localStorage.setItem('token',data.access_token);
         console.log(data.access_token);//gives token
          console.log(info.data.user); //gives user

          props.history.push("/dashboard");

        } catch (error) {
          //console.error(error.response.data.message);
          const errorMsg = error?.response?.data?.message;
          if (errorMsg) {
            setErrors([errorMsg]);
          } else {
            setErrors(["Something went wrong"]);
          }

        };
      }
    return (
        <div>
            <BrowserRouter>
            <Switch>
            <Route exact={true} path="/">
                <Login
                    user={user}
                    handleChange={handleChange}
                    handleShowPassword={handleShowPassword}
                    handleSubmit={handleSubmit}
                    errors={errors}
                    />

            </Route>

            <Route  path= "/dashboard" >
                <Dashboard info={info}/>
            </Route>
                    </Switch>

            </BrowserRouter>
        </div>
    )
}

export default App
