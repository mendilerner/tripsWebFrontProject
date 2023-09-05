import { useEffect, useState } from "react";
import { fetchData } from "../Services/Services";
type Todo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };
export default ({id}: {id: number}):JSX.Element => {
  const [toDoos, setToDoos] = useState<Todo[]>([]);
  async function getToDoos() {
      const temp: void | Todo[] = await fetchData(`https://jsonplaceholder.typicode.com/users/${id}/todos`);
      if (temp instanceof Array) {
        setToDoos(temp);
      }
    }
  useEffect(() => {
    getToDoos()
  }, [])
    return(<div>
        <ol>
        {toDoos.slice(0, 5).map((toDo, index) => <li key={index}>{toDo.title}</li>)}
        </ol>
        </div>)
}