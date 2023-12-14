import React, { useEffect, useState } from 'react'
import Product from './Product'
import { popularProducts } from '../data'
import { styled } from 'styled-components'
import axios from 'axios';

const KEY = process.env.REACT_APP_STRIPE;

const Container = styled.div`
    display:flex;
    flex-wrap:wrap;
    justify-content:space-between;
    padding:20px;
`
const Products = ({cat, filters, sort}) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(()=>{
      axios.get(cat?`http://localhost:3000/api/product/find?category=${cat}`:`http://localhost:3000/api/product/find`).then((res)=>{
        setProducts(res.data);
      }).catch((e)=>{
        console.log(e);
      })
    },[cat])
  useEffect(()=>{
    cat && setFilteredProducts(
      products.filter(item=> Object.entries(filters).every(([key, value])=>{
         return item[key].includes(value);
      }))
    )
  }, [cat, filters])
  useEffect(()=>{
    if(sort==="newest"){
      setFilteredProducts((prev)=>
          {
            return [...prev].sort((a, b)=>a.createdAt - b.createdAt);
          }
        )
    }else if(sort=="asc"){
      setFilteredProducts((prev)=>
          {
            return [...prev].sort((a, b)=>a.price - b.price);
          }
        )
    }else{
      setFilteredProducts((prev)=>
          {
            return [...prev].sort((a, b)=>b.price - a.price);
          }
        )
    }
  },[sort])
  return(
  <Container>
  {cat ?filteredProducts.map((item)=>{
    return(
        <Product item={item} key={item.id} />
    );
  }):products.slice(0, 8).map((item)=>{
    return(
        <Product item={item} key={item.id} />
    );
  })}
  </Container>);
}

export default Products
