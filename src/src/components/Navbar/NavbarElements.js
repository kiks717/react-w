
import styled from "styled-components";
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'



export const Nav = styled.nav`
         font-family: var(--font-base);
        background: ${({scrollNav}) =>
         (scrollNav ? ' #F5EFDB' : "transparent")};
        color:var(--color-golden);
        height: 80px;
        display: flex;
        
        padding-top:20px;
        justify-content:space-between;
        align-items:center;
        font-size:2rem;
        position:sticky;

        top:0;
        z-index:10;
        @media screen and (max-width:820px){
            tranisition: 0.8s all ease-in ;
            background-color:transparent;
            border-bottom: 1px solid white;

        }


`

export const NavbarContainer = styled.div`
        display:flex;
        justify-content:space-between;
        height: 80px;
        z-index:1;
        width:100%;
        padding: 0 20px;
`       

export const NavBarLink = styled(LinkR)`
        color: var(--color-golden);
        justify-self: flex-start;
        cursor: pointer;
        font-size: 4rem;
        display: flex;
        align-items: center;
        font-weight: 700;
        text-decoration: none;

        &:hover{
                color:var(--color-black);
        };
         @media screen and (max-width:820px) {
                  color:var(--color-golden);   
         }
`
export const MobileIcon = styled.div`
         display:none;

        @media screen and (max-width: 820px){
            display:block;
            top:0;
            right:0;
            position: absolute;
            transform: translate(-100%, 45%);
            cursor:pointer;
            position: fixed;
            font-size: 2.4rem;
        };
        
`
export const NavItemsMenu = styled.ul`
         color: var(--color-golden);
         display:flex;
         list-style:none;
         text-align:center;
         margin-right:-22px;

        @media screen and (max-width: 820px){
            display:none;
        }
`

export const NavItems = styled.li`
        margin-left:10px;
        height:80px;

`
export const NavLink = styled(LinkScroll)`
        display:flex;
        color: var(--color-golden);

        align-items:center;
        text-decoration:none;
        height:100%;
        cursor:pointer;
        &:hover{
                color:var(--color-black);
                transition: var(--transition);
        }
`
export const NavBtn= styled.nav`
        display: flex;
        align-items:center;
        @media screen and (max-width: 820px){
                display:none;
        }
`
export const NavBtnLink = styled(LinkScroll)`
        border-radius:8px;
        background:var(--color-crimson);
        white-space:nowrap;
        padding: 10px 50px;
        color:var(--color-black);
        font-size: 1.2rem;
        outline:none;
        border:1px solid var(--color-golden);
        cursor:pointer;
        transition:var(--transition);
        text-decoration:none;

        &:hover{
                transition: all 0.2 ease-in-out;
                background: var(--color-golden);
                color: var(--color-black);
        }
        @media screen and (max-width:960px){
                padding: 8px 20px;
                margin-left: 1.6rem;
                margin-right: 0.5rem;

        }
`