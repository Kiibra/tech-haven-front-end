import { NavLink } from 'react-router-dom'
import styles from './DeviceCard.module.css'

const DeviceCard = ({ device, addToCart }) => {
  
  return (
    <main className={styles.container}>
      <NavLink to={`/devices/${device._id}`}>
        <header>
          <img src={device.photo} width="120" height="130" alt="device photo" />    
          <span>
            <h1>{device.make}</h1>
          </span>
        </header>
        <p>{device.model} </p> 
        <p>Price: ${device.price}</p>

      </NavLink>
      <button onClick={() => addToCart(device)}>+</button>
    </main>
  )
}

export default DeviceCard
