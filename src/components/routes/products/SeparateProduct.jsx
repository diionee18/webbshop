import { selectedProductsState, products, cartState } from "../../utils/getAtom";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./SeparateProduct.css";
import ShoppingCart from "../../products/ShoppingCart";

const SeparateProduct = () => {
    //const [selectedProducts] = useRecoilState(selectedProductsState);
    const [productsState] = useRecoilState(products);
    const [product, setProduct] = useState();
    const params = useParams();
    const [productsInCart, setProductInCart] = useRecoilState(cartState)
  

    useEffect(() => {
        console.log(productsState);
        let selectedProduct = productsState.find((p) => p.id == params.id);
        setProduct(selectedProduct);
        console.log(selectedProduct);
    }, [productsState]);


    const addProductToCart = (product) => {
        const newProduct = {
            ...product,
            count:1,
        };
        setProductInCart([
            ...productsInCart,
            newProduct,
        ]);
        ShoppingCart(product);
    };



    return (
        <>
            {product ? (
                <div >
                    <li className="" key={product.id}>
                        <div className="img-div">
                            {<img src={product.picture} alt="" />}
                        </div>
                        <hr />
                        <div className="separate-info">
                            <div className="prod-name">{product.name}</div>
                            <div className="prod-info">
                                {product.description}
                            </div>
                            <div>
                                <div className="price-btn">
                                   <p> {product.price} Kr</p>
                                    <button onClick={() => addProductToCart(product)}>Lägg i varukorg</button>
                                </div>
                            </div>
                        </div>
                    </li>
                </div>
            ) : null}
        </>
    );
};
export default SeparateProduct;
