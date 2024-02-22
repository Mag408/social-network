import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props: any) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <div className="">
          <Field component={"input"} name={"login"} placeholder={"Login"} />
        </div>
        <div className="">
          <Field
            component={"input"}
            name={"password"}
            placeholder={"Password"}
          />
        </div>
        <div className="">
          <Field component={"input"} name={"rememberMe"} type={"checkbox"} />{" "}
          remember me
        </div>
        <div className="">
          <button>Login</button>
        </div>
      </form>
    </div>
  );
};

const LoginReduxForm = reduxForm({
  form: "login",
})(LoginForm);

const Login = () => {
  const onSubmit = (formData: any) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
