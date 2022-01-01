import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'
import napoli from '../public/images/napoli.png'

const PizzaCard = ({title, imgSrc, desc, price, id}) => {
  return (
    <div className={styles.container}>
      <Image src={imgSrc} alt="" width="500" height="500" />
      <h1 className={styles.title}>{title}</h1>
      <span className={styles.price}>{price}</span>
      <p className={styles.desc}>
        {desc}
      </p>
    </div>
  );
};

export default PizzaCard;
