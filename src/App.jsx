import { useState } from 'react'
import Cart from './components/Cart'
import ProductCard from './components/ProductCard'
import ProductPage from './pages/ProductPage'
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
import ProductList from './components/ProductList'
import RootLayout from './layouts/RootLayout'
import Contact from './pages/Contact'

const App = () => {

  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([
    {
      id: 0,
      name: "Peacock",
      href: "#",
      price: "€2,95",
      imageSrc: "./Getting_ready_for_the_weekend.png",
      desc: "Card  🦚 Getting ready for the weekend.",
    },
    {
      id: 1,
      name: "Dancing Flamingos POSTER",
      href: "#",
      price: "€9,95€",
      imageSrc: "./Dancing_flamingos.png",
      desc: "Poster 🦩 Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. ",
    },
    {
      id: 2,
      name: "Ostrich",
      href: "#",
      price: "€2,95",
      imageSrc: "./Ostrich.png",
      desc:  "Card 🌱 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "Good Hair Day Set",
      href: "#",
      price: "€5,90€",
      imageSrc: "./Good_Hair_Day.png",
      desc: "Set of cards 👉 Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?",
    },
    {
      id: 4,
      name: "Pelican Party Set ",
      href: "#",
      price: "€5,90",
      imageSrc: "./Pelican_Party.png",
      desc: "Set of cards 🦞 Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      name: "Patience POSTER",
      href: "#",
      price: "€9,95",
      imageSrc: "./Patience.png",
      desc: "Poster 🐸 Patience of the great blue heron",
    },
  ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout count={count}/>} >
        <Route index element={<ProductList products={products} count={count} setCount={setCount} />} />
        <Route path='about' element={<About/>}/>
        <Route path='product/:id' element={<ProductPage/>}/>
        <Route path="contact" element={<Contact />} />
    </Route>
  )
)

  return (
  <RouterProvider router={router}/>
  )
}

export default App;
