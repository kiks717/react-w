import React from 'react'
import styled from 'styled-components'

const ProductContainer = styled.div`
    display: flex;
    flex-direction: row;
    font-family: var(--font-alt);

`
const ProductSide = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
`
const ProductImage = styled.img`
    height: 500px;
    width: 300px;
`
const ProductTitle = styled.h3`
    font-size: 1.5rem;
    color: var(--color-golden);
`
const ProductPrice = styled.div`
    font-size: 1rem;
    font-weight: 500;

`
const ProductBtnCont = styled.div`
    margin-top: 1rem;
    justify-content: center;
`
const CustomButton = styled.button`
     background-color: var(--color-crimson);
    color: var(--color-black);
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 28px;
    font-size: 16px;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    border: 1px solid var(--color-golden);
    outline: none;
    cursor: pointer;
    &:hover{
        color: var(--color-crimson);
         background-color: var(--color-golden);
        transition: var(--transition);
          border: 1px solid var(--color-black);

    }
`
const Product = (props) => {
    const {product, onAdd} = props;
  return (
    <ProductContainer>
      <ProductImage src={product.image} alt="products"/>
      <ProductSide>
      <ProductTitle>{product.name}</ProductTitle>
      <ProductPrice>${product.price}</ProductPrice>
      <ProductBtnCont>
        <CustomButton onClick={onAdd(product)}>Add to CART</CustomButton>

      </ProductBtnCont>
      </ProductSide>


    </ProductContainer>
  )
}

export default Product
