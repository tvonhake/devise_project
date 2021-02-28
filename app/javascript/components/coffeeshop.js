import React from 'react'

const Coffeeshop = (props) =>{
  const renderRoasts = () => {
    return props.roasts.map( roast => {
      return(
        <div className="item-container">
          <div className="item-content">
            <h2>Name: {roast.name}</h2>
            <p>Id: {roast.id}</p>
            <p>Flavor Profile: {roast.profile}</p>
            <hr class="itemSeparator"></hr>
          </div>

          {/* <a href={`/coffeeshops/${props.coffeeshop.id}/roasts/${item.id}`}>Open this item</a>
          <a href={`/coffeeshops/${props.coffeeshop.id}/roasts/${item.id}/edit`}>Edit this item</a> */}
        
        
        </div>
      )

    })

  }

  return (
    <div className='main'>
      <h1>{props.coffeeshop.name}</h1>
        <div className='nav'>
          <a href='/coffeeshops'>All Coffee Shops</a>  
          <a href={`/coffeeshops/${props.coffeeshop.id}/roasts/new`}>Add a New Roast to this Coffee Shop</a>
          <a href={`/coffeeshops/${props.coffeeshop.id}/edit`}>Edit this Coffee Shop</a>  
          <a href={`/coffeeshops/${props.coffeeshop.id}/`} data-method='delete'>Delete this Coffee Shop</a>      
        </div>
        
        <p>Roasts in current Coffee Shop: </p>

        {/*run method to generate list of roasts for specific coffeeshop in page */}
        {renderRoasts()}
        
    </div>
  )
}

export default Coffeeshop