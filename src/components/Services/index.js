import React from 'react'
import { ServicesCard, ServicesContainer, ServicesH1, ServicesH2, ServicesIcon, ServicesP, ServicesWrapper } from './Services.elements'
import icon1 from '../../Assets/img/icon1.svg'
import icon2 from '../../Assets/img/icon2.svg'
import icon3 from '../../Assets/img/icon3.svg'

const Services = () => {
    return (
        <ServicesContainer id="services">
            <ServicesH1>Our Services</ServicesH1>
                <ServicesWrapper>
                    <ServicesCard>
                        <ServicesIcon src={icon1}/>
                        <ServicesH2>Reduce expenses</ServicesH2>
                        <ServicesP>We help reduce your fees and increase your overal revenue</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon2}/>
                        <ServicesH2>Virtual Office</ServicesH2>
                        <ServicesP>You can acces our platform online anywhere in the world</ServicesP>
                    </ServicesCard>
                    <ServicesCard>
                        <ServicesIcon src={icon3}/>
                        <ServicesH2>Premiun Benefits</ServicesH2>
                        <ServicesP>Unlock our special membership card that return 5% cash back</ServicesP>
                    </ServicesCard>
                </ServicesWrapper>
        </ServicesContainer>
    )
}

export default Services
