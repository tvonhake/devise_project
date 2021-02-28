import React from 'react'

const CoffeeshopEdit = (props) =>{
  return(
    <div className="main">
      <h1>Edit This Coffee Shop</h1>
      <p>Coffee Shop id: {props.coffeeshop.id}</p>
      <div className="nav">
        <a href={`/coffeeshops/${props.coffeeshop.id}`}>Return to Coffee Shop</a>
      </div>
      {/*Form for user to edit current coffeeshop, fills in fields with current information */}
      <div className="inputForm">
        <form action={`/coffeeshops/${props.coffeeshop.id}`} method='post'>
          <input type="hidden" name="_method" value="put"/>
          <h2>Coffee Shop Name</h2>
          <input type="text" defaultValue={props.coffeeshop.name} name='coffeeshop[name]'/>
  
          <h2>Coffee Shop Location</h2>
          <input type="text" defaultValue={props.coffeeshop.location} name='coffeeshop[location]'/>
  
          <button type='submit'>Update Coffee Shop</button>
          <button type='reset'>Reset</button>
  
        </form>
      </div>
    </div>
  )
}

export default CoffeeshopEdit 