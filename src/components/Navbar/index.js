import React, { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { animateScroll as scroll } from 'react-scroll'
import {
    Nav,
    NavbarContainer,
    NavLogo, 
    MobileIcon, 
    NavMenu,
    NavItem,
    NavLinks,
    NavBtn,
    NavBtnLink } from './Navbar.elements';

const Navbar = ({ toggle }) => {

    const [ scrollNav, setScrollNav ] = useState( false );  // Estado para scrollNav
    
    const changeNav = () => {
        if( window.scrollY >= 80 ){ // Retorna el número de píxeles que han sido desplazados en el documento mediante el scroll vertical.
            setScrollNav( true );   // Si se desplazo en la vertical scrollNav toma el valor true 
        }else{ 
            setScrollNav( false );  // Sino se desplaza scrollNav toma el valor false
        }
    }

    useEffect(() => {                                   
            window.addEventListener('scroll', changeNav)    // Ponemos un listener del evento scroll que disparará la función changeNav
            return () => {
                window.removeEventListener('scroll', changeNav) // Cancelamos el listener una vez que realizo su función para evitar
            }                                                   // actualizaciones del estado cuando demontamos el componente             
    },[]);                                              // Si la matriz de dependencia está vacía o undefined el callback se invoca en cada 
                                                        // representación de componente (cada vez que se ejecuta la función del componente)
    
    const toggleHome = () => {                          // Esta función desplaza el scroll de la página al principio
        scroll.scrollToTop();
    }


    return (
        <>
        <IconContext.Provider value = {{ color: '#fff' }}>
            <Nav scrollNav = { scrollNav }>
                <NavbarContainer>
                    <NavLogo to="/" onClick={ toggleHome }>dolla</NavLogo>
                    <MobileIcon onClick={ toggle }> 
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                                smooth={ true }
                                duration={ 500 }
                                spy={ true }
                                exact='true'
                                offset={ -80 }
                                >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discover"
                                smooth={ true }
                                duration={ 500 }
                                spy={ true }
                                exact='true'
                                offset={ -80 }>Discover</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                                smooth={ true }
                                duration={ 500 }
                                spy={ true }
                                exact='true'
                                offset={ -80 }>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signup"
                                smooth={ true }
                                duration={ 500 }
                                spy={ true }
                                exact='true'
                                offset={ -80 }>Sign Up</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin">Sign In</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
