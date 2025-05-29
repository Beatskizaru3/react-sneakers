import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arrSneakers = [
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 12999, imageUrl: '/img/sneakers/1.png'},
  { title: 'Мужские Кроссовки Nike Air Max 270', price: 8999, imageUrl: '/img/sneakers/2.png'},
  { title: 'Мужские Кроссовки Nike Blazer Mid Suede', price: 22999, imageUrl: '/img/sneakers/3.png'},
  { title: 'Кроссовки Puma X Aka Boku Future Rider', price: 1999, imageUrl: '/img/sneakers/4.png'},
]

function App() {
  return (
    <div className="wrapper">
      <Drawer/>
      
      <Header/>
      
      <div className="main">
        <div className="main__top">
          <h1 className="main__top-title">Все кроссовки</h1>
          <div className="main__top-search">
            <img className="main__top-search-logo" src="/img/search.svg" alt="Search" />
            <input className='main__top-search-input' placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="main__sneakers">
          {arrSneakers.map(item=>(
            <Card
              title={item.title}
              price={item.price}
              imageUrl={item.imageUrl}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
