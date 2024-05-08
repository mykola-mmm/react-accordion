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
import ScrollIndicator from './components/scroll-indicator'
import Tabs from './components/tabs'
import TabsParent from './components/tabs'
import ModalTest from './components/custom-modal-popup/modal-test'
import GithubProfileFinder from './components/gitprofilefinder'

function App() {

  const modalList = [
    { name: 'Modal 1', content: 'Content for Modal 1' },
    { name: 'Modal 2', content: 'Content for Modal 2' },
    { name: 'Modal 3', content: 'Content for Modal 3' },
    { name: 'Modal 4', content: 'Content for Modal 4' },
    { name: 'Modal 5', content: 'Content for Modal 5' }
  ];

  return (
    <>
    <GithubProfileFinder></GithubProfileFinder>
      {/* <ModalTest modalList={modalList}/> */}
      {/* <TabsParent /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <SwitchTheme /> */}
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
