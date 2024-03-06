import React from 'react'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import { Container } from 'react-bootstrap';

const LoginPage = () => {
  return (
    <Container>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </Container>
  )
}
export default LoginPage