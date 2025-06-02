import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [cartOpened, setCartOpened] = React.useState(false);
  
  React.useEffect(()=>{
    fetch('https://683d5d5c199a0039e9e524fa.mockapi.io/items').then(res=>{
      return res.json();
    }).then(json =>{
      setItems(json);
    });
  }, [])

  

  const onAddToCart = (obj) =>{
    setCartItems([...cartItems, obj]);
    
  }

  console.log(cartItems);

  return (
    <div className="wrapper">
      {cartOpened ? <Drawer items={cartItems} onCloseCart={()=> setCartOpened(false)}/> : null}
      
      <Header onClickCart={() => setCartOpened(true)}  />
      
      <div className="main">
        <div className="main__top">
          <h1 className="main__top-title">Все кроссовки</h1>
          <div className="main__top-search">
            <img className="main__top-search-logo" src="/img/search.svg" alt="Search" />
            <input className='main__top-search-input' placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="main__sneakers">
          {items.map(item=>(
            <Card
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
