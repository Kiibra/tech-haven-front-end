// css
import styles from './Landing.module.css'

import logotype from '../../assets/Branding/logo.png'

const Landing = () => {
  return (
    <>
    <main className={styles.container}>
      <img src={logotype} alt="phone with app name" />
      {/* <h1>hello, {user ? user.name : 'friend'}</h1> */}
      <section className={styles.about}>
          <header>
            <h3>WHO WE ARE</h3>
            <h1>ABOUT US</h1>
          </header>
          <article>
            <p>
            Tech Haven provides you a platform where you can browse for devices that others are selling, make offers on devices you would like to purchase, post a device of your own, & choose which offer satifsy you. With Tech Haven, you have access to a diverse range of devices, catering to various preferences, and budgets. You can now browse and sell with Tech Haven and feel asured as our robust security routes protect you against potential risks, fostering a safe haven for your selling and buying activities.
            </p>
          </article>
        </section>
    </main>
      <footer className={styles.footer}>
      <p>© 2024 TECH CYCLE INC. ALL RIGHTS RESERVED</p>
    </footer>
    </>
  )
}

export default Landing
