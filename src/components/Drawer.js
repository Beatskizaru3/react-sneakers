function Drawer({onCloseCart, onRemove, items =[]}){
    return(
        <div className="drawer">
        <div className="drawer__slide">
          <h2 className="drawer__title">Корзина
          <img onClick={onCloseCart} src="/img/btn-remove.svg" alt="" className="drawer__item-btn" />
          </h2>
      
          {items.length > 0 ? 
          (<>
            <div className="drawer__cart">
            {items.map((obj)=>(
              <div className="drawer__item">
          
              <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="drawer__item-image"></div>
                <div className="drawer__item-body">
                  <p>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img onClick={() =>{onRemove(obj.id)}} src="/img/btn-remove.svg" alt="" className="drawer__item-btn" />
            </div>
            ))}
            
          </div>
          <div className="drawer__footer">
            <ul className="drawer__footer-wrapper">
              <li className="drawer__footer-item">
                <span>Итого:</span>
                <div></div>
                <b>21 498 руб.</b>
              </li>
              <li className="drawer__footer-item">
                <span>Налог 5%:</span>
                <div></div>
                <b>1074 руб.</b>
              </li>
            </ul>
            <button className="drawer__button">Оформить заказ<img src="/img/arrow-right.svg"></img></button>
          </div>
          
          </>
          ) : (<div className="drawer__cart-empty">
            <img src="/img/cart-empty.png" className="drawer__cart-empty-img" width={120} height={120}></img>
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button  onClick={onCloseCart} className="drawer__cart-green-button">
              <img width={13} height={13} src="/img/arrow-left.svg"></img> Вернуться назад
            </button>
          </div>)
          }

          
          
          
          
        </div>
      </div>
    );
}

export default Drawer;