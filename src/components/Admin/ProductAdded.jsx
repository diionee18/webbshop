import { NavLink } from "react-router-dom"
import "./ProductAdded.css"

const ProductAdded = () =>{
    return(
        <div className="product-added">
            <h1>
            Produkten är tillagd nu
            </h1>
            <div className="to-btn">
            <NavLink className="uppdatera-btn" to={"/admin/products"}> Till produkter</NavLink>
            </div>
        </div>
    )
}

export default ProductAdded