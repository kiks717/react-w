import styled from "styled-components";
import { Link } from "react-router-dom";
export const FooterContainer = styled.div`
    background-color: var(--color-black);
    color:var(--color-black);
`
export const FooterWrap = styled.div`
    font-family: var(--font-base);
    padding: 1rem 1.6rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1300px;
    margin: 0 auto;
`
export const SocialMedia = styled.section`
    max-width: 1300px;
    width: 100%;
`
export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 1rem auto 0 auto;

    @media screen and (max-width:820px) {
        flex-direction: column;
    }
`
export const SocialIconLink = styled.a`
    color:var(--color-white);
    font-size: 24px;
    &:hover{
        transition:var(--transition);
        color:var(--color-golden);
    }
`
export const Span = styled.span`
    font-size: 15px;
    margin-left: 10px;
`
export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`
export const SocialLogo =  styled(Link)`
    color:#fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
    font-weight: 700;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    justify-content: center;
    &:hover{
        transition:var(--transition);
        color:var(--color-golden);

    }
`

