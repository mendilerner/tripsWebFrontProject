import {useState} from 'react'
import { tUser, Todo } from "../../interfaces"
import { fetchData } from "../Services/Services"
import ToDoList from '../ToDoList/ToDoList'
import './UserCard.css'
export default ({userData}: {userData: tUser}): JSX.Element => {
    const [isShown, setIsShown] = useState(false)
    // const [ToDoos, setToDoos] = useState<Todo[]>([]);
    // async function getToDoos() {
    //     const temp: void | Todo[] = await fetchData('https://jsonplaceholder.typicode.com/todos');
    //     if (temp instanceof Array) {
    //       setToDoos(temp);
    //     }
    //   }
    
    const handelShowToDoos = () => {
        setIsShown(!isShown)
    }
    return(<div className="card" onClick={handelShowToDoos}>
        <h3>user csrd</h3>
        <p>name: {userData.name}</p>
        <p>email: {userData.email}</p>
        <div>{isShown && <ToDoList id={userData.id} />}</div>
    </div>)
}