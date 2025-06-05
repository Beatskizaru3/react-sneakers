import Card from '../components/Card';

function Favorites({ items, onAddToFav }){
    return (
        <div className="main">
        <div className="main__top">
          <h1 className="main__top-title">Мои закладки</h1>
        </div>
        <div className="main__sneakers">
         {items.map((item, index)=>{
            return(
            <Card
            key={index}
            favorited={true}
            onFav={onAddToFav}
            {...item}
          />)
         })}
        </div>
      </div>
    );
}

export default Favorites;