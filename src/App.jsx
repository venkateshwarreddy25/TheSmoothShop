


import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import NavBar from './components/NavBar'
// import LandingPage from './pages/LandingPage'
// import Mobiles from './pages/MobilePage'
// import NavBar from "./stores/components/NavBar"
import LandingPage from "./stores/pages/LandingPage"
import Mobiles from "./stores/pages/MobilePage"
import AcData from './stores/pages/AcPage'
import BooksData from './stores/pages/BookPage'
import Computerdata from './stores/pages/ComputerPage'
import FridgeData from './stores/pages/FridgePage'
import Kitchendata from './stores/pages/KitchenPage'
import MenData from './stores/pages/MenPage'
import WomanData from './stores/pages/WomenPage'
import SpeakerData from './stores/pages/Speakerspage'
import WatchData from './stores/pages/WatchPage'
import TvData from './stores/pages/TvPage'
import MobileView from './ViewData/MobileView'
import UserCart from './stores/UserCart'
import AcView from './ViewData/AcView'
import ComputerView from './ViewData/ComputerView'
import BooksView from './ViewData/BooksView'
import FridgeView from './ViewData/FridgeView'
import FurnitureView from './ViewData/FurnitureView'
import FurnitureData from './stores/pages/FurniturePage'
import KitchenView from './ViewData/KitchenView'
import MenView from './ViewData/MenView'
import SpeakerView from './ViewData/SpeakerView'
import WomenView from './ViewData/WomenView'
import WatchView from './ViewData/WatchView'
import TvView from './ViewData/TvView'



export default function App() {
  return (
    <BrowserRouter>
      {/* <NavBar /> */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mobiles" element={<Mobiles />} />
        <Route path="/Ac" element={<AcData />} />
        <Route path="/Books" element={<BooksData />} />
        <Route path="/Computer" element={<Computerdata />} />
        <Route path="/fridge" element={<FridgeData />} />
        <Route path="/furniture" element={<FurnitureData />} />
        <Route path="/kitchen" element={<Kitchendata />} />
        <Route path="/mens" element={<MenData />} />
        <Route path="/womens" element={<WomanData />} />
        <Route path="/speakers" element={<SpeakerData />} />
        <Route path="/watch" element={<WatchData />} />
        <Route path="/tv" element={<TvData />} />
          <Route path="/mobiles/:id" element={<MobileView />} />
          <Route path='/cart' element={<UserCart />} />
          <Route path='/Ac/:id' element={<AcView />} />
          <Route path='/Books/:id' element={<BooksView />} />
          <Route path='/computer/:id' element={<ComputerView />} />
          <Route path='/fridge/:id' element={<FridgeView />} />
          <Route path='/furniture/:id' element={<FurnitureView />} />
          <Route path='/kitchen/:id' element={<KitchenView />} />
          <Route path='/mens/:id' element={<MenView />} />
          <Route path='/speakers/:id' element={<SpeakerView />} />
          <Route path='/womens/:id' element={<WomenView />} />
          <Route path='/watch/:id' element={<WatchView />} />
          <Route path='/tv/:id' element={<TvView />} />
      </Routes>
    </BrowserRouter>
  )
}
