import React from 'react'
import styled from 'styled-components'
const ModalDiv = styled.div`
    display: flex;
    font-family: var(-font-base);
    justify-content: center;
    align-items: center;
    text-align: center;
`

const OpenModalButton = styled.button`
    width: 100%;
    height: 100px;
    border: 3px solid var(--color-golden);
    background-color: var(--color-black);
    color: var(--color-crimson);
    cursor: pointer;

    &:hover{
      background-color: var(--color-golden);
      color: var(--color-crimson);
      border: 3px solid var(--color-black);
      transition: var(--transition);
    }
`
const OpenModalHeadline = styled.h1`
`
const UseModal = ({setIsOpen}) => {
  return (
     <ModalDiv id='cart'>
          <OpenModalButton onClick={() => setIsOpen(true)}>
            <OpenModalHeadline>VIEW SHOPPING CART</OpenModalHeadline>
          </OpenModalButton>
        </ModalDiv>
  )
}

export default UseModal
