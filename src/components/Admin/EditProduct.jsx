import { useState, useEffect } from "react";
import { useRecoilState } from "recoil";
import "./EditProduct.css";
import { updateProduct, getProducts,} from "../utils/apiFunctions.js";
import {idValue } from "../utils/getAtom";



const EditProduct = () => {
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productInfo, setProductInfo] = useState();
    const [productImg, setProductImg] = useState();
    const [productId, setProductId] =  useRecoilState(idValue);
    const [errorEdit, setErrorEdit] = useState(false)


    const handleName = (e) => {
        setProductName(e.target.value);
    };
    const handlePrice = (e) => {
        setProductPrice(e.target.value);
    };
    const handleInfo = (e) => {
        setProductInfo(e.target.value);
    };
    const handleImg = (e) => {
        setProductImg(e.target.value);
    };

    
    const handleclick = async (e) => {
        const result = await updateProduct(productName, productPrice, productInfo, productImg, productId);     
        if(result){
            console.log("allt gick bra");
        } else{
            setErrorEdit(true)
          
        }
        
    };
    return (
        <div className="div-wrapper">
            <div className="input-wrapper">
                <form action="submit">

                <div className="label-div">
                    <label htmlFor="name">ProduktNamn</label>
                    <input className="input" required  onBlur={handleName} name="name" type="text" />
                </div>

                <div className="label-div">
                    <label htmlFor="price">Pris</label>
                    <input className="input" required onBlur={handlePrice} name="price" type="text" />
                </div>


                <div className="label-div">
                    <label htmlFor="bild">Bild (Klistra in en url)</label>
                    <input className="input" required onBlur={handleImg} name="bild" type="text" />
                </div>

                <div className="label-div">
                    <label htmlFor="productid">ProductId</label>
                    <input className="input" disabled placeholder={productId} name="productid" type="text" />
                </div>

                <div className="label-div">
                    <label htmlFor="beskrivning">Beskrivning</label>
                    <textarea required onBlur={handleInfo} name="beskrivning" type="text" />
                </div>
                <div className="submit-btn">
                <button type="submit" onClick={handleclick} className="uppdatera-btn">
                    Uppdatera
                </button>

                </div>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;
