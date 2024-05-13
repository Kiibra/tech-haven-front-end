//components 
import DeviceCard from '../../components/DeviceCard/DeviceCard' 
//CSS
import styles from './DeviceList.module.css'

const DeviceList = (props) => {
  return (
    <>
      <h2>Device List</h2>
      <main className={styles.container}>
        {props.devices.map(device => (
          <DeviceCard key={device._id} device={device}/>
        ))}
      </main>
    </>
    
  )
}

export default DeviceList