import styled from "styled-components";
import imgBgs from '../../images/img1.webp'
import irina from './img/irina3.jpg'
// import irina2 from './img/irina.jpg'
export const HeroContainer = styled.div`
    font-family: var(--font-base);
    background: linear-gradient(to right, rgba(0,0,0,0.7),
    rgba(0,0,0,0.1)), url(${imgBgs});
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    background-position: center;
    background-size: cover;
    @media screen and  (max-width : 947px){
            background-size: cover;
            height: 100vh;
             width: 100vw;
              max-width: max-content;
    }
    @media screen and (max-width:820px) {
        background-image: url(${irina});
        background-size: cover;
        height: 100vh;
        width: 100vw;
        max-width: 100vw;
    }
    @media screen and (max-width:650px) {
        background-size: cover;
        height: 100vh;
        width: 100%;
        max-width: 100vw;
    }
    @media screen and (max-width:400px) {
        background-size: cover;
        height: 100vh;
        width: 100%;
    }
        
`
export const HeroContent = styled.div`
    height: calc(100vh - 80px);
    /* beacuse of navbar */
    max-height: 100%;
    width: 100vw;
    padding:0rem calc((100vw - 2300px) / 2) ;

`
export const HeroElements = styled.div`

`
export const HeroItems = styled.div`
    display: flex;
    flex-direction: column;
    
    justify-content: center;
    align-items: flex-start;
    height: 100vh;
    max-height: 100%;
    padding: 0 2rem;
    width: 650px;
    line-height: 1;
    text-transform: uppercase;

    @media screen and (max-width:650px) {
        width: 100%;

    }

`
export const HeroH1 = styled.h1`
    color: var(--color-golden);
    font-size: clamp(3rem, 10vw, 5rem);
    /* clamp will make mobile responsive fonts */
    line-height: 83.2px;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    font-weight: 500;
    box-shadow: 3px 5px var(--color-golden);
    margin-bottom: 1rem;
    @media screen and (max-width:820px) {
     color:var(--color-black);   
    }
    
`
export const HeroP = styled.p`
    color: var(--color-white);
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: capitalize;
    line-height: 28px;
    font-size: clamp(2rem, 2.5vw, 3rem);
    @media screen and (max-width:820px) {
        color:var(--color-black);
    }
`
export const Hspan = styled.span`
    /* font-family: var(--font-alt); */
    color: var(--color-golden);
    font-weight: 600;
    letter-spacing: 0.04em;
    text-decoration: underline;
    text-decoration-color: var(--color-golden);
    line-height: 28px;
    font-size: clamp(1rem, 10vw, 1.4rem);
    cursor: pointer;
    @media screen and (max-width:820px) {
        color:var(--color-golden);
    }
`
export const HeroButton = styled.button`
     background-color: var(--color-crimson);
    color: var(--color-black);
    font-weight: 600;
    letter-spacing: 0.04em;
    line-height: 28px;
    font-size: 16px;
    margin-top: 1rem;
    padding: 0.5rem 1.5rem;
    border-radius: 10px;
    border: 1px solid var(--color-golden);
    outline: none;
    cursor: pointer;
    &:hover{
        background-color: var(--color-golden);
        color: var(--color-crimson);
        transition: var(--transition);
    }
    @media screen and (max-width:820px) {
        color:var(--color-black);
        background-color: var(--color-golden);

        &:hover{
            background-color: var(--color-golden);
            color: var(--color-crimson);
            transition: var(--transition);
        }
    }
`