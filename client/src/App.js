import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import PageNotFound from './pages/PageNotFound.js';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import About from './pages/About';
import Register from './pages/auth/Register.js';
import Login from './pages/auth/Login.js';
import Dashboard from './user/Dashboard.js';
import PrivateRoute from './components/Layout/routes/Private.js';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path="/dashboard" element={<PrivateRoute/>}>
      <Route path="" element={<Dashboard/>}/>
      </Route>
      
      <Route path="/register" element={<Register/>}/>
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
