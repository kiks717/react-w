import styled from "styled-components"
import { Link  as LinkS} from "react-scroll"
// import {Link as LinkR} from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'
import {FaTimes} from 'react-icons/fa'

export const SidebarContainer = styled.aside`
    position: fixed;
    font-family: var(--font-base);
    z-index: 999;
    /* da bude na vrhu  */
    width: 350px;
    height: 100%;
    background-color: var(--color-crimson);
    display: grid;
    align-items: center;
    top: 0;
    transition: var(--transition);
    right: ${({ isOpen }) => ( isOpen ? '0' : '-1000px' )};
    top: ${({isOpen}) => (isOpen ? "0" : "-100%") };
    /* bice off the screen sa -1000px */

    @media screen and (max-width: 400px) {
            width:100%;
    }
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    background: transparent;
    border: transparent;
    right: 1.5rem;
    outline: none;
    font-size: 2rem;
    cursor: pointer;
`

export const CloseIcon = styled(FaTimes)`
    color:var(--color-golden);
`

export const SidebarElements = styled.div``

export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: var(--transition);
    text-decoration: none;
    color: var(--color-black);
    cursor: pointer;
    &:hover{
        transition: var(--transition);
        color: var(--color-golden);
    }
`
export const SideBtnWrap = styled.div`
    display: flex;
    justify-content: center;
`

export const SidebarRoute = styled(LinkScroll)`
    background-color: var(--color-crimson);
    white-space: nowrap;
    padding: 16px 64px;
    margin-top:1rem;
    color: var(--color-black);
    outline: none;
    border: 1px solid var(--color-golden);
    border-radius: 10px ;
    font-weight: 500;
    cursor: pointer;
    transition: var(--transition);

    &:hover{
    transition: var(--transition);
    color: var(--color-crimson);
    background: var(--color-golden);
    }
`

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(5,80px);
    text-align: center;

    @media screen and (max-width:480px) {
        grid-template-rows: repeat(5, 60px) ;
    }
`

