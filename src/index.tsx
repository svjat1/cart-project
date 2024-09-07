import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import {RouterProvider} from "react-router-dom";

import {router} from "./router";
import {ShoppingContextProvider} from "./context/ShoppingCOntext";


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <ShoppingContextProvider>
    <RouterProvider router={router}/>
    </ShoppingContextProvider>
);

