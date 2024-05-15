import styles from './Offers.module.css'

// components
import OfferCard from "../OfferCard/OfferCard"

const Offers = (props) => {

  if (!props.offers.length) return <h4>No Offers</h4>
  
  return (
    <div className={styles.container}>
      {props.offers.map((offer) => (
        <OfferCard
          key={offer._id}
          offer={offer}
          user={props.user}
          deviceId={props.deviceId}
          handleDeleteOffer={props.handleDeleteOffer}
        />
      ))}
    </div>
  )
}

export default Offers