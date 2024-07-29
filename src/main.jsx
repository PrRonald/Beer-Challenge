import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { ViewProduct } from './viewproduct/ViewProduct.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux"
import store from './store'
import { ErrorPage } from './components/ErrorPage.jsx'

const router = createBrowserRouter([
  {
    path: "/products",
    element: <App />,
    errorElement: <ErrorPage error={"Page not found"} />
  },
  {
    path: "/products/:productId",
    errorElement: <ErrorPage error={"Page not found"} />,
    element: <ViewProduct />
  }
  
],
{
  basename: "/products"
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
