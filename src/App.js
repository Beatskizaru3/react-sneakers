
import Header from './components/Header';
import Drawer from './components/Drawer';
import React from 'react';
import axios from 'axios';
import { Route, Routes } from "react-router-dom"
import Home from './pages/Home';
import Favorites from './pages/Favorites';



function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  
  React.useEffect(()=>{
    async function fetchData(){
      const cartRepsonse = await axios.get('https://683d5d5c199a0039e9e524fa.mockapi.io/cart')
      const favoritesResponse = axios.get('https://683ffb395b39a8039a565940.mockapi.io/Favorites')
      const itemsResponse = await axios.get('https://683d5d5c199a0039e9e524fa.mockapi.io/items')
   
      setCartItems(cartRepsonse.data);
      setFavorites(favoritesResponse.data);
      setItems(itemsResponse.data);
  }
  fetchData();
  }, [])

  

  const onAddToCart = (obj) =>{
      if(cartItems.find((cartObj)=> Number(cartObj.id) === Number(obj.id))){
        axios.delete(`https://683d5d5c199a0039e9e524fa.mockapi.io/cart/${obj.id}`);
        setCartItems((prev) => prev.filter((cartObj) => Number(cartObj.id) !== Number(obj.id)));
      } 
      else{
        axios.post('https://683d5d5c199a0039e9e524fa.mockapi.io/cart', obj);
        setCartItems((prev) => [...prev, obj]);
      }
}

  const onAddToFav = async (obj) =>{
    try {
      if(favorites.find((favObj)=> favObj.id === obj.id)){
        axios.delete(`https://683ffb395b39a8039a565940.mockapi.io/Favorites/${obj.id}`);
      }
      else{
        const { data } = await axios.post('https://683ffb395b39a8039a565940.mockapi.io/Favorites', obj);
        setFavorites((prev) => [...prev, data]);
      }
    } catch (error) {
      alert('Не удалось добавить в фавориты');
    }
    
    
  }

  const onRemoveItem = (id) =>{
    console.log(id);
    axios.delete(`https://683d5d5c199a0039e9e524fa.mockapi.io/cart/${id}`);
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
      
      <Header onClickCart={() => setCartOpened(true)}/>

      <Routes>
          <Route path="/" element={
            <Home items={items} 
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            onChangeSearchInput={onChangeSearchInput}
            onAddToFav={onAddToFav}
            onAddToCart={onAddToCart}
            cartItems={cartItems}
            searchByName={searchByName}/>
          }/>
          <Route path="/favorites" element={
            <Favorites items={favorites} onAddToFav={onAddToFav}/>
          }/>
      </Routes>
      
       
    </div>
  );
}

export default App;
