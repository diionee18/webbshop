import { products} from "../../utils/getAtom";
import { useRecoilState } from "recoil";
import { useEffect} from "react";
import { getProducts, deleteProduct } from "../../utils/apiFunctions.js";
import { NavLink } from "react-router-dom";
import "./ProductsAdmin.css"


function ProductsAdmin() {
    const [productsState, setProductsState] = useRecoilState(products);

    const removeProduct = async (productId) =>{
        const result = await deleteProduct(productId); 
        if (result){
            console.log("Produkt är borttagen: " + productId);
        }else{
            console.log(result);
        }
    }


    useEffect(() => {
        async function fetchData() {
            const data = await getProducts();
            if (data) {
                setProductsState(data);
            }
        }

        fetchData();
    }, [setProductsState]);

    return (
        <div className="product-wrapper">
            <div>
            <button className="admin-button"><NavLink to={'/admin/products/add-product'}>Lägg till produkt</NavLink></button>

            </div>
            {productsState.map((product) => (
                <div className="product-div" key={product.id}>
                    <li>
                        {<img src={product.picture} alt="" /> }
                        <br />
                        Produkt: {product.name }
                        <br />
                        Pris: {product.price} Kr
                        <br />
                        Info: {product.description}
                        <br />
                        Produkt id: {product.id}
                        <br />
                        <div className="admin-btn-div">
                         <NavLink className="admin-button" to={'/admin/products/edit'}>Uppdatera Produkt</NavLink>
                        <button onClick={() => removeProduct(product.id)} className="admin-button">Ta bort</button>
                        </div>
                    </li>
                </div>
            ))}
        </div>
    );
}

export default ProductsAdmin;