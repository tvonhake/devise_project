import React from 'react'

const RoastEdit = (props) =>{
  return(
    <div className="main">
      <h1>Edit This Roast</h1>
      <p>Roast id: {props.roast.id}, from Coffee Shop {props.coffeeshop.name}</p>
      <div className="nav">
        <a href={`/coffeeshops/${props.coffeeshop.id}/roasts/${props.roast.id}`}>View this Roast</a>
        <a href={`/coffeeshops/${props.coffeeshop.id}`}>Return to {props.coffeeshop.name}</a>
      </div>
      <div className="inputForm">
        {/*Form for user to edit current roast in current coffeeshop, fills in fields with current information */}
        <form action={`/coffeeshops/${props.coffeeshop.id}/roasts/${props.roast.id}`} method='post'>
          <h2>Roast Name</h2>
          <input type="hidden" name="_method" value="put"/>
          <input type="text" defaultValue={props.roast.name} name='roast[name]'/>
  
          <h2>Flavor Profile</h2>
          <input type="text" defaultValue={props.roast.profile} name='roast[profile]'/>
  
          <button type='submit'>Update Roast</button>
          <button type='reset'>Reset</button>
  
        </form>
      </div>
    </div>
  )
}

export default RoastEdit 