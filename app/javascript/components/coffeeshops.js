import React from 'react'

const CoffeeShops = (props) =>{

  const renderCoffeeShops = () =>{
    return props.coffeeshops.map (coffeeshop => {
      return(
        <div className="item-container">
          <div className="item-content">
            <h2>{coffeeshop.name}</h2>
            <p>Location: {coffeeshop.location}</p>
            <p>Database ID: {coffeeshop.id}</p>
            <hr className="itemSeparator"></hr>
          </div>

          <a href={`/coffeeshops/${coffeeshop.id}/roasts`}>Open this Coffee Shop</a>
          <a href={`/coffeeshops/${coffeeshop.id}/edit`}>Edit Coffee Shop Details</a>
          <a href={`/coffeeshops/${coffeeshop.id}/`} data-method='delete'>Delete Coffee Shop</a>
          
        </div>
      )
    })

  }

  return(
    <div className='main'>
      <h1>All Coffee Shops </h1>
      <div className='nav'>
        <a href='/'>Home</a>
        <a href='/coffeeshops/new'>Add New Coffee Shop</a>
      </div>

      {renderCoffeeShops()}
    </div>
  )
}

export default CoffeeShops