import styled from "styled-components";
import {AiOutlinePlusCircle,AiOutlineMinusCircle} from 'react-icons/ai'
export const BasketAsideCont = styled.aside`
     border: 1px solid var(--color-golden);
     font-family: var(--font-alt);
     border-radius: 8px;
     background-color: var(--color-crimson);
     padding: 1rem;
     display: flex;
     flex-direction: column;
     @media screen and (max-width:820px) {
        display: grid;
        width: auto;
        margin: -1rem;
    }
    @media screen  and (max-width:756px){
        width: max-content;
    }
    @media screen and (max-width:668px) {
        padding: 10px;
        width: max-content;
        margin: -0.9rem;

    }
    @media screen and (max-width:400px) {
        width: max-content;
        margin: -0.8rem;

    }

`
export const IfCartDiv = styled.div`
`
export const CartItems = styled.div`
        border: 1px solid var(--color-gray);
        padding: 5px;
    @media screen and (max-width:820px) {
        border-radius: 8px;
        padding: 5px;
        margin-bottom: 1rem;
    }
`
export const ItemTitle = styled.div`
    font-weight: 500;
    text-transform: capitalize;
    color: var(--color-black);
    font-size: 1rem;
    @media screen and (max-width:820px) {
        font-size: 1rem;
    }
`
export const Buttons = styled.div`

    @media screen and (max-width:820px) {
        font-size: 1rem;
        justify-content: space-between;
        align-items: center;
        font-weight: 300;

    }
`
export const CustomButton = styled.button`
    background-color: var(--color-crimson);
    color: var(--color-black);
    font-weight: 500;
    font-family: var(--font-base);
    border: none;
    outline: none;
    cursor: pointer;
    font-size:1rem;
    width: 70px;
    height: 30px;
    text-align: center;
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
    font-size: 1.4rem;
    display: grid;
    /* justify-content: space-between; */
    border: 1px solid var(--color-golden);
    justify-content: center;
    column-gap: 1rem;
    align-items: center;
    text-align: center;
    @media screen and (max-width:820px) {
        display: flex;
        flex-direction: column;
    }
`
export const Span = styled.span`

`
// if rendering

export const FullCartDiv = styled.div`
     font-family: 'Open Sans', sans-serif;
     border-bottom: dashed 1px var(--color-golden);
    @media screen and (max-width:820px) {
        font-size: 1rem;
        font-weight: lighter;
        width: 100%;
        height: 100%;
        align-items: center;
        text-align: center;
        :nth-child(5){
            margin-bottom: 1rem;
        }
        :first-child{
            margin-top: 1rem;
        }
    }
`
export const FullCartPriceTitle = styled.p`
        font-size: 1.2rem;
        font-weight:600;

    `
export const FullCartPrice = styled.p`
    font-weight: 300;
    font-size: 1rem;
    font-family: 'Open Sans', sans-serif;
`
export const Bold = styled.span`
    font-weight:500;

`
export const FinishedShopping = styled.div`

    @media screen and (max-width:820px) {
    display: flex;
    align-items: flex-end;
    justify-content: flex-end;
    }
`
export const FinishedShoppingBtn = styled.button`
    background-color: var(--color-black);
    color: var(--color-crimson);
    font-weight: 500;
    font-family: var(--font-base);
    border-radius: 8px;
    border: 1px solid var(--color-golden);
    outline: none;
    cursor: pointer;
    font-size:1rem;
    width: 100%;
    height: 50px;
    text-align: center;
    margin-bottom: 0.7rem;
    &:hover{
        color: var(--color-crimson);
        background-color: var(--color-golden);
        transition: var(--transition);
    }
    @media screen and (max-width:820px) {
        width: 150px;
        padding: 0;
    }

`