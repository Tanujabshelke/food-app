import React, { lazy, Suspense } from "react";
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import Header from "./src/components/Header/Header";
import Container from "./src/components/Container/Container";
import Footer from "./src/components/Footer/Footer";
import Contact from "./src/components/Contact";
import RestoMenu from "./src/components/Container/RestoMenu";
import "./App.css";

const AboutUS = lazy(()=>import("./src/components/About"));

 const AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />  
    </div>
  );
};


export default AppLayout;

const appRouter = createBrowserRouter([
  { path: "/", element: <AppLayout />,
    children : [
      { path: "/", element: <Container /> },
      { path: "/about", element: <Suspense fallback={<h1>Loading ...</h1>}><AboutUS /></Suspense> },
      { path: "/contact", element: <Contact /> },
      { path: "/restaurants/:resId", element: <RestoMenu /> },
    ],
  errorElement: <Error /> },
 
]);


const container = document.getElementById('root');
const _root =  createRoot(container)
_root.render(<RouterProvider router={appRouter} />)

