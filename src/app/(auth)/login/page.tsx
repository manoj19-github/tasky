import { requireAuth, requireUnAuth } from '../../../lib/auth-utils'
import LoginForm from '../../../_components/LoginForm'
import React, { FC } from 'react'


type LoginPageProps = {}
const LoginPage:FC<LoginPageProps> = async() => {
  await requireUnAuth()

  return (
    <div>
        <LoginForm/>
    </div>
  )
}

export default LoginPage