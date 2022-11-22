import React from 'react'

import './App.css'
import About from './components/pages/About'
import Contact from './components/pages/Contact'
import Photo from './components/pages/Photo'
import Profile from './components/pages/Profile'

const App = () => {
  return (
    <>
      <div className="App-header">
        <h1>Welcome to React</h1>
        <hr />
        <Contact />
        <About />
        <Profile />
        <Photo />
      </div>
    </>
  )
}
export default App