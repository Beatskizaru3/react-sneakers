import Card from '../components/Card';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFav,
  onAddToCart,
  searchByName
}){
    return (
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
              onPlus={(obj)=> onAddToCart(obj)}
              onFav={(obj)=> onAddToFav(obj)}
              {...item}
            />
          ))}
        </div>
      </div>
    );
}

export default Home;