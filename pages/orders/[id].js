import Image from 'next/image'
import styles from '../../styles/Order.module.css'

import paid from '../../public/images/paid.png'
import checked from '../../public/images/checked.png'
import bike from '../../public/images/bike.png'
import bake from '../../public/images/bake.png'
import delivered from '../../public/images/delivered.png'


const Order = () => {
    const status = 0;

    const statusClass = (index) => {
        if (index - status < 1) return styles.done;
        if (index - status === 1) return styles.inProgress;
        if (index - status > 1) return styles.undone;
      };


    return (
      <div className={styles.container}>
        <div className={styles.left}>
            <div className={styles.row}>
            <table className={styles.table}>
            <tr className={styles.tr}>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Address</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              
              <td>
                <span className={styles.id}>12433</span>
              </td>
              <td>
                <span className={styles.name}>
                  Arbnor Noli
                </span>
              </td>
              <td>
                <span className={styles.address}>Jane Sandanski 42</span>
              </td>
              
              <td>
                <span className={styles.total}>$36</span>
              </td>
            </tr>
            
          </table>
            </div>
            <div className={styles.row}>
                <div className={statusClass(0)}>
                    <Image src={paid} alt='' width={30} height={30} />
                    <span>Payment</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src={checked} alt='' width={20} height={20} />
                    </div>
                </div>
                <div className={statusClass(1)}>
                    <Image src={bake} alt='' width={30} height={30} />
                    <span>Preparing</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src={checked} alt='' width={20} height={20} />
                    </div>
                </div>
                <div className={statusClass(2)}>
                    <Image src={bike} alt='' width={30} height={30} />
                    <span>On the way</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src={checked} alt='' width={20} height={20} />
                    </div>
                </div>
                <div className={statusClass(3)}>
                    <Image src={delivered} alt='' width={30} height={30} />
                    <span>Delivered</span>
                    <div className={styles.checkedIcon}>
                    <Image className={styles.checkedIcon} src={checked} alt='' width={20} height={20} />
                    </div>
                </div>
            </div>
        </div>

        <div className={styles.right}>
          <div className={styles.wrapper}>
            <h2 className={styles.title}>CART TOTAL</h2>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Subtotal:</b>$79.60
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Discount:</b>$0.00
            </div>
            <div className={styles.totalText}>
              <b className={styles.totalTextTitle}>Total:</b>$79.60
            </div>
            <button disabled className={styles.button}>PAID</button>
          </div>
        </div>
      </div>
    );
}

export default Order
