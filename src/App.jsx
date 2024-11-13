import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Router from './router/Router';
import { ProductProvider } from './context/Productcontext';
import UserProvider from './context/Usercontext';
import { CartProvider } from './context/CartContext';

function App() {
  return <CartProvider>
    <UserProvider>
      <ProductProvider>
        <Router />
      </ProductProvider>
    </UserProvider>
  </CartProvider>
}

export default App
