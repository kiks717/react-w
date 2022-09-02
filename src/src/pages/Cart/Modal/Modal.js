import React from 'react'
import styled from 'styled-components';
import  ReactDOM from 'react-dom';
//trebam da poslijedim childrem 
// a children je tekst iz dugmeta
const ModalCont = styled.div`
  position: fixed;
  top: 50%;
  left:50%;
  transform: translate(-50%, -55%);
  padding: 40px;
  z-index: 1000;
  @media screen  and (max-width:820px){
        margin-top:2.5rem;
  }
  @media screen and (max-width:650px) {
        padding: 10px;
        margin-top:2.4rem;
  }  
  @media screen  and (max-width:400px){
        width: max-content;
  }
`
const CloseButton = styled.button`
    background-color: var(--color-golden);
    color: var(--color-black);
    font-weight: 700;
    letter-spacing: 0.04em;
    font-size: 16px;
    padding: 0.5rem 1.5rem;
    width: 100%;
    border-radius: 8px;
    border: 1px solid var(--color-golden);
    outline: none;
    top: 50px;
    cursor: pointer;
    &:hover{
        color: var(--color-golden);
        background-color: var(--color-black);
        transition: var(--transition);
    }
`
const OverlayDiv = styled.div`
  position: fixed;
  top: 0;left: 0%;right:0%;bottom:0%;
  background-color: rgba(0,0,0,0.7);
  z-index: 1000;
`
function Modal({open, children, onClose,setIsOpen}) {
  if(!open) return null

  //if not open return null
  return ReactDOM.createPortal(
    <>
      <OverlayDiv/>
    <ModalCont id='cart'>
     <CloseButton  
     onClick={onClose}>Close </CloseButton>
      {children}
    </ModalCont>
    </>,
    document.getElementById('portal')
  )
}
/*
sto se tice createPortal on se ustvari nalazi u JSX-u 
ali u stvarnosti se prikazuje izvan JSX-a tj izvan div-a

createPortal omogucava delegaciju sadrzaja za razliku od rendera*/
export default Modal
