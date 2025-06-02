function Header(props){
    return(
        <header className="header">
            <div className="header__left">
            <img width={40} height={40} src='/img/logo.svg' alt='' className="header__logo"/>
            <div className="header__info">
                <h3 className="header__info-title">React sneakers</h3>
                <p>Магазин лучших кроссовок</p>
            </div>
            </div>
            <ul className="header__right-list" onClick={props.onClickCart}>
                <li className="header__right-item">
                    <img width={18} height={18} src='/img/cart.svg' alt=''/>
                    <span>1205 руб.</span>
                </li>
                    <li className="header__right-item">
                    <img width={18} height={18} src='/img/user.svg' alt=''/>
                </li>
            </ul>
        </header>  
    );
}

export default Header;