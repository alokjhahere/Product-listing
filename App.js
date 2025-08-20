import ReactDOM from "react-dom/client"
import ProductList from "./src/components/ProductList";
const AppLayout = () => {
  return (
    <div>
      <ProductList/>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
