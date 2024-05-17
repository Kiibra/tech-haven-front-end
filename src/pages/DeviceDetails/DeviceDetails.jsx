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
    const newOffer = await deviceService.createOffer(deviceId, offerFormData)
    setDevice({ ...device, offers: [...device.offers, newOffer] })
  }
  
  const handleDeleteOffer = async (deviceId, offerId) => {
    await deviceService.deleteOffer(deviceId, offerId)
    setDevice({ ...device, offers: device.offers.filter((offer) => offer._id !== offerId) })
  }


  return (
    <main className={styles.container}>
      <article>
        <header>
          {/* <h3>{device.category.toUpperCase()}</h3> */}
          
          <div className={styles.span}>
            <AuthorInfo content={device} />

            {device.author._id === props.user.profile &&
              <div className={styles.btns}>
                <button><NavLink to={`/devices/edit`} state={device}>
                <Icon category='Edit' />
                </NavLink></button>
                <button onClick={() => props.handleDeleteDevice(deviceId)}>
                  <Icon category='Trash' />
                </button>
              </div>
            }
          </div>
        <div className={styles.item}>
        <img src={device.photo} alt="device photo" />
        <h2>{device.make}</h2>
        <h3>{device.model}</h3>
        </div>
        
        <div className={styles.details}>
        <p>Color: {device.color}</p>
        <p>Condition: {device.category}</p>
        {/* {device.damage && <p>Damage </p>} */}
        <p>Damage: {device.damage ? 'yes' : 'no'} </p>
        <p>Scratches: {device.scratches ? 'yes' : 'no'} </p>
        <p>Cracks: {device.cracks ? 'yes' : 'no'} </p>
        <p>Price: ${device.price}</p>
        </div>
        </header>
      </article>
      <div className={styles.offers}>
        <h1>Offers</h1>
        <section>
          <Offers offers={device.offers} user={props.user} deviceId={deviceId}
          handleDeleteOffer={handleDeleteOffer}
          />
          <NewOffer handleAddOffer={handleAddOffer}/>
        </section>
      </div>
    </main>
  )
}

export default DeviceDetails