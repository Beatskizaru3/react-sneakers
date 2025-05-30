import styles from './Card.module.scss';

console.log(styles);

function Card(props) {
    
    return(
        <div className={styles.card}>
            <div className={styles.card__like} onClick={props.onClickFav}>
              <img src="/img/heart-unliked.svg" alt="heart-unliked" />
            </div>
            <img width={133} height={112} src={props.imageUrl} alt="" className={styles.card__image} />
            <h5 className={styles.card__name}>{props.title}</h5>
            <div className={styles.card__info}>
              <div className={styles.card__inner}>
                <p>Цена:</p>
                <b>{props.price} руб.</b>
              </div>
              <button className={styles.card__button} onClick={props.onClickPlus}>
                <img width={11} height={11} src="/img/add.svg" alt=""></img>
              </button>
            </div>
        </div>);
}

export default Card;