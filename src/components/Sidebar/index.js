import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink,
SidebarBtnWrap, SidebarRoute } from './Sidebar.elements'

const Sidebar = ({ isOpen, toggle }) => {
    return (
        <SidebarContainer 
            isOpen={ isOpen }   // Se recibe la prop isOpen = false 
            onClick={ toggle }  // Se recibe la función para cambiar isOpen al contrario
        >
           <Icon onClick={ toggle }>
               <CloseIcon />
           </Icon> 
           <SidebarWrapper>
               <SidebarMenu>
                   <SidebarLink to="about">
                        About
                   </SidebarLink>
                   <SidebarLink to="discover">Discover</SidebarLink>
                   <SidebarLink to="services">Services</SidebarLink>
                   <SidebarLink to="singup">Sign Up</SidebarLink>
               </SidebarMenu>
               <SidebarBtnWrap>
                   <SidebarRoute to="/signin">Sign In</SidebarRoute>
               </SidebarBtnWrap>
           </SidebarWrapper>
        </SidebarContainer>
    )
}

export default Sidebar
