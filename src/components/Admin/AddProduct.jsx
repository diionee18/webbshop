import { useState, useEffect } from "react";
import "./EditProduct.css";
import { uploadProduct} from "../utils/apiFunctions.js";
import ProductAdded from "./ProductAdded";



const AddProduct = () => {
    const [productName, setProductName] = useState();
    const [productPrice, setProductPrice] = useState();
    const [productInfo, setProductInfo] = useState();
    const [productImg, setProductImg] = useState();
    const [productAdded, setProductAdded] = useState(false);
    const [priceError, setPriceError] = useState(false);
    const [addError, setAddError] = useState(false)


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
        setProductInfo(e.target.value );
    };
    const handleImg = (e) => {
        setProductImg(e.target.value);
    };

    
    const handleclick = async (e) => {
        e.preventDefault()
        const result = await uploadProduct(productName, productPrice, productInfo, productImg);     
        if(result){
            setProductAdded(true)
            console.log("allt gick bra");
        } else{
            setAddError(true)
            
        }
        
    };
    return (
        <div className="div-wrapper">
            <div className="input-wrapper">
            <form onSubmit={handleclick} className="edit-form">
                

                <div className="label-div">
                    <label htmlFor="name">ProduktNamn</label>
                    <input className="input" required onBlur={handleName} name="name" type="text" />
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
                    <input className="input" required onBlur={handleImg} name="bild" type="text" />
                </div>

                <div className="label-div">
                    <label htmlFor="beskrivning">Beskrivning</label>
                    <textarea required onBlur={handleInfo} name="beskrivning" type="text" />
                </div>

                <button type="submit" className="uppdatera-btn">
                    Lägg till Produkt
                </button>
                
            </form>
            </div>

            {addError && <div>
                <p>Kunde inte ladda upp produkten, kontrollera att du fyllt i alla rutor.</p>
                </div>}
            {
                productAdded &&
            <ProductAdded/>
            }
        </div>
    );
};
export default AddProduct;