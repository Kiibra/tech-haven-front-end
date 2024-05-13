// npm modules
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

//components
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'

//CSS
import styles from './DeviceDetails.module.css'

// services
import * as deviceService from '../../services/deviceService'
import Icon from '../../components/Icon/Icon'

const DeviceDetails = (props) => {
  const [device, setDevice] = useState(null)
  const { deviceId } = useParams()

  useEffect(() => {
    const fetchDevice = async () => {
      const deviceData = await deviceService.show(deviceId)
      setDevice(deviceData)
    }
    fetchDevice()
  }, [deviceId])

  if (!device) return <p>Devices Loading</p>

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>{device.category.toUpperCase()}</h3>
          
          <span>
            <AuthorInfo content={device} />

            {device.author._id === props.user.profile &&
              <>
                <NavLink to={`/devices/edit`} state={device}>
                  <Icon category='Edit' />
                </NavLink>
                <button onClick={() => props.handleDeleteDevice(deviceId)}>
                  <Icon category='Trash' />
                </button>
              </>
            }
          </span>
        </header>
        <h1>{device.make}</h1>
        <h3>{device.model}</h3>
        <img src="{device.photo}" alt="device photo" />
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