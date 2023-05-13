import { NavLink } from "react-router-dom";
import { products, selectedProductsState, isSearched } from "../utils/getAtom";
import { useRecoilState } from "recoil";
import SearchedProducts from "./SearchedProducts";

const LekSpel = () =>{
    const [productsState] = useRecoilState(products);
    const [selectedProducts, setSelectedProducts] = useRecoilState
    (selectedProductsState);
        const leksakerNamn = [
            "Kortlek",
            "Hopprep",
            "Kubb",
            "Badmintonset",
            "Bouleset",
            "Brännbollsset",
            "Flygande drake",
            "Sportslig",
            "Subsoccer",
            "Trädgårdsspel",
            "Relaxdays XXL",
            "Spikeball Spel",
            "KanJam Frisbee-spel",
            "Tactic Fotbollskrocket"
      ];
      const [isSearch] = useRecoilState(isSearched);

      const handleAddToCart = (product) => {
        setSelectedProducts([product]);
      };


    return(
        <>
        { isSearch ? <SearchedProducts/> :

            <div className="product-wrapper">
            {productsState.filter((product) => leksakerNamn.includes(product.name)).map((product) => (
                <div className="product-div" key={product.id}>
                    <li className="product-li">
                        <div >

                        <div className="img-div">{<img src={product.picture} alt="" />}</div>
                        <div>{product.name}</div>
                        <div>{product.price} Kr</div>
                        </div>
                    </li>
                        <div className="go-to-btn">
                            <NavLink to={"/products/" + product.id} onClick={() => handleAddToCart(product)}  >Gå till Produkt</NavLink>
                        </div>
                </div>
            ))}
        </div>
        }
            </>

    )
}

export default LekSpel