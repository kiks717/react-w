import styled from "styled-components";
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'

export const BasketAsideCont = styled.aside`

`
export const BasketHeadline = styled.h2`

`
export const IfCartDiv = styled.div`

`
export const CartItems = styled.div`

`

export const ItemTitle = styled.div`

`
export const Buttons = styled.div`

`
export const ButtonContainer = styled.div`
    display: flex;
    flex-direction: column;
`
export const CustomButton = styled.button`
    background-color: var(--color-crimson);
    color: var(--color-black);
    font-weight: 700;
    padding: 0.5rem 1rem;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid var(--color-golden);
    outline: none;
    cursor: pointer;
    font-size:1.2rem;

`
export const Plus = styled(AiOutlinePlusCircle)`
    color:var(--color-golden);
    align-items:center;
    justify-content:center;
    cursor:pointer;
    transition:var(--transition);
    opacity:1;
`
export const Minus = styled(AiOutlineMinusCircle)`

    color:var(--color-golden);
    align-items:center;
    justify-content:center;
    cursor:pointer;
    transition:var(--transition);
    opacity:1;
`
export const InsideCartItems = styled.div`
    font-size: 1.5rem;
`

// if rendering


