import React from 'react'
import styled from 'styled-components'
const HeaderBasket = styled.div`
     font-family: var(--font-alt);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    @media screen and (max-width:820px) {
      float: left;
    }

`
const HeaderDiv = styled.div`
    align-items: center;
    text-align: center;
`
const HeaderLink = styled.a`
  font-size: 1.5rem;
  font-weight: 600;

`
const CustomButton = styled.button`
    color: var(--color-black);
    background-color: var(--color-crimson);
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 28px;
    font-size: 20px;
    border:none;
    padding:10px 10px ;
    outline: none;
    cursor: pointer;
    &:hover{
        color: var(--color-golden);
        transition: var(--transition);

    }
`
const IfDiv = styled.div`
  align-items: center;
  text-align: center;
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
            <CustomButton> ( {props.countCartItems} )</CustomButton>
          ) : (
            ''
          )}
        </HeaderLink>{' '}
      </IfDiv>
    </HeaderBasket>
  )
}

export default Header
