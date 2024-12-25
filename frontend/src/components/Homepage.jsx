import React from 'react'
import About from "./About"
import Education from "./Education"
import Footer from "./Footer"
import Header from "./header"
import Project from "./Projects"
import Skills from "./Skills"

function Homepage() {
  return (
    <div>
      <Header></Header>
      <About></About>
      <Education></Education>
      <Skills></Skills>
      <Project></Project>
      <Footer></Footer>
    </div>
  )
}

export default Homepage