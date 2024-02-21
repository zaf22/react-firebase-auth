import React from 'react'
import SignIn from '../components/auth/SignIn'
import SignUp from '../components/auth/SignUp'
import AuthDetails from '../components/auth/AuthDetails'

const LoginPage = () => {
  return (
    <div>
      <SignIn></SignIn>
      <SignUp></SignUp>
    </div>
  )
}
export default LoginPage