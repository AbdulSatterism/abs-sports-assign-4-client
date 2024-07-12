import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home/Home";
import AllProducts from "../pages/products/AllProducts";
import ProductDetails from "../pages/productDetails/ProductDetails";
import CartDetails from "../pages/cart/CartDetails";
import CheckOutPage from "../pages/cart/CheckOutPage";
import DashboardLayout from "../layout/DashboardLayout";
import AddProducts from "../pages/manageProducts/AddProducts";
import ManageProducts from "../pages/manageProducts/ManageProducts";
import ProductUpdate from "../pages/manageProducts/ProductUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all-products",
        element: <AllProducts />,
      },
      {
        path: "/cart-details",
        element: <CartDetails />,
      },
      {
        path: "/checkout",
        element: <CheckOutPage />,
      },
      {
        path: "/product-details/:id",
        element: <ProductDetails />,
      },
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "add-products",
        element: <AddProducts />,
      },
      {
        path: "manage-products",
        element: <ManageProducts />,
      },
      {
        path: "product-update/:id",
        element: <ProductUpdate />,
      },
    ],
  },
]);

export default router;
