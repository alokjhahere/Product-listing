import ReactDOM from "react-dom/client"
const AppLayout = () => {
  return (
    <div>
      Hello From React
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)
