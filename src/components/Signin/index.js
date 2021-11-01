import React from 'react'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text } from './Signin.elements'

const SignIn = () => {
    return (
        <>
         <Container>
             <FormWrap>
                 <Icon to="/">dolla</Icon>
                 <FormContent>
                     <Form action="#">
                         <FormH1>Sign in to your account</FormH1>
                         <FormLabel htmlFor="for">Email</FormLabel>
                         <FormInput type="email" required />
                         <FormLabel html="for">Password</FormLabel>
                         <FormInput type="submit" required />
                         <FormButton type="submit">Continue</FormButton>
                         <Text>Forgot password</Text>
                     </Form>
                 </FormContent>
             </FormWrap>
         </Container>   
        </>
    )
}

export default SignIn
