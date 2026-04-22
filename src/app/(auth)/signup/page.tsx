import SignupForm from '@/_components/SignupForm'
import { requireUnAuth } from '@/lib/auth-utils'
import React, { FC } from 'react'



type SignupPageProps = {}
const SignupPage:FC<SignupPageProps> = async() => {
  await requireUnAuth()
  return (
    <div>
        <SignupForm/>
    </div>
  )
}

export default SignupPage