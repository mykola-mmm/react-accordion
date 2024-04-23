import { useState } from 'react'
import './App.css'
import Accordion from './components/accordion'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'

function App() {

  return (
    <>
      <StarRating numberOfStars={3}/>
      {/* <RandomColor /> */}
      {/* <Accordion /> */}
    </>
  )
}

export default App
