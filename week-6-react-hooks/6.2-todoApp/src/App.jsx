// import { useState ,useEffect} from 'react'
// import axios from 'axios';

// function App() {
//   const [todos, setTodos] = useState([]);

//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then((res) => setTodos(res.data.todos));
//   }, []);

//   return (
//     <>
//     {todos.map(todo=> <Todo title={todo.title} description={todo.description} />)}
//     </>
//   )
// }

// function Todo({title,description}){
//   return <div>
//     <h1>
//       {title}
//     </h1>
//     <h4>
//       {description}
//     </h4>
//   </div>
// }

// export default App

//===================================================================


import { useState, useEffect } from 'react'

let  counter=4;

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      title: 'Todo #1',
      description: 'this is the first todo',
    },
    {
      id: 2,
      title: 'Todo #2',
      description: 'this is the second todo',
    },
    {
      id: 3,
      title: 'Todo #3',
      description: 'this is the third todo',
    }
  ]);

  function addTodo() {
    setTodos([...todos, { id:counter++, title: "Todo #" + Math.random(), description: "this is the " + Math.random()+" todo"}])
  }


  return (
    <div>
      {/* iterating over the state array */}
      <button onClick={addTodo}>Add todo</button>
      {todos.map(todo => <Todos key={todo.id} title={todo.title} description={todo.description
      } ></Todos>)}
    </div>
  )

}

const Todos = function ({ title, description }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )

}


export default App
