import bg from "../../../assets/bg.png";
import "./Home.css";
import YourComponent from "../../utils/getProducts";

const Home = () => {
    return (
        <>
            <div className="sort-list">
                <select>
                    <option value="rekomenderat">Rekomenderat</option>
                    <option value="lägstpris">Billigast först</option>
                    <option value="högstpris">Dyrast först</option>
                </select>
            </div>
            <div className="bg-div">
                <img src={bg} alt="" className="bg-main" />
                <p className="paragraf-bg">sommarens heta erbjudande!</p>
            </div>
            <div className="wrapper">
                <YourComponent />
            </div>
        </>
    );
};

export default Home;
