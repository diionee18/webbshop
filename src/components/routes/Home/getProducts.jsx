import { products } from "../../utils/getAtom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import "./getproduct.css"

async function getProducts() {
    const url = "https://www.forverkliga.se/JavaScript/api/fe/";
    const shopId = 1002;
    let urlWithQuery = url + "?action=get-products&shopid=" + shopId;
    try {
        const response = await fetch(urlWithQuery);
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.log("Use console.log to find out what the error is.");
    }
    return null;
}

function YourComponent() {
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
            {productsState.map((product) => (
                <div className="product-div" key={product.id}>
                    <li>
                        {product.picture}
                        <br />
                        {product.name}
                        <br />
                        {product.price}
                        <br />
                        {product.description}
                    </li>
                </div>
            ))}
        </div>
    );
}

export default YourComponent;

getProducts();
export { getProducts };

