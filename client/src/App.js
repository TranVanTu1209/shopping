import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductList from './components/ProductList';
import ProductCart from './components/ProductCart';
import data from './data.json';
import Filter from './components/Filter';

const App = () => {
  const [products, setProducts] = useState(data.products);
  const [size, setSize] = useState('');
  const [sort, setSort] = useState('');
  const [cart, setCart] = useState(localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : []);

  const onSortHandler = (e) => {
    const updatedData = [...data.products];
    setSort(e.target.value);
    switch (e.target.value)
    {
      case 'lowest': {
        updatedData.sort((a, b) => a.price - b.price);
        setProducts(updatedData);
        break;
      }
      case 'highest': {
        updatedData.sort((a, b) => b.price - a.price);
        setProducts(updatedData);
        break;
      }
      case 'lastest': {
        setProducts(data.products); break;
      }
      default: {
        setProducts(data.products); break;
      }
    }
  }

  const onSizeHandler = (e) => {
    if (e.target.value === 'ALL')
    {
      setProducts(data.products);
    } else
    {
      const updatedData = [...data.products];
      setProducts(updatedData.filter(p => p.availableSizes.includes(e.target.value)));
    }
    setSize(e.target.value);
  }

  const onAddToCart = product => {
    const item = cart.find(c => c._id === product._id);
    if (item)
    {
      alert('Product has already added to cart');
    } else
    {
      setCart([...cart, product]);
      localStorage.setItem('cart', JSON.stringify([...cart, product]));
    }
  }

  const onRemoveFromCart = id => {
    const item = cart.find(c => c._id === id);
    if (item)
    {
      setCart(cart.filter(c => c._id !== id));
      localStorage.setItem('cart', JSON.stringify(cart.filter(c => c._id !== id)));
    }
    else
    {
      alert('Can not remove item');
    }
  }

  const onClearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  }

  return (
    <div className="app">
      <Header />
      <Filter count={products?.length} size={size} sort={sort}
        sizeHandler={onSizeHandler} sortHandler={onSortHandler} />
      <section className="app__body">
        <ProductList products={products} addToCart={onAddToCart} />
        <ProductCart cart={cart} removeFromCart={onRemoveFromCart} clearCart={onClearCart} />
      </section>
    </div>
  );
}

export default App;
