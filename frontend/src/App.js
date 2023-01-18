import {Routes,Route,BrowserRouter} from "react-router-dom"
import Vendors from "./pages/vendors/Vendors";
import Dashboard from "./pages/Dashboard";
import Users from "./pages/users/Users";

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/users" element={<Users/>}/>
        <Route path="/vendors" element={<Vendors/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
