import React from 'react'
// import LandingPage from '../pages/LandingPage'
import Mobiles from './MobileData'
import Computerdata from './ComputerData'
import AcData from './AcData'
import BooksData from './BooksData'
import FridgeData from './FridgeData'
import FurnitureData from './FurnitureData'
import Kitchendata from './KitchenData'
import MenData from './MenData'
import SpeakerData from './SpeakerData'
import TvData from './TvData'
import WomanData from './WomanData'
import WatchData from './WatchData'

const Products = () => {
  return (
    <div>
        <Mobiles />
        <Computerdata />
        <AcData />
        <BooksData />
        <FridgeData />
        <FurnitureData />
        <Kitchendata />
        <MenData />
        <SpeakerData />
        <TvData />
        <WomanData />
        <WatchData />
    </div>
  )
}

export default Products
