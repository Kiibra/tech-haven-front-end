//assets
import edit from '../../assets/Icons/edit.svg'
import trash from '../../assets/Icons/delete.svg'
import refurbished from '../../assets/Icons/refurbished.svg'
import newDevice from '../../assets/Icons/newDevice.png'
import used from '../../assets/Icons/used.svg'


const Icon = ({ category }) => {
  const icons = {
    Edit: edit,
    Trash: trash,
    Refurbished: refurbished,
    New: newDevice,
    Used: used,
  }
  
  return (
    <img className="icon" src={icons[category]} alt={`A ${category} icon.`} />
  )
}

export default Icon