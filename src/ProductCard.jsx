import React from "react";


export function ProductCard({product, setCount, count}){
    

    return(
      <div className="product-card">
      <img 
        src={product.imageSrc} 
        alt={product.desc}/>
      <div className="product-info">
        <h4>{product.name}</h4>
        <h4>{product.price}</h4>
      </div>
      <p>{product.desc}</p>
      <button onClick={() => setCount(count + 1)}>
        add to cart
      </button>
    </div>
    );
    }
    
    export default ProductCard;
