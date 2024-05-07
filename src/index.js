import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import Quizz from "./pages/quizz";
import QuizResult from "./pages/QuizResult";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import NewPsd from "./pages/Auth/NewPassword";
import ResetPassword from "./pages/Auth/ResetPsd";
import Discover from "./pages/Discover/Discover.js";
import BoxesPage from "./pages/Discover/BoxesPage.js";
import { SingleProduct } from "./pages/Products/SingleProduct.js";
import { ProductPage } from "./pages/Products/ProductPage.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/quizz",
    element: <Quizz />,
  },
  {
    path: "/quiz-result",
    element: <QuizResult />,
  },
  {
    path: "/Register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/psd",
    element: <NewPsd />,
  },
  {
    path: "/resetpsd",
    element: <ResetPassword />,
  },
  {
    path: "/discover",
    element: <Discover />,
  },
  {
    path: "/Boxes",
    element: <BoxesPage />,
  },
  {
    path: "/singleprod",
    element: <SingleProduct />,
  },
  {
    path: "/products",
    element: <ProductPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
