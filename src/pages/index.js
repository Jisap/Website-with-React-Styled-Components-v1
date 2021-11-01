import React, { useState } from 'react'
import { HeroSection, Navbar, Sidebar } from '../components'
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree, homeObjTwo, buttonObjfour } from '../components/InfoSection/Data';
import Services from '../components/Services';


const Home = () => {

    const [isOpen, setIsOpen ] = useState(false);
    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
         <Sidebar isOpen={ isOpen } toggle={ toggle }/>{/* En principio isOpen=false y se pasa por ref la funcion toggle */}
         <Navbar toggle={ toggle }/>                   {/* Navbar recibe la función toggle tambien*/}
         <HeroSection { ...buttonObjfour }/>
         <InfoSection { ...homeObjOne }/>
         <InfoSection { ...homeObjTwo }/>
         <Services />
         <InfoSection { ...homeObjThree }/>
         <Footer />
        </>
    )
}

export default Home
