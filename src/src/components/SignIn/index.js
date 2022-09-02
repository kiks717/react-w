import React from 'react'
import { Container, Form, FormButton, FormContent, FormInput, FormLabel, FormWrap, FromH1, Icon, Text } from './SignInElements'

function SignIn() {
  return (
    <>
        <Container id='signin'> 
            <FormWrap>
                <Icon to="/">LUXURY.</Icon>
                <FormContent></FormContent>
                <Form action="#">
                    <FromH1>Sign in to your account</FromH1>
                    <FormLabel htmlFor='for'>Email</FormLabel>
                    <FormInput type='email' required placeholder=' TYPE EMAIL HERE PLEASE'/>
                    <FormLabel htmlFor='for'>Password</FormLabel>
                    <FormInput type='password' required placeholder='AND YOUR PASSWORD' />
                    <FormButton type='submit' >Continue</FormButton>
                    <Text>Forgot password?</Text>
                </Form>
            </FormWrap>
        </Container>
    </>
  )
}

export default SignIn
