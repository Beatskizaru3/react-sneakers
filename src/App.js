

function App() {
  return (
    <div className="wrapper">
      <div className="drawer">
        <div className="drawer-slide"></div>
      </div>
      

      <header className="header">
        <div className="header__left">
          <img width={40} height={40} src='/img/logo.svg' alt='' className="header__logo"/>
          <div className="header__info">
            <h3 className="header__info-title">React sneakers</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
        <ul className="header__right-list">
          <li className="header__right-item">
          <img width={18} height={18} src='/img/cart.svg' alt=''/>
            <span>1205 руб.</span>
          </li>
          <li className="header__right-item">
          <img width={18} height={18} src='/img/user.svg' alt=''/>
          </li>
        </ul>
      </header>  
      <div className="main">
        <div className="main__top">
          <h1 className="main__top-title">Все кроссовки</h1>
          <div className="main__top-search">
            <img className="main__top-search-logo" src="/img/search.svg" alt="Search" />
            <input className='main__top-search-input' placeholder="Поиск..."></input>
          </div>
        </div>
        <div className="main__sneakers">
          <div className="card">
            <div className="card__like">
              <img src="/img/heart-unliked.svg" alt="heart-unliked" />
            </div>
            <img width={133} height={112} src="/img/sneakers/1.png" alt="" className="card__image" />
            <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__info">
              <div className="card__inner">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} src="/img/add.svg" alt=""></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/2.png" alt="" className="card__image" />
            <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__info">
              <div className="card__inner">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} src="/img/add.svg" alt=""></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/3.png" alt="" className="card__image" />
            <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__info">
              <div className="card__inner">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} src="/img/add.svg" alt=""></img>
              </button>
            </div>
          </div>
          <div className="card">
            <img width={133} height={112} src="/img/sneakers/4.png" alt="" className="card__image" />
            <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
            <div className="card__info">
              <div className="card__inner">
                <p>Цена:</p>
                <b>12 999 руб.</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} src="/img/add.svg" alt=""></img>
              </button>
            </div>
          </div>
        </div>
        {/* <div className="card">
          <img width={133} height={112} src="/img/sneakers/5.png" alt="" className="card__image" />
          <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card__info">
            <div className="card__inner">
              <p>Цена:</p>
              <b>12 999 руб.</b>
            </div>
            <button className="card__button">
              <img width={11} height={11} src="/img/add.svg" alt=""></img>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/6.png" alt="" className="card__image" />
          <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card__info">
            <div className="card__inner">
              <p>Цена:</p>
              <b>12 999 руб.</b>
            </div>
            <button className="card__button">
              <img width={11} height={11} src="/img/add.svg" alt=""></img>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/7.png" alt="" className="card__image" />
          <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card__info">
            <div className="card__inner">
              <p>Цена:</p>
              <b>12 999 руб.</b>
            </div>
            <button className="card__button">
              <img width={11} height={11} src="/img/add.svg" alt=""></img>
            </button>
          </div>
        </div>
        <div className="card">
          <img width={133} height={112} src="/img/sneakers/8.png" alt="" className="card__image" />
          <h5 className="card__name">Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="card__info">
            <div className="card__inner">
              <p>Цена:</p>
              <b>12 999 руб.</b>
            </div>
            <button className="card__button">
              <img width={11} height={11} src="/img/add.svg" alt=""></img>
            </button>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default App;
