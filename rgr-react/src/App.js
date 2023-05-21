import Home from "./Home";
import History from "./History";
import Characters from "./Characters";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Authorization from "./Authorization";
import Registration from "./Registration";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/history",
    element: <History />,
  },
  {
    path: "/characters",
    element: <Characters />,
  },
  {
    path: "/authorization",
    element: <Authorization />,
  },
  {
    path: "/registration",
    element: <Registration />,
  },
  {
    path: "*",
    element: <Home />,
  },
]);

function App() {

  return (
    <div className="app">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;