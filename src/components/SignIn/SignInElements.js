import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.div`
    min-height:692px;
    min-width: 100%;
    bottom:0;
    top:0;
    left:0;
    right:0;
    z-index:0;
    overflow:hidden;
    background: var(--color-crimson);
`
export  const FormWrap = styled.div`
height:100%;
display:flex;
flex-direction:column;
justify-content:center;
align-items: center;
@media screen and (max-width:400px) {
    height:80%;
    overflow: hidden;
}
`
export const Icon =styled(Link)`
margin-left:32px;
margin-top:32px;
text-decoration:none;
color:var(--color-black);
font-weight:700;
text-align: center;
border-bottom: 1px solid var(--color-golden);
text-shadow: 0px -36px 7px #DDA120;
font-size: 3rem;
@media screen and (max-width:400px) {
    margin-top: 3.1rem;
    align-items: center;
    margin-left: 1rem;

}
`
export const FormContent = styled.div`
height:100%;
display:flex;

flex-direction:column;
justify-content:center;
@media screen and (max-width:400px) {
   padding:10px;
}
`
export const Form = styled.form`
background:#010101;
max-width:400px;
height:auto;

width:100%;
z-index:1;
display:grid;
margin: auto;
margin-top: 1.5rem;
padding: 80px 32px;
border-radius:4px;
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

@media screen and (max-width:400px) {
    padding: 32px 32px;
}
`
export const FromH1 = styled.h1`
margin-bottom:40px;
color:var(--color-golden);
font-size:25px;
font-weight:400;
text-align:center;
`
export const FormLabel = styled.label`
margin-bottom:8px;
font-size:14px;
color:#fff;
`
export const FormInput = styled.input`
padding: 1rem 1rem;
margin-bottom:32px;
border:none;
border-radius:4px;
`
export const FormButton = styled.button`
background:#dda120;
padding: 1rem 0;
border:none;
border-radius:4px;
color:#fff;
font-size:20px;
cursor:pointer;
`
export const Text = styled.span`
text-align:center;
margin-top:24px;
color:#fff;
font-size:14px;
`