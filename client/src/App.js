import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import PageNotFound from './pages/PageNotFound.js';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import About from './pages/About';
import Register from './pages/Auth/Register.js';
import Login from './pages/Auth/Login.js';
import Dashboard from './user/Dashboard.js';
import PrivateRoute from './components/Layout/routes/Private.js';
import ForgotPassword from './pages/Auth/ForgotPassword.js';
import AdminRoute from './components/Layout/routes/AdminRoute.js';
import AdminDashboard from './pages/Admin/AdminDashboard.js';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path="/dashboard" element={<PrivateRoute/>}>
      <Route path="user" element={<Dashboard/>}/>
      </Route>
      <Route path="/dashboard" element={<AdminRoute/>}>
      <Route path="admin" element={<AdminDashboard/>}/>
      </Route>
      <Route path="/register" element={<Register/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>
      <Route path="/login" element={<Login/>}/>      
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<PageNotFound/>} />
      <Route path='/policy' element={<Policy/>} />
    </Routes>

    </>
  );
}

export default App;
