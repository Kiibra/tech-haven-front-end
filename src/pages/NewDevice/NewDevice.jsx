
// CSS
import styles from './NewDevice.module.css'

const NewDevice = () => {
  return ( 
  <main className={styles.container}>
    <form>
      <h1>Add New Device</h1>
    <label htmlFor="Make-input">Make</label>
    <input
      required
      type="text" 
      name="make"
      id="make-input"
      placeholder="Make"
    />
    <label htmlFor="model-input">Model</label>
    <input
      required
      type="text"
      name="model"
      id="model-input"
      placeholder="Model"
    />
    <label htmlFor="photo-input">Photo</label>
    <input
      required
      type="text"
      name="photo"
      id="photo-input"
      placeholder="photo link"
    />
    <label htmlFor="color-input">Color</label>
    <input
      required
      type="text"
      name="color"
      id="color-input"
      placeholder="color"
    />
    <label htmlFor="price-input">Price</label>
    <input
      required
      type="text"
      name="price"
      id="price-input"
      placeholder="price"
    />
    <label htmlFor="category-input">Category</label>
    <select
      required
      name="category"
      id="category-input"
    >
      <option value="New">New</option>
      <option value="Used">Used</option>
      <option value="Refurbished">Refurbished</option>
    </select>
    <label htmlFor="damage-checkbox">Damage</label>
    <input type="checkbox" id='damage'/>
    <label htmlFor="scratches-checkbox">Scratches</label>
    <input type="checkbox" id='scratches'/>
    <label htmlFor="cracks-checkbox">Crackes</label>
    <input type="checkbox" id='crack'/>
    <button type="submit">SUBMIT</button>
  </form>
</main>
  )
}

export default NewDevice