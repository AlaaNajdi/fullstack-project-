import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Router from './router/Router';
import { ProductProvider } from './context/Productcontext';
import UserProvider from './context/Usercontext';

function App() {
  return <UserProvider>
  <ProductProvider>
    <Router />
  </ProductProvider>
  </UserProvider>
}

export default App
