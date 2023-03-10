import { useState } from 'react'
import './App.css'
import  ProductCard from './ProductCard'

const product = {
  id: 1,
  name: "V-10 SUEDE JADE",
  href: "#",
  price: "126€",
  imageSrc: "https://www.kastner-oehler.de/veja-sneaker+v-10-1-768_1024_75-7491208_1.jpg",
  desc: "The suede is made from the underside of bovine leather previously brushed to make it softer and more flexible. ",
}

// const products = [
//   {
//     id: 1,
//     name: "V-10 SUEDE JADE",
//     href: "#",
//     price: "126€",
//     imageSrc: "https://www.kastner-oehler.de/veja-sneaker+v-10-1-768_1024_75-7491208_1.jpg",
//     desc: "The suede is made from the underside of bovine leather previously brushed to make it softer and more flexible.",
//   },
//   {
//     id: 2,
//     name: "V-12 LEATHER WHITE STEEL",
//     href: "#",
//     price: "155€",
//     imageSrc: "https://www.veja-store.com/media/catalog/product/cache/527447f8cffec2edb3591f96240a2d24/X/D/XD0202787A_1.jpg",
//     desc: "The bovine leather comes from farms in Uruguay, a country known for its culture of animal husbandry and the quality of its leather. ",
//   },
//   {
//     id: 3,
//     name: "CAMPO CHROMEFREE LEATHER WHITE ",
//     href: "#",
//     price: "150€",
//     imageSrc: "https://www.veja-store.com/media/catalog/product/cache/527447f8cffec2edb3591f96240a2d24/v/e/veja_cp052195_lateral_1.jpg",
//     desc: "The suede is made from the underside of bovine leather previously brushed to make it softer and more flexible.",
//   },
//   {
//     id: 4,
//     name: "URCA CWL WHITE NAUTICO",
//     href: "#",
//     price: "160€",
//     imageSrc: "https://www.veja-store.com/media/catalog/product/cache/527447f8cffec2edb3591f96240a2d24/U/C/UC0703174A_1.jpg",
//     desc: "This material is a vegan alternative to leather, with a very similar appearance and excellent resistance.",
//   }]

  const products = [
    {
      id: 0,
      name: "Peacock",
      href: "#",
      price: "6€",
      imageSrc: "./Getting_ready_for_the_weekend.png",
      desc: "Getting ready for the weekend.",
    },
    {
      id: 1,
      name: "Dancing Flamingos",
      href: "#",
      price: "5€",
      imageSrc: "./Dancing_flamingos.png",
      desc: "Sed quibusdam recusandae alias error harum maxime adipisci amet laborum. ",
    },
    {
      id: 2,
      name: "Ostrich",
      href: "#",
      price: "5€",
      imageSrc: "./Ostrich.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 3,
      name: "Good Hair Day",
      href: "#",
      price: "3€",
      imageSrc: "./Good_Hair_Day.png",
      desc: "Ipsa laudantium molestias eos sapiente officiis modi at sunt excepturi expedita sint?",
    },
    {
      id: 4,
      name: "Pelican Party",
      href: "#",
      price: "3€",
      imageSrc: "./Pelican_Party.png",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
    {
      id: 5,
      name: "Hangover",
      href: "#",
      price: "3€",
      imageSrc: "./and_a_day_after_hangover.png",
      desc: "Pelican_Party and and a day after hangover",
    }]

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <h1>the illustratory</h1>
      <h3 className="cart">cart: {count}</h3>
      <div className="products-container">
        {products.map((product) =>  
        <ProductCard 
          product={product} 
          key={product.id} 
          setCount={setCount} 
          count={count}
        /> 
        )}
       
      </div>
    </div>
  )
}

export default App
