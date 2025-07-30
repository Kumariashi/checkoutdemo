import logo from './logo.svg';
import './App.css';
import { Routes, Route } from "react-router";
import PaymentDrawer from './pages/PaymentDrawer/paymentDrawer';
// import OffersPage from './pages/paymentOffers/offersPage';
import CheckoutPage from './pages/checkoutPage/checkout';


import Offers from './pages/OffersPage/Offers';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PaymentDrawer/>} />
      </Routes>
    </div>
  );
}

export default App;
