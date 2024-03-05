// //updating title app 

// import { useState } from 'react'

// function App() {

//   return (
//     <>
//     <Header/>
//     <h2>my name is  honey</h2>
//     </>
//   )
// }

// function Header(){
//   let [title,setTitle] = useState("prithvi")
//   function updateTitle(){
//     title=Math.random();
//     setTitle(title);
//   }
//   return (
//     <>
//     <button onClick={updateTitle}>Update the title</button>
//     <h2>my name is {title}</h2>
//     </>
//   )




// }



//using memo: memo skips the re-rendering of the component as long as the props are unchanged

//updating title app 

import { useState } from 'react'
import { memo } from 'react'

function App() {
  const [title,setTitle]=useState("Prithvi")

  function updateTitle(){
    setTitle(Math.random());
  }

  return(
    <div>
    <button onClick={updateTitle}>Update the title</button>
    <Header title={title}></Header>
    <Header title="prithvi"></Header>
    <Header title="prithvi"></Header>
    <Header title="prithvi"></Header>
    <Header title="prithvi"></Header>
    <Header title="prithvi"></Header>
    <Header title={title}></Header>
    <Header title="prithvi"></Header>
    <Header title="prithvi"></Header>
    <Header title="prithvi"></Header>
    </div>
  )
}

const Header= memo(function({title}){
  return(
    <div>this is title {title}</div>
  )
})


export default App
