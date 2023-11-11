import React, { useState } from "react";
import Home from "./Home";
import { Link, useNavigate } from "react-router-dom";
import { loginUser } from "./Services";
import { tUserConnect } from "./interfaces";
import Loading from "./Loading";
const UserLogin = () => {
  const Navigate = useNavigate()
  const start: tUserConnect = { email: "", password: "" };
  const [values, setValues] = useState(start);
  const [loading, setLoading] = useState(false);

  const getHandler = (name: string) => {
    return (event: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [name]: event.target.value });
    };
  };
  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    const handleLogin = async () => {
          setLoading(true);
          const connectResult = await loginUser(values);
          if (connectResult === 401) {
            return null
          }
          if(connectResult === 200){
            Navigate('/trips')
        
           
          console.log(connectResult);
       
          }
    
    };
    handleLogin();
  };

  return (
    <div>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
      </nav>
      {loading ? <Loading/> :
      <div>
        <form>
          <label htmlFor="email">email</label>
          <input
            id="email"
            type="text"
            value={values.email}
            onChange={getHandler("email")}
          />
          <label htmlFor="password">password</label>
          <input
            id="password"
            type="text"
            value={values.password}
            onChange={getHandler("password")}
          />
          <button type="submit" onClick={handleSubmit}>
            log in
          </button>
        </form>
      </div>}
    </div>
  );
};
export default UserLogin;
