import styles from '../styles/PizzaList.module.css'
import PizzaCard from './PizzaCard'

import {data} from '../menulist'

const PizzaList = () => {

  const createCard = ({title, imgSrc, desc, price, id}) => {
    return <PizzaCard 
      title={title}
      imgSrc={imgSrc}
      desc={desc}
      price={price}
      id={id}
    />
  }

    return (
      <div className={styles.container}>
        <h1 className={styles.title}>THE BEST PIZZA IN TOWN</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
          in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit.
        </p>
        <div className={styles.wrapper}>
           {data.map(createCard)}
           
        </div>
      </div>
    );
  };

  export default PizzaList;