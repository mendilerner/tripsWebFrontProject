import React, {useState} from 'react'
import Home from './Home'
import { Link } from 'react-router-dom'
import { registerUser} from "./Services";
import { tUserConnect } from "./interfaces";

const UserRegistration = () => {
    const start: tUserConnect = { email: "", password: "" , role: 'admin'};
    const [values, setValues] = useState(start);
  
    const getHandler = (name: string) => {
      return (event: React.ChangeEvent<HTMLInputElement>) => {
        setValues({ ...values, [name]: event.target.value });
      };
    };
    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      const handleRegister = async () => {
        const connectMessage = await registerUser(values);
        if (!connectMessage) return null;
        console.log('succes');
        console.log(connectMessage);
      };
      handleRegister();
    };
  
    
  return (
    <div>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
      </nav>
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
            sigh up
          </button>
        </form>
      </div>
    </div>
  );
};

export default UserRegistration
