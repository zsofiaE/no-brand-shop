import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ProductPage = ({products}) => {

const { id } = useParams();

const product = products.filter((product) => product.id.toString() === id )[0];
 return(
    <div className="product-page">
         <img className="" src={product.imageSrc} />
         <div className="product-elements">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            <p>{product.desc}</p>
        </div>
    </div>
    )
}   


export default ProductPage;