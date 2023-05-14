import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import "./EditProduct.css";
import { updateProduct, getProducts } from "../utils/apiFunctions.js";
import { idValue } from "../utils/getAtom";

const EditProduct = () => {
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productInfo, setProductInfo] = useState();
    const [productImg, setProductImg] = useState();
    const [productId, setProductId] = useRecoilState(idValue);
    const [errorEdit, setErrorEdit] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [priceError, setPriceError] = useState(false);

    const handleName = (e) => {
        setProductName(e.target.value);
    };
    const handlePrice = (e) => {
        setProductPrice(e.target.value);
        const hasLetters = /[a-zA-Z]/.test(e.target.value);
        if (hasLetters) {
          setPriceError(true)
        }else{
            setPriceError(false)
        }
    };
    const handleInfo = (e) => {
        setProductInfo(e.target.value);
    };
    const handleImg = (e) => {
        setProductImg(e.target.value);
    };

    const handleclick = async (e) => {
        e.preventDefault();
        setLoading(true);
        setErrorEdit(false);

        try {
            const result = await updateProduct(
                productName,
                productPrice,
                productInfo,
                productImg,
                productId
            );

            if (result) {
                console.log("allt gick bra");
            } else {
                setErrorEdit(true);
            }
        } catch (error) {
            setErrorEdit(true);
        }
        setLoading(false);
    };
    return (
        <div className="div-wrapper">
            <div className="input-wrapper">
                <form className="edit-form" onSubmit={handleclick}>
                    <div className="label-div">
                        <label htmlFor="name">ProduktNamn</label>
                        <input
                            className="input"
                            required
                            onBlur={handleName}
                            name="name"
                            type="text"
                        />
                    </div>
                        
                    <div className="label-div">
                        <label htmlFor="price">Pris</label>
                        {priceError && <span className="price-span">Kontrollera att du endast har siffror</span> }
                        <input
                        placeholder={productPrice}
                            className="input"
                            required
                            onBlur={handlePrice}
                            name="price"
                            type="text"
                        />
                    </div>

                    <div className="label-div">
                        <label htmlFor="bild">Bild (Klistra in en url)</label>
                        <input
                        placeholder={productImg}
                            className="input"
                            required
                            onBlur={handleImg}
                            name="bild"
                            type="text"
                        />
                    </div>

                    <div className="label-div">
                        <label htmlFor="productid">ProductId</label>
                        <input
                            className="input"
                            disabled
                            placeholder={productId}
                            name="productid"
                            type="text"
                        />
                    </div>

                    <div className="label-div">
                        <label htmlFor="beskrivning">Beskrivning</label>
                        <textarea
                            required
                            onBlur={handleInfo}
                            name="beskrivning"
                            type="text"
                        />
                    </div>
                    <div className="submit-btn">
                        <button type="submit" className="uppdatera-btn">
                            {isLoading ? "Laddar..." : "Uppdatera"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
