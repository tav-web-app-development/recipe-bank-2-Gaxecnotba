import React from "react";
import ReactDOM from "react-dom/client";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Contact from "./Components/Contact.jsx";
// import Footer from "./Components/Footer.jsx";
// import NewRecipe from "./Components/NewRecipe.jsx";
import App from "./App.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <App />,
//   },
// {
//   path: "/contact",
//   element: <Contact />,
// },
// {
//   path: "/footer",
//   element: <Footer />,
// },
// {
//   path: "/add-new-recipe",
//   element: <NewRecipe />,
// },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
