import Home from "./pages/home/Home"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Users from "./pages/users/Users";

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
  ]);

  return (
    <div>
      <Home />
    </div>
  )
}

export default App