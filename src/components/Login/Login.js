import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h2 className="login-heading">sign up / login</h2>
      <form className="login-form">
        <label id="username">enter / username</label>
        <input name="login" placeholder="username"></input>
        <label id="email">enter / email</label>
        <input name="login" placeholder="example@email.com"></input>
        <label id="pwd">enter / password</label>
        <input name="login" placeholder="must be at least 8 characters"></input>
        <label id="confirm-pwd">enter / confirm password</label>
        <input name="login" placeholder="confirm password"></input>
        <Link to={"/player"}>
          <button className="login-button">make / noise</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
