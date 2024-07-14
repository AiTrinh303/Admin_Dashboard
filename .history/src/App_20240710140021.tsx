import Home from "./pages/home/Home"
import Users from "./pages/users/Users";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Home />
      ),
    },
    {
      path: "about",
      element: <Users,
    },
    {
      path: "products",
      element: <Products />,
    },
  ]);

  return (
    <div>
      <Home />
    </div>
  )
}

export default App
