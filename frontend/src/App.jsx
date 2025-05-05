import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';
import Menu from './pages/Menu-Page/Menu';
import OrderHistory from './pages/OrderHistory';
import Checkout from './pages/Checkout-Page/Checkout';
import { CartProvider } from './pages/Checkout-Page/CartContext';
import './App.css';

function App() {
  return (
    <Router>
      <CartProvider>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/order-history" element={<OrderHistory />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App;
