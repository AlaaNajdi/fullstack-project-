import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Router from './router/Router';
import { ProductProvider } from './context/Productcontext';
import UserProvider from './context/Usercontext';
import { CartProvider } from './context/CartContext';

function App() {
  return <UserProvider>
  <ProductProvider>
    <CartProvider>
    <Router />
    </CartProvider>
  </ProductProvider>
  </UserProvider>
}

export default App
