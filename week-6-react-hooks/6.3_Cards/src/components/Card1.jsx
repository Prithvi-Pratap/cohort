import React from 'react'

function Card1() {
  return (
    <div>
      <CardWrapper innerComponent={<TextComponenet/>} styling={cardStyling}/>
    </div>
  )
}

function TextComponenet(){
  return(
    <div>
      hi there!
    </div>
  )
}

const cardStyling={
  border:'2px solid steelblue ',
  padding: '10px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
}

function  CardWrapper({innerComponent,styling}) {
return(
<div style={styling}>{innerComponent}</div>
)
}


export default Card1