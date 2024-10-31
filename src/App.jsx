import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Router from './router/Router';
import { ProductProvider } from './context/Productcontext';

function App() {
  return <ProductProvider>
    <Router />
  </ProductProvider>
}

export default App
