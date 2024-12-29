import { useEffect } from "react";
import reactLogo from "../../public/favicon.png";

import "./index.css";

const Login = () => {
  useEffect(() => {
    window.localStorage.clear();
  }, []);

  return (
    <>
      <div>
        <h1>Login App</h1>
        <a href="https://app.latinsoft.cl" target="_blank">
          <img src={reactLogo} className="logo ls" alt="LS logo" />
        </a>
      </div>
    </>
  );
};

export default Login;
