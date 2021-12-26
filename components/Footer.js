import Image from "next/image";
import styles from "../styles/Footer.module.css";

import bg from '../public/images/bg.png'


const Footer = () => {
    return (
        <div className={styles.container}>
        <div className={styles.item}>
        <Image src={bg} alt='' layout="fill" objectFit="cover" />
        </div>
        <div className={styles.item}>
        <div className={styles.card}>
        <h2 className={styles.motto}>
        WE DID.THE GARDEN PIZZA, WELL BAKED SLICE OF PIZZA.
        </h2>
        </div>
        <div className={styles.card}>
        <h1 className={styles.title}>FIND OUR RESTAURANT</h1>
          <p className={styles.text}>
          Dervish Cara 35 
            <br /> Tetovë, Republic of Macedonia
            <br /> 070 734 444
            </p>
    </div>
        <div className={styles.card}>
        <h1 className={styles.title}>WORKING HOURS</h1>
          <p className={styles.text}>
            MONDAY - FRIDAY
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SATURDAY 
            <br /> 10:00 - 24:00
          </p>
        </div>
        </div>
        </div>
    )
}

export default Footer
