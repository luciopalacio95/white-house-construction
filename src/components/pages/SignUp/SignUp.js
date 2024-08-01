import React from 'react'
import HeroSection from '../HeroSection.jsx'
import { homeObjThree, homeObjFour } from './Data'

function SignUp () {
  return (
    <>
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
    </>
  )
}

export default SignUp
