import React from 'react'
import  quizLogo  from '../assets/quiz-logo.png'

export default function Header() {
  return (
    <header>
        <img src={quizLogo} alt="" />

        <h1>The Quiz App</h1>
    </header>
  )
}
