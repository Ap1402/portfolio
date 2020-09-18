import React from 'react'
import styled from 'styled-components';

const StyledButton = styled.button`
background-color: ${props=>props.isActive?'black':'purple'}

`
const CategoryButton = ({categoryName, slug, onClickCategoryHandler, isActive}) => {
    return (
        <StyledButton className="btn btn-primary" isActive={isActive} onClick={(e)=>onClickCategoryHandler(e, slug)}>
            {categoryName}
        </StyledButton>
    )
}

export default CategoryButton
