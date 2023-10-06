import React from 'react'

const Products = ({result}) => {
  console.log(result)
  return (
    <div className='container'>
    <h1>Products</h1>
  <div className='d-flex flex-wrap justify-content-around'> {result}</div>
    </div>
  )
}

export default Products