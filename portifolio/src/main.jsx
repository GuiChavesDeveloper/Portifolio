import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import GitProjects from './components/GitProjects.jsx'

import "./styles/main.sass"

import {
  RouterProvider, createBrowserRouter
} from "react-router-dom"

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "portifolio",
    element: <GitProjects />
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
