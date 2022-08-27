import styled from "styled-components";
export const InsideCartItems = styled.p``

export const ExploresContainer = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 5rem calc((100vh - 1300px) / 2);
    background-color: var(--color-crimson);
    color: var(--color-golden);

`
export const ExploreHeading = styled.h2`
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
export const ExploreWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0 auto;
`
export const ExploreCard = styled.div`
    margin: 0 2rem;
    line-height: 2;
    width: 300px;
    border-bottom: 1px solid var(--color-golden);
    margin-top: 1rem;

`
export const ExploreImg = styled.img`
    height: 400px;
    min-width: 300px;
    max-width: 100%;
    box-shadow: 8px 8px var(--color-gold);
`
export const ExploreButton = styled.button`
    background-color: var(--color-golden);
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
        color: var(--color-golden);
        background-color: var(--color-black);
        transition: var(--transition);
    }
`
export const ExploreTitle = styled.h3`
    font-weight: 500;
    font-size: 1.5rem;
`
export const ExploreInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 2rem;
    text-align: center;

`
export const ExploreDesc = styled.p`
    margin-bottom: 1rem;
    font-weight: 500;
    font-size: 1.1rem;
    width: 100%;
    height: 100%;
    color: var(--color-black);
`

export const ExplorePrice = styled.p`
    margin-bottom: 1rem;
    font-size: 2rem;
`