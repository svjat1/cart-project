import {createBrowserRouter, Navigate} from "react-router-dom";

import {MainLayout} from "./layouts";
import {Store, About, Home} from "./components";

const router = createBrowserRouter([
    {
        path:'', element:<MainLayout/>, children:[
            {
                index:true, element: <Navigate to={'home'}/>
            },
            {
                path:'home', element:<Home/>
            },
            {
                path:'store', element:<Store/>
            },
            {
                path:'about', element:<About/>
            }
        ]
    }
])

export {
    router
}