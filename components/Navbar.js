import styles from '../styles/Navbar.module.css'
import Image from 'next/image'
import telephone from '../public/images/telephone.png'
import garden from '../public/images/garden.svg'
import cart from '../public/images/cart.png'

const Navbar = () => {
    return (
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.callButton}>
            <Image src={telephone} alt="" width="32" height="32" />
          </div>
          <div className={styles.texts}>
            <div className={styles.text}>ORDER NOW!</div>
            <div className={styles.text}>044 351 515</div>
          </div>
          </div>
          <div className={styles.item}>
              <ul className={styles.list}>
                  <li className={styles.listItem}>Home</li>
                  <li className={styles.listItem}>Menu</li>
                  <li className={styles.listItem}>About Us</li>
                  <li className={styles.listItem}>Contact Us</li>
              </ul>
          </div>
          <div className={styles.item}>
              <div className={styles.cart}>
              <Image src={cart} alt="" width="30" height="30" />
              <div className={styles.counter}>2</div>
              </div>
          </div>
      </div>
    );
}

export default Navbar;
