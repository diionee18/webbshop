import { products} from "../../utils/getAtom";
import { useRecoilState } from "recoil";
import { useEffect} from "react";
import { getProducts } from "../../utils/apiFunctions.js";
import { NavLink } from "react-router-dom";
import "./ProductsAdmin.css"


function ProductsAdmin() {
    const [productsState, setProductsState] = useRecoilState(products);


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
                        <button className="admin-button"><NavLink to={'/admin/products/edit'}>Uppdatera Produkt</NavLink></button>
                        <button className="admin-button"><NavLink>Ta bort</NavLink></button>
                        </div>
                    </li>
                </div>
            ))}
        </div>
    );
}

export default ProductsAdmin;