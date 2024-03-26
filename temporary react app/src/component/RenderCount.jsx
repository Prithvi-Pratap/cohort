// import React from 'react'

// function RenderCount() {

//     const [render,setRender] =useState(0);

//     useEffect(()=>{
//         setRender(prev=>prev+1)
// })

//   return (
//     <div>
//         <p>This component is rendered:{render} times</p>
//     </div>
//   )
// }

// export default RenderCount
import React, { useState, useEffect } from 'react';

const RenderCounter = () => {
  const [renderCount, setRenderCount] = useState(0);

  useEffect(() => {
    // Increment render count whenever the component re-renders
    setRenderCount(prevCount => prevCount + 1);
  },[]);

  return (
    <div>
      <p>This component has been rendered {renderCount} times.</p>
    </div>
  );
};

export default RenderCounter;
