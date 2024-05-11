//components 
import DeviceCard from '../../components/DeviceCard/DeviceCard' 
//CSS
import styles from './DeviceList.module.css'

const DeviceList = (props) => {
  return (  
    <main className={styles.container}>
      <p>Device List</p>
      {props.devices.map(device => (
        <DeviceCard key={device._id} device={device}/>
      ))}
    </main>
  )
}

export default DeviceList