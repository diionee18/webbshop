import { useState, useEffect } from "react";
import "./EditProduct.css";
import { updateProduct, getProducts } from "../utils/apiFunctions.js";



const EditProduct = () => {
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productInfo, setProductInfo] = useState();
    const [productImg, setProductImg] = useState();
    const [productId, setProductId] = useState();
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
    const handleId = (e) => {
        setProductId(e.target.value);
    };
    
    const handleclick = async (e) => {
        const result = await updateProduct(productName, productPrice, productInfo, productImg, productId);     
        if(result){
            console.log("allt gick bra");
        } else{
            setErrorEdit(true)
            console.log("något gick fel", result, errorEdit);
          
        }
        
    };
    return (
        <div className="div-wrapper">
            <div className="input-wrapper">

                <div className="label-div">
                    <label htmlFor="name">ProduktNamn</label>
                    <input className="input" onBlur={handleName} name="name" type="text" />
                </div>

                <div className="label-div">
                    <label htmlFor="price">Pris</label>
                    <input className="input" onBlur={handlePrice} name="price" type="text" />
                </div>


                <div className="label-div">
                    <label htmlFor="bild">Bild (Klistra in en url)</label>
                    <input className="input" onBlur={handleImg} name="bild" type="text" />
                </div>

                <div className="label-div">
                    <label htmlFor="productid">ProductId</label>
                    <input className="input" onBlur={handleId} name="productid" type="text" />
                </div>

                <div className="label-div">
                    <label htmlFor="beskrivning">Beskrivning</label>
                    <textarea onBlur={handleInfo} name="beskrivning" type="text" />
                </div>

                <button  onClick={handleclick} className="uppdatera-btn">
                    Uppdatera
                </button>
            </div>
        </div>
    );
};

export default EditProduct;
