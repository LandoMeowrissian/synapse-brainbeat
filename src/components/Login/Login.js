import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h2 className="login-heading">join us</h2>
      <form className="login-form">
        <label id="username">username</label>
        <input placeholder="username"></input>
        <label id="email">email</label>
        <input placeholder="example@email.com"></input>
        <label id="pwd">password</label>
        <input placeholder="must be at least 8 characters"></input>
        <label id="confirm-pwd">confirm password</label>
        <input placeholder="confirm password"></input>
        <Link to={"/player"}>
          <button className="login-button">make noise</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;
