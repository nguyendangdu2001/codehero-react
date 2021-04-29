import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import useLogin from "../../common/hooks/useLogin";
import { loginAction } from "../../redux/action/userAction";
import "./login.css";

function Login() {
  const { register, handleSubmit } = useForm();
  const history = useHistory();
  const dispatch = useDispatch();
  const submit = (data) => {
    console.log(data);
    dispatch(
      loginAction(data, () => {
        history.push("/");
      })
    );
  };
  return (
    <div>
      <div className=" row">
        <div className="col-4 col"></div>
        <div className="col-4 col">
          <div className="outer">
            <div className="inner-login">
              <form onSubmit={handleSubmit(submit)}>
                <h3>Log in</h3>

                <div className="form-group">
                  <label>Email</label>
                  <input
                    {...register("username")}
                    type="text"
                    className="form-control"
                    placeholder="Enter email"
                  />
                </div>

                <div className="form-group">
                  <label>Password</label>
                  <input
                    {...register("password")}
                    type="password"
                    className="form-control"
                    placeholder="Enter password"
                  />
                </div>

                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customCheck1"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="customCheck1"
                    >
                      Remember me
                    </label>
                  </div>
                </div>

                <button type="submit" className="btn btn-dark btn-lg btn-block">
                  Sign in
                </button>
                <p className="forgot-password text-right">
                  Forgot <a href="#">password?</a>
                </p>
              </form>
            </div>
          </div>
        </div>
        <div className="col-4"></div>
      </div>
    </div>
  );
}

export default Login;
