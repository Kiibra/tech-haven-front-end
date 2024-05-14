// npm modules
import { useState } from "react"

// CSS
import styles from './NewOffer.module.css'

const NewOffer = () => {
  const [ formData, setFormData] = useState({
    comment: '',
    value: '',
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    // Update this line shortly....
    setFormData({ 
      comment: '',
      value: '',
    })
  }

  return (  
    <form className={styles.container} onSubmit={handleSubmit}>
      <h2>Make New Offer</h2>
      <label htmlFor="value-input">value</label>
      <input 
        type="value" 
        id='value-input'
        value={formData.value}
        onChange={handleChange}
      />
      <textarea 
        required
        name="comment"
        value={formData.comment}
        placeholder='Offer Comment'
        onChange={handleChange}
      />
      <button type="submit">Submit Offer</button>
    </form>
  )
}

export default NewOffer