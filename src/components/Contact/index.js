import React from 'react'
import { Container, FormWrap, Icon, FormContent, Form, FormH1, FormLabel, FormInput, FormButton, Text } from './ContactElements'

const Contact = () => {
  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Andres Long</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Send me an email!</FormH1>
              <a href="mailto:andreslong95@gmail.com">Click me plz</a>
              <FormLabel htmlFor='for'>Email</FormLabel>
                <FormInput type='email' required/>
                <FormLabel htmlFor='for'>Message</FormLabel>
                <FormInput type='message' required/>
                <FormButton type='submit'>Continue</FormButton>
                <Text>Ezketiiiiit</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Contact
