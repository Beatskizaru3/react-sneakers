import { Link } from "react-router-dom";

function Header(props){
    return(
        <header className="header">
            <Link to="/" style={{ textDecoration: 'none'}}>
                <div className="header__left">
                <img width={40} height={40} src='/img/logo.svg' alt='' className="header__logo"/>
                    <div className="header__info">
                    <h3 className="header__info-title">React sneakers</h3>
                    <p>Магазин лучших кроссовок</p>
                    </div>
                </div>
            </Link>
            <ul className="header__right-list">
                <li className="header__right-item" onClick={props.onClickCart}>
                    <img width={18} height={18} src='/img/cart.svg' alt=''/>
                    <span>1205 руб.</span>
                </li>
                <li className="header__right-item" onClick={props.onClickFavorite}>
                    <Link to="/favorites">
                        <img width={18} height={16} src="/img/favorite.svg" alt=''/>
                    </Link>
                </li>
                <li className="header__right-item">
                    <img width={18} height={18} src='/img/user.svg' alt=''/>
                </li>
            </ul>
        </header>  
    );
}

export default Header;