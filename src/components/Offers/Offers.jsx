// components
import OfferCard from "../OfferCard/OfferCard"

const Offers = (props) => {

  if (!props.offers.length) return <h4>No Offers</h4>
  
  return (
    <>
    {props.offers.map((offer) => (
      <OfferCard
        key={offer._id}
        offer={offer}
        user={props.user}
        deviceId={props.deviceId}
      />
    ))}
  </>
  )
}

export default Offers