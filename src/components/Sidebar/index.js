import React from 'react'
import {SidebarContainer, SidebarLink, SidebarMenu, CloseIcon, Icon, SideBtnWrap, SidebarRoute} from './SidebarElements'
const Sidebar = ( {isOpen, toggle}) => {
    
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    
        <SidebarContainer isOpen={isOpen} onClick={toggle} > 
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SidebarMenu >
                <SidebarLink to="home" onClick={toggle}>HOME</SidebarLink>
               <SidebarLink to="explore" onClick={toggle}>EXPLORE</SidebarLink>
               <SidebarLink to="discover"  onClick={toggle}>DISCOVER</SidebarLink>
               <SidebarLink to="show"  onClick={toggle}>SHOW</SidebarLink>
               <SidebarLink to="cart" 
            //    onClick={toggle}
                 onClick={handleOpen}
                 open={open}
                 onClose={handleClose}>
                CART</SidebarLink>


            <SideBtnWrap>
                <SidebarRoute 
                to="signin"
                smooth={true} 
                duration={500}
                spy={true} 
                exact='true' 
                offset={80}
                onClick={toggle}>
                SIGN IN
                </SidebarRoute>
            </SideBtnWrap>
            </SidebarMenu>
        </SidebarContainer>
  )
}

export default Sidebar
