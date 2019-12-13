import React from 'react';
import './App.css';
import Cart from './components/Cart/index';

const images = [
  'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcT6L58hX8ybvBlc7oClGrykdYvGnq3dG2spz7o99e3bPiAYxLSnfdnHkNw0zwhEau1pfZuaDdUCvxLwZ-tQhE4FDYuK872ByGX4EjH6zogu&usqp=CAc',
  'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQWlUPch7IOAdNSgMJLEDityzjZfmOt4p5gJEjnKdMtJYxYDMvERLl0UCAKeRLXPoVpwd2TAgNkZLbS4-qaf2MrYEzfJF4L9j0g9PLPemiWHZJZyDpXCCWb&usqp=CAc',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbabP1rhdQKO4CQLVoFyWBDuwiGLvBIwH-I4gVyMydIO2HQpXkCA&s'
]

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Cart images={images} iconType='shopping-cart' />
      </header>
    </div>
  );
}

export default App;
