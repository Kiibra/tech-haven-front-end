// npm modules
import { NavLink } from "react-router-dom"

// components
import AuthorInfo from "../AuthorInfo/AuthorInfo"
import Icon from "../Icon/Icon"

const OfferCard = ({ offer, user, deviceId }) => {
  return (  
    <main>
      <header>
        <AuthorInfo content={offer} />
        <p>{offer.value}</p>
        {offer.author._id === user.profile &&
          <>
            <NavLink 
              to={`/devices/${deviceId}/offers/edit`}
              state={offer}
            >
              <Icon category="Edit" />
            </NavLink>
            <button>
              <Icon category="Trash" />
            </button>
          </>
        }
      </header>
      <span>
        <p>{offer.comment}</p>
      </span>
    </main>
  )
}

export default OfferCard