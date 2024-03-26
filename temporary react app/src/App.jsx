// import { useEffect, useMemo, useState } from 'react'

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange1Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange2Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100
//       });
//     },5000)
//   }, [])

//   //when the exchange1 data is set this line renders then it renders again for the exchange2 data, but in ideal it need not to run for the bank data, so to avoid unnecessary renders , we use useMemo

//   const cryptoReturns = useMemo(()=>{
//     console.log('hey there');
//     return (exchange1Data.returns + exchange2Data.returns)

//   },[exchange1Data, exchange2Data])
  
//   const incomeTax = (cryptoReturns + bankData.income) * 0.3

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }

// export default App



// import { useEffect, useMemo, useState } from 'react'

// function App() {
//   const [exchange1Data, setExchange1Data] = useState({});
//   const [exchange2Data, setExchange2Data] = useState({});
//   const [bankData, setBankData] = useState({});

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange1Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setExchange2Data({
//       returns: 100
//     });
//   }, [])

//   useEffect(() => {
//     // Some operation to get the data
//     setTimeout(() => {
//       setBankData({
//         income: 100
//       });
//     },5000)
//   }, [])


//   const cryptoReturns = memo(()=>{
//     console.log('hey there'); 
//     return (exchange1Data.returns + exchange2Data.returns)

//   },[exchange1Data, exchange2Data])
  
//   const incomeTax = (cryptoReturns + bankData.income) * 0.3

//   return (
//     <div>
//         hi there, your income tax returns are {incomeTax}
//     </div>
//   )
// }

// export default App



// import React, { useState } from 'react';

// const Item = ({ id, onDelete }) => {
//   const handleClick = () => {
//     onDelete(id);
//   };

//   return (
//     <div>
//       Item {id} <button onClick={handleClick}>Delete</button>
//     </div>
//   );
// };

// const ParentComponent = () => {
//   const [items, setItems] = useState([1, 2, 3]);

//   const deleteItem = (id) => {
//     setItems(items.filter(item => item !== id));
//   };

//   return (
//     <div>
//       {items.map(item => (
//         <Item key={item} id={item} onDelete={deleteItem} />
//       ))}
//     </div>
//   );
// };

// export default ParentComponent;


  // import React, { useState } from 'react'

  // function App() {

  //   const [items, setItems]=useState([1,2,3,4]);

  //   const deleteItem = (id)=>{setItems(items.filter((item)=>item!==id))};



  //   return (
  //     <div>
  //       {items.map(item=><GenerateItem key={item} id={item} onDelete={deleteItem} />)}
  //     </div>
  //   )
  // }


  // function GenerateItem({id,onDelete}) {

  //   const handleClick=()=>{
  //     onDelete(id);
  //   }
  
  //   return (
  //     <div>
  //       Item {id} <button onClick={handleClick}>Delete</button>
  //     </div>
  //   )
  // }

  // export default App


  import React, { useState } from 'react'
import RenderCount from './component/RenderCount'
  
  function App() {
    const [count,setCount]=useState(0);

    const handleClick = ()=>{
      setCount(prev=>prev+1);
    }

    return (
      <div>
        Count:{count}
        <button onClick={handleClick}>Increment</button>
        <RenderCount />
      </div>
    )
  }
  
  export default App