
//CSS
import styles from './DeviceList.module.css'

import DeviceCard from '../../components/DeviceCard/DeviceCard'

const DeviceList = (props) => {
  return (
    <>
      <main className={styles.container}>
        {props.devices.map(device => (
          <DeviceCard
            key={device._id} 
            device={device}
            addToCart={props.addToCart} 
            />
        ))}
      </main>
    </>
  )
}

export default DeviceList
