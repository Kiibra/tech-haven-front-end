// npm modules
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

//CSS
import styles from './DeviceDetails.module.css'

// services
import * as deviceService from '../../services/deviceService'

const DeviceDetails = () => {
  const [device, setDevice] = useState(null)
  const { deviceId } = useParams()

  useEffect(() => {
    const fetchDevice = async () => {
      const deviceData = await deviceService.show(deviceId)
      setDevice(deviceData)
    }
    fetchDevice()
  }, [deviceId])

  if (!device) return <p>Devices are Loading</p>

  return (
    <main className={styles.container}>
      <article>
        <header>
          {/* <h3>{device.category.toUpperCase()}</h3> */}
          <h1>{device.make}</h1>
        </header>
        <h3>{device.model}</h3>
        <p>{device.photo}</p>
        <p>{device.color}</p>
        <p>{device.price}</p>
        <p>{device.category}</p>
      </article>
      <section>
        <h1>Offers</h1>
      </section>
    </main>
  )
}

export default DeviceDetails