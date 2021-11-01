import React from 'react'
import { Button } from '../ButtonElements'
import { 
    InfoContainer,
    InfoWrapper, 
    InfoRow, 
    Column1, 
    TextWrapper, 
    TopLine,
    BtnWrap, 
    Heading, 
    SubTitle, 
    Column2, 
    ImgWrap, 
    Img,
 } from './Info.elements'



const InfoSection = ({
    lightBg,
    id,
    imgStart,
    topLine,
    lightText,
    headLine,
    darkText,
    description,
    buttonLabel,
    img,
    alt,
    dark,
    dark2,
    primary
}) => {
    return (
        <>
         <InfoContainer ligthBg={ lightBg } id={ id }>
             <InfoWrapper>
                 <InfoRow imgStart={ imgStart }>
                     <Column1>
                         <TextWrapper>
                             <TopLine>{topLine}</TopLine>
                             <Heading ligthText={ lightText }>{headLine}</Heading>
                             <SubTitle darkText={ darkText }>{ description }</SubTitle>
                             <BtnWrap>
                                 <Button 
                                    to="home"
                                    smooth={ true }
                                    duration={ 500 }
                                    spy={ true }
                                    exact="true"
                                    offset={ -80 }
                                    primary={ primary ? 1 : 0 }
                                    dark={ dark ? 1 : 0 }
                                    dark2={dark2 ? 1: 0 }>{ buttonLabel }</Button>
                             </BtnWrap>
                         </TextWrapper>
                     </Column1>
                     <Column2>
                         <ImgWrap>
                             <Img src={img} alt={alt}/>
                         </ImgWrap>
                     </Column2>
                 </InfoRow>
             </InfoWrapper>
         </InfoContainer>   
        </>
    )
}

export default InfoSection
