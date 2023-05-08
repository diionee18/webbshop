import { logdin } from "../../utils/getAtom";
import { useRecoilState } from "recoil";
import HomeCustomer from "../../homeCustomer/HomeCustomer";

const Home = () => {
    const [islogdin, setLogdin] = useRecoilState(logdin)
    return (
        <>
        { islogdin ? null:
            <HomeCustomer/>
        }

        
    
        </>
    );
};

export default Home;
