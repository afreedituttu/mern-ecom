import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Announcment from '../components/Announcment'
import { styled } from 'styled-components'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'
import { useLocation } from 'react-router-dom'

const Container = styled.div``
const Title = styled.h1`
    margin:20px;
`
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`
const Filter = styled.div`
    margin:20px;
`
const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`
const Select = styled.select`
    padding:10px;
    margin-right:20px;
`
const Option = styled.option``

const ProductList = () => {
    const location = useLocation();
    const cat = location.pathname.split("/")[2];
    const [filters, setFilters] = useState();
    const [sort, setSort] = useState("newest item");
    const handleFilters = (e)=> {
        const value = e.target.value;
        setFilters((prevValue)=>{
            return{
                ...prevValue,
                [e.target.name]:value
            }
        });
    }
  return (
    <Container>
        <Announcment />
        <Navbar />
        <Title>{cat}</Title>
        <FilterContainer>
            <Filter>
            <FilterText>Filter Products : </FilterText>
                <Select name='color' onChange={handleFilters}>
                    <Option disabled>Color</Option>
                    <Option>white</Option>
                    <Option>black</Option>
                    <Option>red</Option>
                    <Option>blue</Option>
                    <Option>yellow</Option>
                    <Option>green</Option>
                </Select>
                <Select name='size' onChange={handleFilters}>
                    <Option disabled>Size</Option>
                    <Option>XS</Option>
                    <Option>S</Option>
                    <Option>L</Option>
                    <Option>M</Option>
                </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Products</FilterText>
                <Select onChange={e=>{setSort(e.target.value)}}>
                    <Option disabled selected>Newest</Option>
                    <Option value="asc">Price (asc)</Option>
                    <Option value="desc" >Price (desc)</Option>
                </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort} />
        <Newsletter />
        <Footer />
    </Container>
  )
}

export default ProductList
