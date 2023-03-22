import { useState } from 'react'
import Cart from './components/Cart'
import ProductCard from './components/ProductCard'
import ProductList from './components/ProductList'

import RootLayout from './layouts/RootLayout'

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  useParams,
  createRoutesFromElements,
  Outlet
} from "react-router-dom"

import About from './pages/About'
import Contact from './pages/Contact'
import ProductPage from './pages/ProductPage'
import ProfilePage from './pages/ProfilePage'
import CartPage from './pages/CartPage'
import Error from './pages/ErrorPage'

const App = () => {

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Peacock",
      href: "#",
      price: "€2,95",
      imageSrc: "/Getting_ready_for_the_weekend.png",
      desc: "Card  🦚 Getting ready for the weekend.",
    },
    {
      id: 1,
      name: "Dancing Flamingos POSTER",
      href: "#",
      price: "€9,95€",
      imageSrc: "/Dancing_flamingos.png",
      desc: "Poster 🦩 Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. ",
    },
    {
      id: 2,
      name: "Ostrich",
      href: "#",
      price: "€2,95",
      imageSrc: "/Ostrich.png",
      desc:  "Card 🌱 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "Good Hair Day Set",
      href: "#",
      price: "€5,90€",
      imageSrc: "/Good_Hair_Day.png",
      desc: "Set of cards 👉 Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?",
    },
    {
      id: 4,
      name: "Pelican Party Set ",
      href: "#",
      price: "€5,90",
      imageSrc: "/Pelican_Party.png",
      desc: "Set of cards 🦞 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      name: "Patience POSTER",
      href: "#",
      price: "€9,95",
      imageSrc: "/Patience.png",
      desc: "Poster 🐸 Patience of the great blue heron",
    },
  ])
  const [cartItems, setCartItems] = useState([])

  const addItem = (product) =>{
    setCartItems([...cartItems, product])
}

const removeItem = (id) => {
  setCartItems(
    cartItems.filter((cartItem)=> cartItem.id !== id)
  )
}

  console.log(cartItems)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout totalItems={cartItems.length}/>} >
        <Route index element={<ProductList addItem={addItem} products={products} count={count} setCount={setCount} />} />
        <Route path='about' element={<About/>}/>
        <Route path='cart' element={<CartPage cartItems={cartItems} removeItem={removeItem}/>}/>
        <Route path='product/:id' element={<ProductPage products={products} addItem={addItem} />}/>
        <Route path="contact" element={<Contact />} />
        <Route path="profile/:userId" element={<ProfilePage />} />
        <Route path="*" element={<Error />} />
    </Route>
  )
)

  return (
  <RouterProvider router={router}/>
  )
}

export default App;
