import React from 'react'
import ProductList from '../components/products/ProductList'
import Searchbar from '../components/shared/Searchbar'

function Products() {
  return (
    <>
        <h1>Produits</h1>
        <Searchbar/>
        <ProductList/>
    </>
  )
}

export default Products