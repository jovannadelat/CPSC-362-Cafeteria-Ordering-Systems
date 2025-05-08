import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu-Page/Menu';
import OrderHistory from './pages/OrderHistory';
import Checkout from './pages/Checkout-Page/Checkout';
import { CartProvider } from './pages/Checkout-Page/CartContext';
import ModifyMenu from './pages/modifyMenu'; // Make sure the import matches the component name
import "./App.css";

function App() {
  return (
    <CartProvider>
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/order-history" element={<OrderHistory />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/modify-menu" element={<ModifyMenu />} /> {/* Add the Modify Menu route */}
          </Routes>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
