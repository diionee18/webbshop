import { clicked, users } from "../utils/getAtom.js";
import { useRecoilState } from "recoil";
import { useEffect, useState } from "react";
import { addUser, deleteUser, getUsers } from "../utils/apiFunctions.js";
import "./Users.css";

const Users = () => {
    const [userstate, setUserState] = useRecoilState(users);
    const [Clickedbtn, setClicked] = useState(false);
    const [username, setuserName] = useState('');
    const [password, setPassword] = useState('');


    const clickedAddBtn = () => {
        setClicked(true);
    };
    const inputUserName = (e) => {
        setuserName(e.target.value);
        console.log(username);
    };
    const inputPassword = (e) => {
        setPassword(e.target.value);
        console.log(password);
    };
    

    const addToUsers = async (e) => {
        e.preventDefault()
        const result = await addUser(username,password)
        if (result) {
            console.log("Tillagd");
            setClicked(false)
        }else{
           return
        }
    }

    const removeUser = (userId) => {
        setLoading(true)
       
            const result = deleteUser(userId);
            if (result) {
                console.log("tog bort", userId);
                setLoading(false)
            } else {
                console.log("Gick inte att ta bort", userId);
            }

{

}    };

    useEffect(() => {
        async function fetchUsers() {
            const data = await getUsers();
            if (data) {
                setUserState(data);
            }
        }
        fetchUsers();
    }, [setUserState]);

    return (
        <>
            <div className="users-Wrapper">
                <h1>Admin</h1>
                {Clickedbtn ? null : (
                    <button onClick={clickedAddBtn} className="btn">
                        Lägg till Användare
                    </button>
                )}
                {Clickedbtn && (
                    <div className="add-user">
                        <form onSubmit={addToUsers}>

                        <div className="form">
                            <label htmlFor="username">Användarnamn</label>
                            <input required onChange={inputUserName} type="text" name="username" />
                        </div>

                        <div className="form">
                            <label htmlFor="username">Lösenord</label>
                            <input required onChange={inputPassword}  type="password" />
                        </div>
                        <button type="submit" className="btn">Lägg Till</button>
                        </form>
                    </div>
                )}

                <div className="users-div">
                    {userstate.map((user) => (
                        <li key={user.id}>
                            <span>Användarnamn: </span>
                            {user.username} <br />
                            <span> AnvändarId: </span> {user.id} <br />
                            <button
                                onClick={() => removeUser(user.id)}
                                className="btn"
                            >
                                Ta bort Användare
                            </button>
                        </li>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Users;
