import React, { useState } from 'react'
import video from '../../Assets/Video/video.mp4'
import { Button } from '../ButtonElements';
import { HeroContainer,
         HeroBg, VideoBg,
         HeroContent,
         HeroH1, 
         HeroP, 
         HeroBtnWrapper, 
         ArrowForward, 
         ArrowRigth } from './Hero.elements'


const HeroSection = ({primary, dark}) => {

    const [ hover, setHover ] = useState( false );
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg 
                    autoPlay 
                    loop 
                    muted 
                    src={video} 
                    type="video/mp4"
                 />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Bank Made Easy</HeroH1>
                <HeroP>Sign up for a new account today a receive $250
                        in credits toward your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button 
                        to="signup" 
                        onMouseEnter={ onHover } 
                        onMouseLeave={ onHover }
                        primary={ primary ? 1 : 0 }
                        dark={ dark ? 1 : 0 }
                        smooth={ true }
                        duration={ 500 }
                        spy={ true }
                        exact='true'
                        offset={ -80 }
                        >
                        Get started { hover ? <ArrowForward /> : <ArrowRigth />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
