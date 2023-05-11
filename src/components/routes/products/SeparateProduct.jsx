import { selectedProductsState, products } from "../../utils/getAtom";
import { useRecoilState } from "recoil";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const SeparateProduct = () => {
    //const [selectedProducts] = useRecoilState(selectedProductsState);
    const [productsState] = useRecoilState(products);
    const [product, setProduct] = useState();
    const params = useParams();
    console.log(params.id);

    useEffect(() => {
        console.log(productsState);
        let selectedProduct = productsState.find((p) => p.id == params.id);
        setProduct(selectedProduct);
        console.log(selectedProduct);
    }, [productsState]);

    return (
        <>
            {product ? (
                <div>
                    <li className="" key={product.id}>
                        <div className="img-div">
                            {<img src={product.picture} alt="" />}
                        </div>
                        <div>{product.name}</div>
                        <div>{product.price} Kr</div>
                    </li>
                </div>
            ) : null}
        </>
    );
};
export default SeparateProduct;
