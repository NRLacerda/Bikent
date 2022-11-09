import React from 'react';
import LoginScreen from './components/loginScreen';
import NavBar from './components/navbar';
import ProductList from './components/productList';

function App() {
  return (
    <div>
      <NavBar/>
      <ProductList />      
    </div>
  );
}

export default App;
