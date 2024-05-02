
import Index from './components/Accordion/Index'
import RandomColor from './components/Color generator/Index'
import ImageSlider from './components/Image Slider/ImageSlider'
import Load from './components/LoadMore/Load'
import Scroll from './components/ScrollIndicator/Scroll'
import Search from './components/Search Automation/Search'
import Star from './components/StarRating/Star'
import Tabs from './components/Tabs/Tabs'
import TicTacToe from './components/Tic Tac Toe/TicTacToe'
import Tree from './components/Tree View/Tree'
import { Menu } from './components/Tree View/dataset'
import Weather from './components/Weather/Weather'
import Popup from './components/modalpopup/Popup'
import QR from './components/qr code generator/QR'

function App() {
 

  return (
    <>
      {/* <Star noOfStars={10} /> */}
      {/* <ImageSlider url={'https://picsum.photos/v2/list'} page={"1"} limit={"10"} /> */}
      {/* <TicTacToe /> */}
      {/* <Load /> */}
      {/* <Tree menus={Menu}/> */}
{/*     <QR /> */}
    {/* <Weather /> */}
    {/* <Scroll  url={'https://dummyjson.com/products?limit=100'}/> */}

    {/* <Tabs /> */}
    {/* <Search /> */}
    <Popup />
    </>
  )
}

export default App
