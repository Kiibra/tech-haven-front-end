import { NavLink } from 'react-router-dom'
const Item = (props) => {
  return (
    <li>
			<NavLink to={`/devices/${props.device._id}`}>
        <header>
          <img src={props.device.photo} width="120" height="130" alt="device photo" />    
          <span>
            <h1>{props.device.make}</h1>
          </span>
        </header>
        <p>{props.device.model}</p>
        <p>{props.device.price}</p>
      </NavLink>
      <button onClick={() => props.removeFromCart(props.idx)}>X</button>
    </li>
  )
}

export default Item