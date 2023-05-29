import { products, idValue, logdin, productdetails  } from "../../utils/getAtom";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { getProducts, deleteProduct } from "../../utils/apiFunctions.js";
import { NavLink } from "react-router-dom";
import "./ProductsAdmin.css";


function ProductsAdmin() {
    const [productsState, setProductsState] = useRecoilState(products);
    const [targetId, setTargetId] = useRecoilState(idValue);
    const [targetInfo, setProductInfo] = useRecoilState(productdetails);
    const [islogdin, setLogdin] = useRecoilState(logdin)


    const findProductInfo = (product) =>{
        setProductInfo ({
            name: product.name,
            price: product.price,
            picture: product.picture,
            description: product.description
        })

        console.log(product.name);


    }

    const removeProduct = (productId) => {
        const result =  deleteProduct(productId);
        if (result) {
            console.log("tog bort", productId);
        } else {
        }
    };
    

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
        <>
        { islogdin ? <>
            <div className="add-prod-btn-div">
                <NavLink
                    className="add-btn btn"
                    to={"/admin/products/add-product"}
                >
                    Lägg till produkt
                </NavLink>
            </div>

            <div className="product-wrapper-admin">
                {productsState.map((product) => (
                    <div className="product-div-admin" key={product.id}>
                        <li>
                            <div className="img-div">
                                {<img src={product.picture} alt="" />}
                            </div>
                            <br />
                            <div>
                                <span className="span-admin">Produkt: </span>{" "}
                                {product.name}
                            </div>
                            <div>
                                <span className="span-admin">Pris: </span>
                                {product.price} Kr
                            </div>
                            <div>
                                <span className="span-admin">Info </span>:{" "}
                                {product.description}
                            </div>
                            <div>
                                <span className="span-admin">Produkt id: </span>{" "}
                                {product.id}
                            </div>

                            <div className="edit-remove-div">
                                <NavLink
                                    onClick={() => findProductInfo(product)}
                                    className="edit-button btn"
                                    to={"/admin/products/edit"}
                                >
                                    {" "}
                                    Ändra
                                </NavLink>
                                <button onClick={() => removeProduct(product.id)}

                                    className="remove-button btn"
                                >
                                    Ta bort
                                </button>
                            </div>
                        </li>
                    </div>
                ))}
            </div> </>
            : null
            }
        </>
    
    );

}

export default ProductsAdmin;
