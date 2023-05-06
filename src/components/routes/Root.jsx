import { Outlet } from "react-router-dom";
import Header from "./Header/Header";


const Root = () => {

    return (
        <>
            <Header/> 
            <main>
                <Outlet />
            </main>
        </>
    );
};

export default Root;

// todo: Skapa två componenter av header, dem har samma innehåll men designen ska se olika ut
// lägg in dem här och använd conditional rendring ifall width är över en viss strl
