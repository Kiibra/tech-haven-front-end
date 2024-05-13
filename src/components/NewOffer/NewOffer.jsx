// npm modules
import { useState } from "react"

// CSS
import styles from './NewOffer.module.css'

const NewOffer = (props) => {
  const [ formData, setFormData] = useState({
    comment: '',
    value: '',
  })

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleAddOffer(formData)
    setFormData({ 
      comment: '',
      value: '',
  })
  }

  return (  
    <form className={styles.container} onSubmit={handleSubmit}>
      <h5>Make New Offer</h5>
      <textarea 
        required
        name="comment"
        value={formData.comment}
        placeholder='Offer Comment'
        onChange={handleChange}
      />
      <label htmlFor="photo-input">Value</label>
    <input
      required
      type="text"
      name="value"
      id="value-input"
      placeholder="value..."
      value={formData.value}
      onChange={handleChange}
    />
      <button type="submit">Submit Offer</button>
    </form>
  )
}

export default NewOffer