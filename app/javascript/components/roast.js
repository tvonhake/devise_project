import React from 'react'

//fill page with the single roast from specified coffeeshop: /coffeeshops/[coffeeshop_id]/roasts/[roast_id]
const Roast = (props) => {
  
  return (
    <div className='main'>
      <h1>Roast: {props.roast.id}</h1>
        <div className='nav'>
          <a href={`/coffeeshops`}>All coffeeshops</a>
          <a href={`/coffeeshops/${props.coffeeshop.id}/roasts`}>Return to roasts in {props.coffeeshop.name}</a>
        </div>
      <div className="item-container">
        <div className="item-content">
          <h1>Roast Name: {props.roast.name}</h1>
          <p>Flavor Profile: {props.roast.profile}</p>
        </div>
        
        <a href={`/coffeeshops/${props.coffeeshop.id}/roasts/${props.roast.id}/edit`}>Edit roast</a>
        <a href={`/coffeeshops/${props.coffeeshop.id}/roasts/${props.roast.id}`} data-method='delete'>Delete roast</a>
      </div>
    </div>
  )
}

export default Roast