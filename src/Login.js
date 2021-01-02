import React from "react";
import { Button } from "@material-ui/core";
import "./Login.css";
import { auth, provider } from "./firebase";
import { useStateValue } from "./StateProvider";
import { actionTypes } from "./reducer";

function Login() {
  const [state, dispatch] = useStateValue();

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithPopup(provider)
      .then((result) => {
        console.log(result);
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((e) => {
        alert(e.message);
      });
  };

  return (
    <div className="login">
      <div className="login_container">
        <img
          src="https://www.flaticon.com/svg/static/icons/svg/2111/2111615.svg"
          alt=""
        />
        <div className="login_header">
          <h3>Login to Slack-Clone by Neeraj</h3>
          <p>Login with Google Authentication</p>
        </div>
        <Button onClick={signin} color="green">
          Login with Google
        </Button>
      </div>
    </div>
  );
}

export default Login;
