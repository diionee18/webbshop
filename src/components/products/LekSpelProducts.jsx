import { products } from "../utils/getAtom";
import { useRecoilState } from "recoil";

const LekSpel = () =>{
    const [productsState] = useRecoilState(products);
        const sommarLeksakerNamn = [
        "Vattenpistol",
      ];

      console.log(products);
    return(
         <div className="product-wrapper">
            {productsState.filter((product) => sommarLeksakerNamn.includes(product.name)).map((product) => (
                <div className="product-div" key={product.id}>
                    <li className="product-li">
                        <div >

                        <div className="img-div">{<img src={product.picture} alt="" />}</div>
                        <div>{product.name}</div>
                        <div>{product.price} Kr</div>
                        </div>
                    </li>
                        <div className="go-to-btn">
                            <button>Gå till Produkt</button>
                        </div>
                </div>
            ))}
        </div>

    )
}

export default LekSpel