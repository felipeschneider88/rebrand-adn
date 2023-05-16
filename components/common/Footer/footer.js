import styles from '../../../app/page.module.css'
function FooterComponent() {    
	return (        
		<div className={styles.grid}>
        <a
          href="https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            About <span>-&gt;</span>
          </h2>
          <p>About us</p>
        </a>

        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Success Stories<span>-&gt;</span>
          </h2>
          <p>Success Stories</p>
        </a>

        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          className={styles.card}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h2>
            Services <span>-&gt;</span>
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
            Contact us <span>-&gt;</span>
          </h2>
          <p>
            Get in touch now with us .
          </p>
        </a>
      </div>    
	)
}
export default FooterComponent