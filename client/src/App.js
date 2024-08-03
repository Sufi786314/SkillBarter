import {Routes,Route} from 'react-router-dom'
import HomePage from "./pages/HomePage"
import PageNotFound from './pages/PageNotFound.js';
import Policy from './pages/Policy';
import Contact from './pages/Contact';
import About from './pages/About';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='*' element={<PageNotFound/>} />
      <Route path='/policy' element={<Policy/>} />
    </Routes>

    </>
  );
}

export default App;
