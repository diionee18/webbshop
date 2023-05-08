import { useState, useEffect } from "react";
import {
    name,
    price,
    description,
    picture,
    productid,
} from "../utils/updateProductAtom.js";
import { useRecoilState } from "recoil";
import "./EditProduct.css";


const EditProduct = () => {
    const [productName, setProductName] = useRecoilState(name);
    const [productPrice, setProductPrice] = useRecoilState(price);
    const [productInfo, setProductInfo] = useRecoilState(description);
    const [productImg, setProductImg] = useRecoilState(picture);
    const [productId, setProductId] = useRecoilState(productid);


    const handleName = (e) => {
        setProductName(`"${e.target.value}"`);
    };
    const handlePrice = (e) => {
        setProductPrice(e.target.value);
    };
    const handleInfo = (e) => {
        setProductInfo(`"${e.target.value}"`);
    };
    const handleImg = (e) => {
        setProductImg(`"${e.target.value}"`);
    };
    const handleId = (e) => {
        setProductId(e.target.value);
    };
    
    const handleclick = async (e) => {
        async function updateProduct() {
        
            const url = "https://www.forverkliga.se/JavaScript/api/fe/?action=edit-product";
            const shopId = 1002;
            
            const data = {
                action: 'edit-product',
                name: productName,
                description: productInfo,
                picture: productImg,
                price: productPrice,
                shopid: shopId,
                productid: productId
            }
            const options = {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data)
            }
            const response = await fetch(url, options)
            const statusObject = await response.json()
            console.log(statusObject);
           
        
            if( statusObject.stats === 'success' ) {
                return true
            }
            return false
        }
        e.preventDefault();
        await updateProduct()
        
    };
    return (
        <div className="div-wrapper">
            <div className="input-wrapper">

                <div className="label-div">
                    <label htmlFor="name">ProduktNamn</label>
                    <input onBlur={handleName} name="name" type="text" />
                </div>

                <div className="label-div">
                    <label htmlFor="price">Pris</label>
                    <input onBlur={handlePrice} name="price" type="text" />
                </div>


                <div className="label-div">
                    <label htmlFor="bild">Bild (Klistra in en url)</label>
                    <input onBlur={handleImg} name="bild" type="text" />
                </div>

                <div className="label-div">
                    <label htmlFor="productid">ProductId</label>
                    <input onBlur={handleId} name="productid" type="text" />
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
