import { users } from "../utils/getAtom.js";
import { useRecoilState } from "recoil";
import { useEffect } from "react";
import { getUsers } from "../utils/apiFunctions.js";
import "./Users.css"

const Users = () => {
    const [userstate, setUserState] = useRecoilState(users);

    useEffect(() => {
        async function fetchUsers() {
            const data = await getUsers();
            if (data) {
                setUserState(data);
            }
        }
        fetchUsers();
    }, [setUserState]);
    console.log(userstate);
    return (
        <>
            <div className="users-Wrapper">
                <h1>Admin</h1>
                <div className="users-div">
                {userstate.map((user) =>(
                    <li><span>Användarnamn: </span>{user.username} <br />
                   <span> AnvändarId: </span> {user.id} <br />
                   <button className="admin-button">Ta bort</button>
                    </li>
                ))}
                </div>
            </div>
        </>
    );
};

export default Users;
