
//CSS
import styles from './DeviceList.module.css'

import DeviceCard from '../../components/DeviceCard/DeviceCard'

const DeviceList = (props) => {
  return (
    <>
      <h2>Device List</h2>
      <main className={styles.container}>
        {props.devices.map(device => (
          <DeviceCard
            key={device._id} 
            device={device}
            addToCart={props.addToCart} />
        ))}
      </main>
    </>
  )
}

export default DeviceList
