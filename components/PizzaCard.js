import styles from '../styles/PizzaCard.module.css'
import Image from 'next/image'
import napoli from '../public/images/napoli.png'

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src={napoli} alt="" width="500" height="500" />
      <h1 className={styles.title}>PIZZA NAPOLI</h1>
      <span className={styles.price}>$12.90</span>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
  );
};

export default PizzaCard;
