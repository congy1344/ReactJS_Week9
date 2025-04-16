import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice";

function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username && password) {
      dispatch(login({ username }));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  if (isLoggedIn) {
    return (
      <div className="auth">
        <h2>Welcome, {user.username}!</h2>
        <button onClick={handleLogout}>Logout</button>
      </div>
    );
  }

  return (
    <div className="auth">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Auth;
