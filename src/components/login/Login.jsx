import "./Login.css"
import { useRecoilState } from "recoil";
import { clicked, users, logdin } from "../utils/getAtom";
import { getUsers } from "../utils/apiFunctions";
import { useEffect, useState } from "react";



const Login = () => {
    const [userstate, setUserState] = useRecoilState(users);
    const [inputUserName, setInputUserName] = useState("")
    const [isClicked, setClicked] = useRecoilState(clicked);
    const [isLogdin, setLogdin] = useRecoilState(logdin);
    
    useEffect(() => {
        async function fetchUsers() {
            const data = await getUsers();
            if (data) {
                setUserState(data);
            }
        }
        fetchUsers();
    }, [setUserState]);
    
    
    const handleclick = () => {
        setClicked(false);
    }

    const isUserName = (e) => {
       setInputUserName(e.target.value)
       console.log(inputUserName);
    }
    
    const correctCredentials = (e) => {
        userstate.forEach(user =>{
            if (user.username === inputUserName){
                setLogdin(true)
                e.preventDefault()
                return;
            }else if (user.username.toLowerCase() != inputUserName.toLowerCase()) {

            }
            
        })

    }


    
    return (
        <div className="login-form">
            <button onClick={handleclick} className="close">X</button>
            <h1 className="paragraf">Admin Login</h1>
            <form className="form">

            <div  className="login-div">
                <label htmlFor="username">Användarnamn</label>
                <input onChange={isUserName} name="username" type="text" />
            </div>

            <div className="login-div">
                <label htmlFor="password">Lösenord</label>
                <input name="password" type="password" />
            </div>
            <button onClick={correctCredentials}>Logga in</button>
            </form>
        </div>
    );
};
export default Login;