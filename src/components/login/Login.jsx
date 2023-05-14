import "./Login.css"
import { useRecoilState } from "recoil";
import { clicked, users, logdin } from "../utils/getAtom";
import { getUsers, userCredentials } from "../utils/apiFunctions";
import { useEffect, useState } from "react";
import { faL } from "@fortawesome/free-solid-svg-icons";



const Login = () => {
    const [userstate, setUserState] = useRecoilState(users);
    const [userName, setInputUserName] = useState("")
    const [password, setInputUserPassword] = useState("")
    const [wrongCred, setWrongCred] = useState(false)
    const [isClicked, setClicked] = useRecoilState(clicked);
    const [isLogdin, setLogdin] = useRecoilState(logdin);
    const [isLoading, setLoading] = useState(false);
    
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
       
    }
    const isUserPassword = (e) => {
        setInputUserPassword(e.target.value)
       
    }
    
    const correctCredentials = async (event) => {
        event.preventDefault()
        setLoading(true);
        setWrongCred(false);
    
        try {
            const result = await userCredentials(userName, password);
      
            if (result) {
              setLogdin(true);
            } else {
              setWrongCred(true);
            }
          } catch (error) {
            setWrongCred(true);
          }
      
          setLoading(false);
        };


    
    return (
        <div className="login-form">
            
            <button onClick={handleclick} className="close">X</button>
            <h1 className="paragraf">Admin Login</h1>

            <form onSubmit={correctCredentials}  className="form">
            {wrongCred && <div className="cred-error">
               <p> Uppgifterna du angav är felaktiga. Försök igen eller kontakta din administratör.</p>
                </div>}

            <div  className="login-div">
                <label htmlFor="username">Användarnamn</label>
                <input onChange={isUserName} value={userName} name="username" type="text" required  />
            </div>

            <div className="login-div">
                <label htmlFor="password">Lösenord</label>
                <input
                value={password}
                onChange={isUserPassword} name="password" type="password" required/>
            </div>
            <button className="login-btnn" type="submit"> {isLoading? "Laddar...." : "Logga In" }</button>
            </form>
        </div>
    );
};
export default Login;