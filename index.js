import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from './pages/Dashboard';
import About from './pages/About';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Layout from './layout/Layout';
import AuthLayout from './auth/Layout.jsx';
import Login from './auth/Login.jsx';
import Register from './auth/Register.jsx';
import Users from './pages/Users.jsx';



const router = createBrowserRouter([
  {
    Component: App,
    children:[
      {
        path:'/',
        Component:Layout,
        children: [
          {
            path:'/',
            Component : Dashboard,
          },
          {
            path:'/clients',
            Component: Clients,
          },
          {
            path:'/about',
            Component: About,
          },
          {
            path:'/users',
            Component: Users,
          },
          {
            path:'/contact',
            Component: Contact,

          },

        ],
      },
    ],
  },
  {
    path: '/auth',
    Component: AuthLayout,
    children:[
      {
        path:'login',
        Component: Login,
      },
      {
        path: 'register',
        Component: Register,
      },
    ],
  },
  
]);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
