import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({product, setCount, count}) => {
    console.log(product)

    return(
    
      <div className="product-card">
        <Link to={"product/"+product.id} >
          <img className="card-img"
            src={product.imageSrc} 
            alt={product.desc}/>
          <div className="product-info">
            <h4>{product.name}</h4>
            <h4>{product.price}</h4>
          </div>
          <p>{product.desc}</p>
        </Link>
          <button onClick={() => setCount(count + 1)}>
            add to cart
          </button>
        </div>
   
    );
    }
    
    export default ProductCard;
