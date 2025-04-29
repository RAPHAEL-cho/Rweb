
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/navbarfiles/Navbar'
import Footer from './components/footerfiles/Footer'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Service from './components/Pages/Service'
import Contact from './components/Pages/Contact'
import Signup from './components/Pages/Signup'
import Login from './components/Pages/Login'
import Cart from './components/Pages/Cart'
import Notfound from './components/Pages/Notfound'
import LatestCollection from './components/latest_collection/LatestCollection'
import Bestseller from './components/Bestseller/Bestseller'
import Newsletter from './components/forms/Newsletter'
import Search from './components/Pages/Search'
import ProductDetails from './components/Pages/ProductDetails'
import { CartProvider } from './components/context/CardContext'
import Shipping from './components/Pages/Shipping'
import Success from './components/Pages/Success'

function App() {

  return (
    <>
    <CartProvider>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/cart' element={<Cart/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/product/:id' element={<ProductDetails/>}/>
        <Route path='/shipping' element={<Shipping/>}/>
        <Route path='/success' element={<Success/>}/>
        <Route path='*' element={<Notfound/>}/>
      </Routes>

     

      

      <Footer/>
    </Router>
    </CartProvider>
  
    </>
  )
}

export default App
