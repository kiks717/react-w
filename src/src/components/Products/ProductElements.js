import styled from "styled-components";

export const InsideCartItems = styled.p`

`
export const ProductsContainer = styled.div`
    font-family: var(--font-base);
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vh - 1300px) / 2);
    background-color: var(--color-crimson);
    color: var(--color-golden);
`
export const ProductHeading = styled.h2`
    color: var(--color-golden);
    font-size: 64px;
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    text-align: center;
    margin-bottom: 5rem;
    font-weight: 500;
    border-bottom: 1px solid var(--color-golden);
    border-width: 80%;

`
export const ProductWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`
export const ProductCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
    border-bottom: 1px solid var(--color-golden);
    margin-top: 1rem;

`
export const ProductImg = styled.img`
    height: 400px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px var(--color-gold);
`
export const ProductButton = styled.button`
    background-color: var(--color-crimson);
    color: var(--color-black);
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 1rem 1rem;
    font-size: 16px;
    border-radius: 10px;
    border: none;
    outline: none;
    cursor: pointer;
    border: 1px solid var(--color-golden);
    &:hover{
        color: var(--color-crimson);
        background-color: var(--color-golden);
        transition: var(--transition);
    }
`
export const ProductTitle = styled.h3`
    font-weight: 500;
    font-size: 1.5rem;
`
export const ProductInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;

`
export const ProductDesc = styled.p`
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.1rem;
    width: 100%;
    height: 100%;
    color: var(--color-black);
`

export const ProductPrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`