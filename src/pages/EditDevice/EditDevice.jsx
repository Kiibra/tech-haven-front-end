// npm modules
import { useState } from "react"
import { useLocation } from "react-router-dom"

// CSS
import styles from './EditDevice.module.css'

const EditDevice = (props) => {
  const { state } = useLocation()
  const [formData, setFormData] =useState(state)

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value })
  }
  const handlePriceInput = (evt) => {
    setFormData({...formData, [evt.target.name]:  evt.target.value.replace(/\D/g, "")})
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.handleUpdateDevice(formData)
  }

  return (  
  <main className={styles.container}>
    <form onSubmit={handleSubmit}>
    <h1>Edit Device</h1>
    <label htmlFor="make-input">Make</label>
    <input
      required
      type="text" 
      name="make"
      id="make-input"
      placeholder="product make"
      value={formData.make}
      onChange={handleChange}
    />
    <label htmlFor="model-input">Model</label>
    <input
      required
      type="text"
      name="model"
      id="model-input"
      placeholder="product model"
      value={formData.model}
      onChange={handleChange}
    />
    <label htmlFor="photo-input">Photo</label>
    <input
      required
      type="text"
      name="photo"
      id="photo-input"
      placeholder="photo link"
      value={formData.photo}
      onChange={handleChange}
    />
    <label htmlFor="color-input">Color</label>
    <input
      required
      type="text"
      name="color"
      id="color-input"
      placeholder="color"
      value={formData.color}
      onChange={handleChange}
    />
    <label htmlFor="price-input">Price</label>
    <input
      required
      type="text"
      name="price"
      id="price-input"
      placeholder="price"
      value={formData.price}
      onChange={handlePriceInput}
    />
    <label htmlFor="category-input">Category</label>
    <select
      required
      name="category"
      id="category-input"
      value={formData.category}
      onChange={handleChange}
    >
      <option value="New">New</option>
      <option value="Used">Used</option>
      <option value="Refurbished">Refurbished</option>
    </select>

    {formData.category !== 'New' && 
      <>
        <label htmlFor="damage-checkbox">Damage</label>
        <input 
          type="checkbox" 
          id='damage-checkbox'
          value={formData.damage}
          onChange={handleChange}
        />
        <label htmlFor="scratches-checkbox">Scratches</label>
        <input 
          type="checkbox" 
          id='scratches-checkbox'
          value={formData.scratches}
          onChange={handleChange}
        />
        <label htmlFor="cracks-checkbox">Cracks</label>
        <input 
          type="checkbox" 
          id='cracks-checkbox'
          value={formData.cracks}
          onChange={handleChange}
        />
      </>
      }
    <button type="submit">SAVE</button>
  </form>
</main>
  )
}

export default EditDevice