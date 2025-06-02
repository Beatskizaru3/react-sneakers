function Drawer({onCloseCart, items =[]}){
    return(
        <div className="drawer">
        <div className="drawer__slide">
          <h2 className="drawer__title">Корзина
          <img onClick={onCloseCart} src="/img/btn-remove.svg" alt="" className="drawer__item-btn" />
          </h2>
          
          <div className="drawer__cart">
            {items.map((obj)=>(
              <div className="drawer__item">
          
              <div style={{backgroundImage: `url(${obj.imageUrl})`}} className="drawer__item-image"></div>
                <div className="drawer__item-body">
                  <p>{obj.title}</p>
                  <b>{obj.price} руб.</b>
                </div>
                <img src="/img/btn-remove.svg" alt="" className="drawer__item-btn" />
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
          
        </div>
      </div>
    );
}

export default Drawer;