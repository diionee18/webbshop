import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import HeaderAdmin from "../Admin/HeaderAdmin";
import { logdin } from "../utils/getAtom";
import { useRecoilState } from "recoil";



const Root = () => {
    const [islogdin, setLogdin] = useRecoilState(logdin)

    return (
        <>
        {islogdin ? 
            <HeaderAdmin/>:
           <Header/>
        }
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Root;

// todo: Skapa två componenter av header, dem har samma innehåll men designen ska se olika ut
// lägg in dem här och använd conditional rendring ifall width är över en viss strl
