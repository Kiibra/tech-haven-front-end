import styles from './CartList.module.css'

import Device from "../Device/Device"

const CartList = (props) => {
  return (
    <>  
    <h1>My Cart</h1>
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
    </>
  )
}

export default CartList
