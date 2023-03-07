import React from "react";
import { useState } from "react";

function ProductCart ({product, setCount, count}){
    
    const [cart, setCart] = useState(0);

    return(
      <div className="product-card">
      <img src={product.imageSrc} alt={product.desc}/>
      <div className="product-info">
        <h3>{product.name}</h3>
        <h3>{product.price}</h3>
      </div>
      <p>{product.desc}</p>
      <button onClick={() => setCount(count + 1)}>
        add to cart
      </button>
    </div>
    )
    }
    

    export default ProductCart;
