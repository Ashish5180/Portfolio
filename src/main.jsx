import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './components/Pages/Home.jsx'
import Skills from './components/Pages/Skills.jsx'
import Projects from './components/Pages/Projects.jsx'
import ContactUs from './components/Pages/ContactUs.jsx'
import AboutUs from './components/Pages/AboutUs.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Home /> },
      { path: 'about-us', element: <AboutUs /> },
      { path: 'contact', element: <ContactUs /> },
      { path: 'skills', element: <Skills /> },
      { path: 'projects', element: <Projects /> },
    ],
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
      <RouterProvider router={router} />
   
  </React.StrictMode>
);
