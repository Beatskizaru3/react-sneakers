function Drawer(){
    return(
        <div style={{display: 'none'}}className="drawer">
        <div className="drawer__slide">
          <h2 className="drawer__title">Корзина
          <img src="/img/btn-remove.svg" alt="" className="drawer__item-btn" />
          </h2>
          
          <div className="drawer__cart">
            <div className="drawer__item">
          
              <div style={{backgroundImage: 'url(/img/sneakers/1.png)'}} className="drawer__item-image"></div>
                <div className="drawer__item-body">
                  <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <b>12 999 руб.</b>
                </div>
                <img src="/img/btn-remove.svg" alt="" className="drawer__item-btn" />
            </div>
            <div className="drawer__item">
              
              <div style={{backgroundImage: 'url(/img/sneakers/1.png)'}} className="drawer__item-image"></div>
                <div className="drawer__item-body">
                  <p>Мужские Кроссовки Nike Blazer Mid Suede</p>
                  <b>12 999 руб.</b>
                </div>
                <img src="/img/btn-remove.svg" alt="" className="drawer__item-btn" />
            </div>
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