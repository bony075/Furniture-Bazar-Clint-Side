import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const [loginError, setLoginError] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || '/';


  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleLogin = (data) => {
    console.log(data);
    setLoginError('');
    signIn(data.email, data.password)
      .then(result => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
       
      })
      .catch(error => {
        console.log(error.message)
        setLoginError(error.message);
      });

  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="flex justify-center items-center">
              <div className="w-96 p-7">
                {/* <h2 className="text-xl text-center">Login</h2> */}
                <form onSubmit={handleSubmit(handleLogin)}>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      className="input input-bordered w-full max-w-xs"
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email?.message}</p>
                    )}
                  </div>
                  <div className="form-control w-full max-w-xs">
                    <label className="label">
                      {" "}
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 6,
                          message: "Password more then 6 characters",
                        },
                      })}
                      className="input input-bordered w-full max-w-xs"
                    />

                    {errors.password && (
                      <p className="text-red-600">{errors.password?.message}</p>
                    )}
                  </div>
                  <input
                    className="btn btn-primary text-white w-full mt-2"
                    value="Login"
                    type="submit"
                  />
                  <div>
                    {loginError && <p className="text-red-600">{loginError}</p>}
                  </div>
                </form>
                <p>
                  You have no account?
                  <Link className="text-secondary" to="/signup">
                    Sign Up here
                  </Link>
                </p>
               
                <button className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white w-full mt-3">
                  GOOGLE SIGN UP
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
