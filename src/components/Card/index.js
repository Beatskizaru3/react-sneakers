import styles from './Card.module.scss';
import React from 'react';

console.log(styles);

function Card({ id, onFav, onPlus, title, imageUrl, price, favorited = false }) {
    
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  const onClickPlus = () => {
    onPlus({title, imageUrl, price})
    setIsAdded(!isAdded);
  };
  
  const onClickFav = () => {
    onFav({id, title, imageUrl, price})
    setIsFavorite(!isFavorite)
  }

    return(
        <div className={styles.card}>
            <div className={styles.card__like} onClick={()=>{console.log('clickFav')}}>
              <img onClick={onClickFav} src={isFavorite ? "/img/heart-liked.svg" : "/img/heart-unliked.svg"} alt="heart-unliked" />
            </div>
            <img width={133} height={112} src={imageUrl} alt="" className={styles.card__image} />
            <h5 className={styles.card__name}>{title}</h5>
            <div className={styles.card__info}>
              <div className={styles.card__inner}>
                <p>Цена:</p>
                <b>{price} руб.</b>
              </div>
              
                <img className={styles.card_plus} onClick={onClickPlus} src={isAdded ?  "/img/isAdd.svg" : "/img/notAdd.svg"} alt=""></img>
              
            </div>
        </div>);
}

export default Card;