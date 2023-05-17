import styles from '../../../app/page.module.css'
function HeaderComponent() {    
    return (  

      <div className={styles.grid}>
        <a
          href="/"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
          <span>Home</span>
          </h2>
          <p>About us</p>
        </a>

        <a
          href="/clients"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            <span>Success Stories</span>
          </h2>
          <p>Success Stories</p>
        </a>

        <a
          href="/services"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            <span>Services</span>
          </h2>
          <p>Explore the service we ofer</p>
        </a>

        <a
          href="https://calendly.com/felipeschneider/"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            <span>Contact us</span>
          </h2>
          <p>
            Get in touch now with us .
          </p>
        </a>
        <a
          href="/about"
          className={styles.card}
          rel="noopener noreferrer"
        >
          <h2>
            <span>About</span>
          </h2>
          <p>About us</p>
        </a>
      </div>    
    )
}
export default HeaderComponent