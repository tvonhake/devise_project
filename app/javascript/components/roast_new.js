import React from 'react'

const RoastNew = (props) =>{
  return(
    <div className="main">
      <h1>Create new Roast</h1>
      <p>in Coffee Shop {props.coffeeshop.name}</p>
      <div className="nav">
        <a href={`/coffeeshops/${props.coffeeshop.id}`}>Return to {props.coffeeshop.name}</a>
      </div>
      <div className="inputForm">
        {/*Form for user to edit current roast in current coffeeshop, fills in fields with current information */}
        <form action={`/coffeeshops/${props.coffeeshop.id}/roasts`} method='post'>
          <h2>Roast Name</h2>
          <input type="hidden" name="_method" value="post"/>
          <input type="text" placeholder="Enter Name Here" name='roast[name]'/>
  
          <h2>Flavor Profile</h2>
          <input type="text" placeholder="Enter Flavor Profile Here" name='roast[profile]'/>
  
          <button type='submit'>Create Roast</button>
          <button type='reset'>Reset</button>
  
        </form>
      </div>
    </div>
  )
}

export default RoastNew 