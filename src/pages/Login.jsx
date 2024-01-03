import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = async (e) => {
    e.preventDefault();
    const response = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    });
    const data = await response.json();

    if (!data.token) {
      return alert("Please check credentials");
    }

    localStorage.setItem("token", JSON.stringify(data.token));
    localStorage.setItem("img", data.image);
    navigate("/home");
  };

  const userHandler = (e) => {
    setUsername(e.target.value);
  };

  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div>
      <form onSubmit={loginHandler}>
        <div className="form-controls">
          <div className="form-control">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={userHandler}
            />
          </div>
          <div className="form-control">
            <label htmlFor="username">Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={passwordHandler}
            />
          </div>
        </div>
        <button>Login</button>
      </form>
    </div>
  );
};
export default Login;
