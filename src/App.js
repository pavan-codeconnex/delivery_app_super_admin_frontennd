import logo from './logo.svg';
import './App.css';
import Sidebar from './Components/Sidebar';
import Dashboard from './Pages/Dashboard';
import Store from './Pages/Store';
import Order from './Pages/Order';
import ViewOrder from './Pages/ViewOrder';
import Promotions from './Pages/Promotions';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import ForgotPassword from './Pages/ForgotPassword';
import AllUsers from './Pages/AllUsers';
import StoreOwners from './Pages/StoreOwners';
import DeliveryGuy from './Pages/DeliveryGuy';
import Staff from './Pages/Staff';

// importing react router dom
import { BrowserRouter,
  Routes,
  Route } from "react-router-dom";
function App() {
return (

  

<BrowserRouter>
<Routes>
  <Route path='/' element={<Login/>}></Route>
  <Route path='/Dashboard' element={<Dashboard/>}></Route>
  <Route path='/Store' element={<Store />}></Route>
  <Route path='/Order' element={<Order />}></Route>
  <Route path='/ViewOrder' element={<ViewOrder />}></Route>
  <Route path='/Promotions' element={<Promotions />}></Route>
  <Route path='/SignUp' element={<SignUp/>}></Route>
  <Route path='/ForgotPassword' element={<ForgotPassword/>}></Route>
  <Route path='/AllUsers' element={<AllUsers/>}></Route>
  <Route path='/StoreOwners' element={<StoreOwners/>}></Route>
  <Route path='/DeliveryGuy' element={<DeliveryGuy/>}></Route>
  <Route path='/Staff' element={<Staff/>}></Route>
</Routes>
</BrowserRouter>
  );
}

export default App;
