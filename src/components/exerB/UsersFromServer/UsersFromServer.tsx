import UserCard from "../UserCard/UserCard";
import { useState, useEffect } from "react";
import { tUser } from "../../interfaces";
import { fetchData } from "../Services/Services";
import "./UsersFromServer.css";

export default (): JSX.Element => {
  const [users, setUsers] = useState<tUser[]>([]);

  useEffect(() => {
    getUsers();
  }, []);

  async function getUsers() {
    const temp: void | tUser[] = await fetchData('https://jsonplaceholder.typicode.com/users');
    if (temp instanceof Array) {
      setUsers(temp);
    }
  }
  return (
    <div className="container">
      {users.map((user, index) => <UserCard userData={user} key={index}/>)}
    </div>
  )
}