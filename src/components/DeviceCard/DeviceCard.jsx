// npm modules
import { NavLink } from 'react-router-dom'

// css
import styles from './DeviceCard.module.css'

const DeviceCard = ({ device }) => {
  return (
    <NavLink to={`/devices/${device._id}`} >
      <main className={styles.container} >
        <header>
          <span>
            <h1>{device.make}</h1>
          </span>
        </header>
        <p>{device.model}</p>
      </main>
    </NavLink>
  )
}

export default DeviceCard