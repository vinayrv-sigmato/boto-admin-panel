import {Routes,Route,BrowserRouter} from "react-router-dom"
import Vendors from "./pages/vendors/Vendors";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/users/Users";
import Payment from "./pages/payment/Payment";
import Invoice from "./pages/invoice/Invoice";
import Login from "./components/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/vendors" element={<Vendors/>}/>
        <Route path="/payments" element={<Payment/>}/>
        <Route path="/invoice" element={<Invoice/>}/>
        <Route path="/adminlogin" element={<Login/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
