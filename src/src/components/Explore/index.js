import React from 'react'
import { 
     ExploreHeading,
     ExploresContainer, 
     ExploreWrapper, 
     ExploreCard,
     ExploreImg,
     ExploreDesc,
     ExploreInfo,
     ExploreTitle,
     ExplorePrice, 
     ExploreButton, 
    } from './ExploreElements'

const Explore = ({ heading, data, onAdd}) => {
    const {products} = data;

  return (
    <ExploresContainer id='explore' products={products}  onAdd={onAdd}>
        <ExploreHeading>{heading}</ExploreHeading>
        <ExploreWrapper>
            {data.map((product, index) => {
                return (
                    <ExploreCard key={index}>
                        <ExploreImg src={product.img} alt={product.alt}/>
                        <ExploreInfo>
                            <ExploreTitle>{product.title}</ExploreTitle>
                            <ExploreDesc>{product.desc}</ExploreDesc>
                            <ExplorePrice>${product.price}</ExplorePrice>
                            <ExploreButton onClick={() => onAdd(product)}>{product.button}</ExploreButton>
                        </ExploreInfo>
                    </ExploreCard>

                )
            })}
            
        </ExploreWrapper>
    </ExploresContainer>
  )
}

export default Explore
