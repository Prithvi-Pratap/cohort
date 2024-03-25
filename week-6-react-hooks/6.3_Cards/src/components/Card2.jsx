import React from 'react'

function Card2() {
  return (
    <CardWrapper cardStyling={cardStyling}>
          hi there! 
    </CardWrapper>
  )
}

const cardStyling={
    border:'2px dashed red',
    margin: '15px 0 15px 0',
    padding: '10px',
}

//in the children prop , it  will catch whatever children are present in the CardWrapper component

function CardWrapper({cardStyling,children}) {
    return(
        <div style={cardStyling}>{children}</div>
    )
}

export default Card2