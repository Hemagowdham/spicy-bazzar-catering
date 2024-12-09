import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login';
import SignUp from './Pages/SignUp';
import Dashboard from './Pages/Dashboard';
import Cart from './Pages/Cart';
import Reserve from './Pages/Reserve';
import Contact from './Pages/Contact';

function App() {

  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/foodcart" element={<Cart />} />
            <Route path="/reserveandorder" element={<Reserve />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/logout"  />
          </Routes>
        </Router>
    </div>
  );
}

export default App;
