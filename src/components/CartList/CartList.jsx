import styles from './CartList.module.css'

import Device from "../Device/Device"

const CartList = (props) => {
  return (
    <div className={styles.cart}>  
      <h1>Cart</h1>
      <div className={styles.container}>
        
        {!props.cartData.length &&
          <h4>There are no devices yet.</h4>
        }
        {props.cartData.map((device, idx) => (
          <Device
            key={idx}
            idx={idx}
            device={device}
            removeFromCart={props.removeFromCart}
          />
        ))}
      </div>
    </div>
  )
}

export default CartList
