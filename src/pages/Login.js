import { useRef, useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

import axios from '../api/axios';
const LOGIN_URL = '/login';

const Login = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();
  const userRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, 
        JSON.stringify({
          "email": user.toLowerCase(), 
          "password": pwd,
        }));

      setUser("");
      setPwd("");
      setSuccess(true);
      console.log(response);
      // navigate("/dashboard", { replace: true });
    } catch (err) {
      if(!err?.response){
        setErrMsg('No server response');
      } else if (err.response?.status === 404) {
        setErrMsg(err.response?.data.message || 'Something wrong happened');
      } else {
        setErrMsg('Login failed');
      }
    }


  };

  return (
    <section>
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
