import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client"
import ProductList from "./src/components/ProductList";
import ProductPage from "./src/components/ProductPage";


const AppLayout = () => {
  return (
    <div>
      <ProductList/>
    </div>
  )
}

const approuter = createBrowserRouter([
  {
    path : "/",
    element : <AppLayout/>
  },
  {
    path : "/product/:id",
    element : <ProductPage/>
  }
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={approuter}/>)
