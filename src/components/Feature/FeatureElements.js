import styled  from "styled-components";
import college from '../Feature/img/college_beFunky.jpg'
export const FeatureContainer = styled.div`
      /* background: linear-gradient(to right, rgba(0,0,0,0.4),
        rgba(0,0,0,0.1)); */
        background: linear-gradient(to right, rgba(0,0,0,0.8),
        rgba(0,0,0,0.2)), url(${college}) ;
        height: 100vh;
        max-height: 500px;
        max-width: 100vw;
        background-position: center;
        background-size: cover;

        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color:  var(--color-golden);
        h1{
            font-size: clamp(3rem, 5vw, 5rem);
            text-align: center;
            justify-content: center;
        };
        p{
            margin-bottom: 1rem;
            font-size: clamp(1rem, 3vw, 2rem);
            justify-content: center;
            text-align: center;
            color: black;
            background-color: var(--color-crimson);
        }
`
export const FeatureButton = styled.button`
    background-color: var(--color-crimson);
    color: var(--color-golden);
    font-weight: 700;
    letter-spacing: 0.04em;
    line-height: 28px;
    font-size: 2rem;
    padding: 1rem 1.5rem;
    border-radius: 10px;
    border: 1px solid var(--color-gold);
    outline: none;
    cursor: pointer;
`