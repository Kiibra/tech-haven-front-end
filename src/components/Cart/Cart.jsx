import Item from "../Item/Item"

const Cart = (props) => {
  return (
    <ul className="device-stack">
      {!props.stack.length &&
        <h4>There are no devices yet.</h4>
      }
      {props.stack.map((device, idx) => (
        <Item
          key={idx}
          idx={idx}
          device={device}
          removeFromCart={props.removeFromCart}
        />
      ))}
    </ul>
  )
}

export default Cart
