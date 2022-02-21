import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { toast } from "react-toastify";

import axios from "../api/axios";
const LOGIN_URL = "/login";

const Login = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, {
        email: user.toLowerCase(),
        password: pwd,
      });

      const name = response?.data.data.username;
      const role = response?.data.data.role;
      const token = response?.data.token;

      ctx.setAuth({name, role, token});
      toast.success("Logged in successfully", {
        position: "top-right",
        autoClose: 2000,
      });

      navigate("/dashboard/user", { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No server response");
      } else if (err.response?.status === 404) {
        setErrMsg(err.response?.data.message || "Something wrong happened");
      } else {
        setErrMsg("Login failed");
      }
    }
  };

  return (
    <section className="form-box">
      <p className={errMsg ? "errmsg" : "offscreen"}>{errMsg}</p>
      <h1>Sign in</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          ref={userRef}
          autoComplete="off"
          onChange={(e) => setUser(e.target.value)}
          value={user}
          required
        />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          onChange={(e) => setPwd(e.target.value)}
          value={pwd}
          required
        />
        <button>Sign in</button>
      </form>
      <p>
        <span className="line">
          <a href="#">Register a new account</a>
        </span>
      </p>
    </section>
  );
};

export default Login;
