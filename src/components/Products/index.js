import React from 'react'
import { 
     ProductHeading,
     ProductsContainer, 
     ProductWrapper, 
     ProductCard,
     ProductImg,
     ProductDesc,
     ProductInfo,
     ProductTitle,
     ProductPrice, 
     ProductButton, 
    } from './ProductElements'
const Products = ({ heading, data, onAdd }) => {
    const {products} = data;
  return (
    <ProductsContainer id='discover' products={products}  onAdd={onAdd}>
        <ProductHeading>{heading}</ProductHeading>
        <ProductWrapper>
            {data.map((product, index) => {
                return (
                    <ProductCard key={index}>
                        <ProductImg src={product.img} alt={product.alt}/>
                        <ProductInfo>
                            <ProductTitle>{product.title}</ProductTitle>
                            <ProductDesc>{product.desc}</ProductDesc>
                            <ProductPrice>${product.price}</ProductPrice>
                            <ProductButton onClick={() => onAdd(product)}>{product.button}</ProductButton>
                        </ProductInfo>
                    </ProductCard>
                )
            })}
        </ProductWrapper>
    </ProductsContainer>
  )
}

export default Products
