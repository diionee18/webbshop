import "./ShoppingCart.css";
import { AiFillCloseCircle } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

function ShoppingCart({
    visibility,
    products,
    onProductRemove,
    onClose,
    onQuantityChange,
}) {
    return (
        <>
            <div>
                <div className="header">
                    <h2>Varukorg</h2>
                    <button className="close-btn" onClick={onClose}>
                        <AiFillCloseCircle color="black" size={30} />
                    </button>
                </div>
                <div className="cart-products">
                    {products.length === 0 && (
                        <span className="empty-text"> Varukorgen är tom</span>
                    )}
                    {products.map((product) => (
                        <div className="cart-product" key={product.id}>
                            <img src={product.picture} alt={product.name} />

                            <div className="produkt-cart-info">
                                <h1>{product.name}</h1>
                                <span className="produkt-cart-price">
                                    {product.price * product.count} Kr
                                </span>
                            </div>

                            <select
                                className="count"
                                value={product.count}
                                onChange={(event) =>
                                    onQuantityChange(
                                        product.id,
                                        event.target.value
                                    )
                                }
                            >
                                {[...Array(10).keys()].map(number => {
                                    const num = number + 1
                                    return <option value={num} key={num}>{num}</option>
                                })
                                }
                            </select>
                            <button className="remove-btn" onClick={() => onProductRemove(product)}>
                                <RiDeleteBin6Line size={35}/>
                            </button>
                        </div>
                    ))}
                    {products.length > 0 && <button className="CheckOut-btn"> Kassa </button>}
                </div>
            </div>
        </>
    );
}

export default ShoppingCart;