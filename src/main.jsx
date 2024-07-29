import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { App } from './App.jsx'
import { ViewProduct } from './viewproduct/ViewProduct.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Provider } from "react-redux"
import store from './store'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/product/:productId",
    element: <ViewProduct />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
