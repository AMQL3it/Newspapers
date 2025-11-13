import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Area from "./components/Area";
import Department from "./components/Department";
import Customer from "./components/Customer";
import Product from "./components/Product";
import Delivery from "./components/Delivery";
import Bill from "./components/Bill";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} >

          <Route exect path="areas" element={<Area></Area>}/>
          <Route exect path="departments" element={<Department></Department>}/>
          <Route exect path="areas/:id/departments" element={<Department></Department>}/>
          <Route exect path="customers" element={<Customer></Customer>}/>
          <Route exect path="products" element={<Product></Product>}/>
          <Route exect path="deliveries" element={<Delivery></Delivery>}/>
          <Route exect path="bills" element={<Bill></Bill>}/>
          

        </Route>
      </Routes>
    </Router>
  );
};

export default App;
