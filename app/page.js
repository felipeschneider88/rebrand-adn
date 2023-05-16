import styles from './page.module.css'
import HeaderComponent from "../components/common/Header/header";
import FooterComponent from "../components/common/Footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderComponent></HeaderComponent>            
        <br /> 
      <div className={styles.description}>
        <div>
          <h2>We help you solve your technology challenges.</h2>
          <p>ADN uy is a boutique technology consultancy dedicated to help small and mid-size organizations to make the most out of technology.
          </p>
        </div>
      </div>
      <br />            
      <FooterComponent></FooterComponent>        
    </main>
  )
}
