import React from 'react'
import { categories } from '../data'
import CategoryItem from './CategoryItem'
import { styled } from 'styled-components'
import {mobile} from '../responsive';

const Container = styled.div`
    display:flex;
    padding:20px;
    justify-content:space-between;
    ${mobile({padding:'0px', flexDirection:'column'})};
`
const Categories = () => {
    return(<>
        <Container>
            {categories.map((item)=>{
                return(<>
                    <CategoryItem item={item} key={item.id} />
                </>)
            })}
        </Container>
    </>)
}

export default Categories