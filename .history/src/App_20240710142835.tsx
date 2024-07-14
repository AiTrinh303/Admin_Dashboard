import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Home from "./pages/home/Home"
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {


  const Layout = () => {
    return (
      <div className="main">
          <Navbar />
          <div className="container">
              <div className="menuContainer">
                
              </div>
          </div>
          <Footer />
      </div>
    )
  }

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "users",
      element: <Users />,
    },
    {
      path: "products",
      element: <Products />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  )
}

export default App
