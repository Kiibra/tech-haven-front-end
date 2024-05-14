// npm modules
import { useState, useEffect } from 'react'
import { useParams, NavLink } from 'react-router-dom'

//components
import AuthorInfo from '../../components/AuthorInfo/AuthorInfo'
import NewOffer from '../../components/NewOffer/NewOffer'
import Offers from '../../components/Offers/Offers'

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


  const handleAddOffer = async (offerFormData) => {
    // const newOffer <-- We'll need a service function here
    const newOffer = deviceService.createOffer(deviceId, offerFormData)
    ///  in that blog, set the comments to alll the comments in that specific blog plus the new comment
    setDevice({ ...device, offers: [...device.offers, newOffer] })
  }

  return (
    <main className={styles.container}>
      <article>
        <header>
          <h3>{device.category.toUpperCase()}</h3>
          
          <span>
            <AuthorInfo content={device} />

            {device.author._id === props.user.profile &&
              <>
                <NavLink to={`/devices/${deviceId}/edit`} state={device}>
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
        <NewOffer handleAddOffer={handleAddOffer}/>
        <Offers offers={device.offers} user={props.user} deviceId={deviceId}/>
      </section>
    </main>
  )
}

export default DeviceDetails