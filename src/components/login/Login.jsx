import "./Login.css"
import { useRecoilState } from "recoil";
import { clicked } from "../utils/getAtom";

const Login = () => {
    const [isClicked, setClicked] = useRecoilState(clicked);
    const handleclick = () => {
        setClicked(false);
    }
    return (
        <div className="login-form">
            <button onClick={handleclick} className="close">X</button>
            <h1 className="paragraf">Admin Login</h1>
            <form className="form">

            <div  className="login-div">
                <label htmlFor="username">Användarnamn</label>
                <input name="username" type="text" />
            </div>

            <div className="login-div">
                <label htmlFor="password">Lösenord</label>
                <input name="password" type="password" />
            </div>
            <button>Logga in</button>
            </form>
        </div>
    );
};
export default Login;