import { createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./Component/About/About";
import Contact from "./Component/Contact/Contact";
import Portfolio from "./Component/Portfolio/Portfolio";
import Layout from "./Component/layout/Layout";
import Notfound from "./Component/Notfound/Notfound";
import Start from "./Component/Start/Start";

let x = createBrowserRouter([
  {
    path: '', element: <Layout />, children: [
      { index: true, element: <Start /> },
      { path: 'about', element: <About /> },
      { path: 'portfolio', element: <Portfolio /> },
      { path: 'contact', element: <Contact /> },
      { path: '*', element: <Notfound /> },
    ]
  },
]);

function App() {

  return <RouterProvider router={x}/>
}

export default App
