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
            <span>
              <AuthorInfo content={offer} />
              <p>{offer.comment}</p>
              <p>${offer.value}</p>
            </span> <br />
        {offer.author._id === user.profile &&
          <div className={styles.offerBtns}>
            <button><NavLink 
              to={`/devices/${deviceId}/offers/edit`}
              state={offer}>
              <Icon category="Edit" />
            </NavLink></button>
            <button onClick={() => handleDeleteOffer(deviceId, offer._id)}>
              <Icon category="Trash" />
            </button>
          </div>
        } 
      </header>
    </main>
  )
}

export default OfferCard