function Card(props) {
    return(
        <div className="card">
            <div className="card__like">
              <img src="/img/heart-unliked.svg" alt="heart-unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="" className="card__image" />
            <h5 className="card__name">{props.title}</h5>
            <div className="card__info">
              <div className="card__inner">
                <p>Цена:</p>
                <b>{props.price} руб.</b>
              </div>
              <button className="card__button">
                <img width={11} height={11} src="/img/add.svg" alt=""></img>
              </button>
            </div>
        </div>);
}

export default Card;