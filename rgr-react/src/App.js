import Home from "./Home";
import History from "./History";
import Characters from "./Characters";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Basic from "./Basic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/basic",
    element: <Basic />,
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