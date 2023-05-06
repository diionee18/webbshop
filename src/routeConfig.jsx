import Home from "./components/routes/Home/Home";
import Root from "./components/routes/Root";
import { createHashRouter} from 'react-router-dom'



export const router = createHashRouter([
    {
        path: '/',
        element: <Root/>,
        children:[

            {
                path: '/',
                element: <Home/>
            }
            
        ]
    }
])