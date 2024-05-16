// assets
import profileIcon from '../../assets/Icons/user.png'

// css
import styles from './AuthorInfo.module.css'

const AuthorInfo = ({ content }) => {
  const photo = content.author.photo ? content.author.photo : profileIcon

  return (
    <div className={styles.container}>
      <img src={photo} alt="The user's avatar" />
      <section>
        <h2>{content.author.name}</h2>
        {/* <DateCard createdAt={content.createdAt} /> */}
      </section>
    </div>
  )
}

export default AuthorInfo