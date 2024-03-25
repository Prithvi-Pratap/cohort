import React, { useEffect, useState } from "react";

function App() {
  const [todos, setTodo] = useState([]);
  let intervalId = null;

  useEffect(() => {

    const fetchData=()=>{
      fetch("https://sum-server.100xdevs.com/todos")
      .then((res)=>res.json())
      .then((json)=>setTodo(json.todos))
      .catch((err)=>console.error("Error fetching Todo: ", err))
    }

    intervalId = setInterval(fetchData, 3000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      {todos.map((todo) => (
        <Todo key={todo.id} title={todo.title} description={todo.description} />
      ))}
    </div>
  );
}

function Todo({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <h4>{description}</h4>
    </div>
  );
}

export default App;
