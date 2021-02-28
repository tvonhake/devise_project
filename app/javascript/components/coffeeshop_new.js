import React from 'react'

//Generate form for user to create new coffeeshop
const CoffeeshopNew = () =>{
  return(
    <div className="main">
      {/* <p>Coffee Shop id: {props.coffeeshop.id}</p> */}
      <div className="nav">
        <a href={`/coffeeshops/`}>Return to Coffee Shops</a>
      </div>
      <div className="inputForm">
        <h1>Create A New Coffee Shop Below</h1>
            <form action='/coffeeshops' method='post'>
              <p>Name of Coffee Shop</p>
              <input type='text' name='coffeeshop[name]'/>
              <p>Coffee Shop Location</p>
              <input type='text' name='coffeeshop[location]'/>
              <button type='submit'>Submit</button>
              <button type='reset'>Reset</button>
            </form>
      </div>
    </div>
  )
}


export default CoffeeshopNew