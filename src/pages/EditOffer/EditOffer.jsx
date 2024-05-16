// npm modules
import { useState } from 'react'
import { useLocation, useParams, useNavigate } from 'react-router-dom'

// css
import styles from './EditOffer.module.css'

// services
import * as deviceService from '../../services/deviceService'

const EditOffer = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const { deviceId } = useParams()
  const [formData, setFormData] = useState(state)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  const handleInputChange = (evt) => {
    setFormData({...formData, [evt.target.name]:  evt.target.value.replace(/\D/g, "")})
  }

  const handleSubmit = async (evt) => {
    evt.preventDefault()
    deviceService.updateOffer(deviceId, formData)
    navigate(`/devices/${deviceId}`)
  }

  return (
    <main className={styles.container}>
      <form onSubmit={handleSubmit}>
      <h2>Edit Offer</h2>
      <label htmlFor="value-input">Value:</label>
      <input 
        name="value" 
        id='value-input'
        value={formData.value}
        onChange={handleInputChange}
      />
      <label htmlFor="comment-text">Comment:</label>
      <textarea 
        required
        name="comment"
        value={formData.comment}
        placeholder='Offer Comment'
        onChange={handleChange}
      />
      <button type="submit">SAVE</button>
    </form>
    </main>
  )
}

export default EditOffer
