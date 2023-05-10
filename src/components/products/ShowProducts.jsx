import { products } from "../utils/getAtom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import "./getproduct.css";
import { getProducts } from "../utils/apiFunctions.js";

function ShowProducts() {
    const [productsState, setProductsState] = useRecoilState(products);

    const sommarLeksakerNamn = [
        "Vattenpistol",
        "Badmintonset",
        "Strandboll",
        "Frisbee",
        "Vattenspridare",
        "Sandlåda med leksaker",
        "Badring",
        "Bubbelpistoler",
        "Kubb",
        "Hopprep",
        "Återanvändbara Vattenbomber"
      ];

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
            {productsState.filter((product) => sommarLeksakerNamn.includes(product.name)).map((product) => (
                <div className="product-div" key={product.id}>
                    <li className="product-li">
                        <div >

                        <div className="img-div">{<img src={product.picture} alt="" />}</div>
                        <div>{product.name}</div>
                        <div>{product.price} Kr</div>
                        </div>
                    </li>
                        <div className="go-to-btn">
                            <button>Gå till Produkt</button>
                        </div>
                </div>
            ))}
        </div>
    );
}

export default ShowProducts;
