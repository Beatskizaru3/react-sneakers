import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  
  React.useEffect(()=>{
    
    axios.get('https://683d5d5c199a0039e9e524fa.mockapi.io/items').then(res => {
      setItems(res.data);
    })

    axios.get('https://683d5d5c199a0039e9e524fa.mockapi.io/cart').then(res => {
      setCartItems(res.data);
    })
  }, [])

  

  const onAddToCart = (obj) =>{
    axios.post('https://683d5d5c199a0039e9e524fa.mockapi.io/cart', obj);
    setCartItems((prev) => [...prev, obj]);
    
  }

  const onRemoveItem = (id) =>{
    console.log(id);
    // axios.delete(`https://683d5d5c199a0039e9e524fa.mockapi.io/cart/${id}`);
    setCartItems((prev) => prev.filter(item => item.id !== id));
  
  }

  const onChangeSearchInput = (event) =>{
    setSearchValue(event.target.value);
   
  }

  const searchByName = (items, searchValue) =>{
    const lowerCaseSearch = searchValue.toLowerCase();
    return items.filter(item => item.title.toLowerCase().includes(lowerCaseSearch));
  }


  return (
    <div className="wrapper">
      {cartOpened ? <Drawer items={cartItems} onCloseCart={()=> setCartOpened(false)} onRemove={onRemoveItem}/> : null}
      
      <Header onClickCart={() => setCartOpened(true)}  />
      
      <div className="main">
        <div className="main__top">
          <h1 className="main__top-title">{searchValue ? `Поиск по запросу "${searchValue}"` : 'Все кроссовки'}</h1>
          <div className="main__top-search">
            <img className="main__top-search-logo" src="/img/search.svg" alt="Search" />
            {searchValue && <img onClick={()=>{setSearchValue("")}} src="/img/btn-remove.svg" alt="Clear" className="main__top-search-close-btn" />}
            <input onChange={onChangeSearchInput} value={searchValue} className='main__top-search-input' placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="main__sneakers">
          {searchByName(items, searchValue).map((item, index)=>(
            <Card
              key={index}
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
              onPlus={(obj)=> onAddToCart(obj)}
              onFav={()=>{console.log('clickOnFav')}}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
