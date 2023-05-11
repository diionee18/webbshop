import Home from "./components/routes/Home/Home";
import Root from "./components/routes/Root";
import { createHashRouter} from 'react-router-dom'
import Products from "./components/routes/products/Products";
import Users from "./components/Admin/Users";
import EditProduct from "./components/Admin/EditProduct";
import AddProduct from "./components/Admin/AddProduct";
import ProductsAdmin from "./components/routes/admin/ProductsAdmin";
import SeparateProduct from "./components/routes/products/SeparateProduct";



export const router = createHashRouter([
    {
        path: '/',
        element: <Root/>,
        children:[

            {
                path: 'products',
                element: <Products/>
            },
            {
                path: 'products/:id',
                element: <SeparateProduct/>
            },
            {
                path: 'cart',
                element: <Home/>
            },
            {
                path: 'admin',
                element: <Home/>
            },
            {
                path: 'admin/products',
                element: <ProductsAdmin/>
            },
            {
                path: 'admin/users',
                element: <Users/>
            },
            {
                path: 'admin/products/edit',
                element: <EditProduct/>
            },
            {
                path: 'admin/products/add-product',
                element: <AddProduct/>
            },
            {
                path: '',
                element: <Home/>
            },
            
        ]
    }
])