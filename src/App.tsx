
import {
  createBrowserRouter,RouterProvider} from "react-router-dom";
import HomePage from './router/home/page'
import DetailsPage from './router/details/page'
import ErrorPage from "./router/error-page";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage/>,
    errorElement: <ErrorPage />
  },
  {
    path: "/details/:cityName",
    element: <DetailsPage/>,
    errorElement: <ErrorPage />
  },
]);
// Arquivo reservado para navegação
export default function App() {
  return (<RouterProvider router={router} />)
}
