import Home from "./pages/home/Home"
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
        
      ),
    },
    {
      path: "about",
      element: <div>About</div>,
    },
  ]);

  return (
    <div>
      <Home />
    </div>
  )
}

export default App
