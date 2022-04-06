import logo from './logo.svg';
import './App.css';
import Main from './Main'
import { ProductContextProvider } from './context/product-page-context';

function App() {
  return (
    <ProductContextProvider>
      <Main/>
      
      </ProductContextProvider>

  );
}

export default App;
