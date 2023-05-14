import { users } from "../utils/getAtom.js";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { deleteuser, getUsers } from "../utils/apiFunctions.js";
import "./Users.css"

const Users = () => {
    const [userstate, setUserState] = useRecoilState(users);

    const removeUser = async (userId) =>{
        const response = await deleteuser(userId)
        console.log(userId);
        if (response){
            console.log("if", response);
        }else{
            console.log("else:", response);
        }
    }

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
                <div className="users-div">
                {userstate.map((user) =>(
                    <li><span>Användarnamn: </span>{user.username} <br />
                   <span> AnvändarId: </span> {user.id} <br />
                   <button onClick={() => removeUser(user.id)} className="admin-button">Ta bort</button>
                    </li>
                ))}
                </div>
            </div>
        </>
    );
};

export default Users;
