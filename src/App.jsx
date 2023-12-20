// import { useState } from 'react'
import "./App.css";
import Home from "./routes/Home.jsx";
import Gallery from "./routes/Gallery";
import LogIn from "./routes/LogIn";
import ErrorPage from "./routes/ErrorPage";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./routes/Root";
import Contact from "./routes/Contact";
import SignUp from "./routes/SignUp";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/contact", element: <Contact /> },
        { path: "/login", element: <LogIn /> },
        { path: "/signup", element: <SignUp /> },
        { path: "/gallery", element: <Gallery /> },
      ],
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
