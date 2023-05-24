import Home from "./Home";
import History from "./History";
import Characters from "./Characters";
import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Basic from "./Basic";
import { useState } from "react";
import { createContext } from 'react';

export const ThemeContext = createContext(null);

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
  const chosenSide = useState(false);

  return (
    <ThemeContext.Provider value={chosenSide}>
    <div className="app">
      <RouterProvider router={router} />
    </div>
    </ThemeContext.Provider>
  );
}

export default App;