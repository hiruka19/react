import "../node_modules/bootstrap/dist/css/bootstrap.css";
import './App.css';
import Users from './Users';
import Home from './Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Products from './Products';
import Orders from "./Orders";

function App() { //component 
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/users" element={<Users />} />
        <Route path="/product" element={<Products />} />
        <Route path="/orders" element={<Orders/>}/> 
        {/* orders rout */}

        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>


  )

}
export default App;