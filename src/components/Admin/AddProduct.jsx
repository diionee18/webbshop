import { useState, useEffect } from "react";
import "./EditProduct.css";
import { uploadProduct} from "../utils/apiFunctions.js";



const AddProduct = () => {
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productInfo, setProductInfo] = useState();
    const [productImg, setProductImg] = useState();
    const [errorEdit, setErrorEdit] = useState(false)


    const handleName = (e) => {
        setProductName(`'${e.target.value}'`);
    };
    const handlePrice = (e) => {
        setProductPrice(e.target.value);
    };
    const handleInfo = (e) => {
        setProductInfo(`'${e.target.value}'` );
    };
    const handleImg = (e) => {
        setProductImg(`'${e.target.value}'`);
    };

    
    const handleclick = async (e) => {
        const result = await uploadProduct(productName, productPrice, productInfo, productImg);     
        if(result){
            console.log("allt gick bra");
        } else{
            setErrorEdit(true)
            console.log("något gick fel", result);
            console.log(productName, productPrice, productInfo, productImg);
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
                    <label htmlFor="beskrivning">Beskrivning</label>
                    <textarea onBlur={handleInfo} name="beskrivning" type="text" />
                </div>

                <button  onClick={handleclick} className="uppdatera-btn">
                    Lägg till Produkt
                </button>
            </div>
        </div>
    );
};
export default AddProduct;