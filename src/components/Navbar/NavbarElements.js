
import styled from "styled-components";
import {Link as LinkR } from 'react-router-dom'
import {Link as LinkScroll} from 'react-scroll'



export const Nav = styled.nav`
        background: ${({scrollNav}) =>
         (scrollNav ? '#F5EFDB' : "transparent")};
        color:#dda120;
        height: 80px;
        display: flex;
        
        padding-top:20px;
        justify-content:center;
        align-items:center;
        font-size:2rem;
        position:sticky;
        top:0;
        z-index:10;
        @media screen and (max-width:960px){
            tranisition: 0.8s all ease-in ;

        }


`

export const NavbarContainer = styled.div`
        display:flex;
        justify-content:space-between;
        height: 80px;
        z-index:1;
        width:100%;
        padding: 0 20px;
        max-width:1100px;
`

export const NavBarLink = styled(LinkR)`
        color: #dda120;
        justify-self: flex-start;
        cursor: pointer;
        font-size: 4rem;
        display: flex;
        align-items: center;
        font-weight: 700;
        text-decoration: none;

        &:hover{
                color:#fff;
        };
        &:active{
                border-bottom: 3px solid #dda120;
         };
         @media screen and (max-width:820px) {
                  color:var(--color-golden);   
         }
`
// export const Icon = styled(FaBars)`
//         &:hover{
//                 color: black;
//         }
//             @media screen and (max-width:820px) {
//                   color:var(--color-golden);  
//                   font-size:3rem; 
//           }

// `
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
        color: #dda120;

        align-items:center;
        text-decoration:none;
        height:100%;
        cursor:pointer;
        &:hover{
                color:var(--color-crimson);
                border: 1px solid var(--color-crimson);
                border-radius: 10px;
                padding: 6px  4px;
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
                margin-right: 1.1rem;

        }
`