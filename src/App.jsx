import { useState } from 'react'
import Accordion from './components/accordion'
import RandomColor from './components/random-color'
import StarRating from './components/star-rating'
import ImageSlider from './components/image-slider'
import LoadMoreData from './components/load-more-data'
import TreeView from './components/tree-view'
import { menus } from './components/tree-view/data'
import QrCodeGenerator from './components/qr-code-generator'
import SwitchTheme from './components/switch-theme'

function App() {

  return (
    <>
      <SwitchTheme />
      {/* <QrCodeGenerator /> */}
      {/* <TreeView menus={menus}/> */}
      {/* <LoadMoreData itemsPerLoad={50} /> */}
      {/* <ImageSlider url="https://picsum.photos/v2/list" page={1} limit={10} /> */}
      {/* <StarRating numberOfStars={30}/> */}
      {/* <RandomColor /> */}
      {/* <Accordion /> */}
    </>
  )
}

export default App
