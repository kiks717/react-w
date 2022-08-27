import React from 'react'
import styled from 'styled-components'
const HeaderBasket = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 1rem 1rem ;
    border: 1px solid var(--color-golden);
    padding: 1rem 0.5rem;
`
const HeaderDiv = styled.div`
  
`
const HeaderLink = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
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
const IfDiv = styled.div`

`
function Header(props) {
  return (
    <HeaderBasket >
      <HeaderDiv>
        <HeaderLink href="#cart">YOUR SHOPPING CART</HeaderLink>
      </HeaderDiv>
      <IfDiv>
        <HeaderLink href="#cart">
          Cart{' '}
          {props.countCartItems ? (
            //it counts items not qty 
            <CustomButton>{props.countCartItems}</CustomButton>
          ) : (
            ''
          )}
        </HeaderLink>{' '}
        <HeaderLink href="#signin"> Sign In</HeaderLink>
      </IfDiv>
    </HeaderBasket>
  )
}

export default Header
