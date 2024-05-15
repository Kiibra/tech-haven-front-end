// npm modules
import { NavLink } from "react-router-dom"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"
import Icon from "../Icon/Icon"

// CSS
import styles from './OfferCard.module.css'

const OfferCard = ({ offer, user, deviceId, handleDeleteOffer}) => {

  return (  
    <main className={styles.container}>
      <header>
        <AuthorInfo content={offer} />
        {offer.author._id === user.profile &&
          <>
            <NavLink 
              to={`/devices/${deviceId}/offers/edit`}
              state={offer}
            >
              <button><Icon category="Edit" /></button>
            </NavLink>
            <button onClick={() => handleDeleteOffer(deviceId, offer._id)}>
              <Icon category="Trash" />
            </button>
          </>
        } 
      </header>
      <span>
        <p>{offer.comment}</p>
        <p>${offer.value}</p>
      </span>
    </main>
  )
}

export default OfferCard