import styles from '../page.module.css'
import HeaderComponent from "../components/common/Header/header";
import FooterComponent from "../components/common/Footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
    <HeaderComponent></HeaderComponent>            
      <br /> 
        <p>Database tuning</p>
        <p>Technical writing</p>
        <p>Process Automation</p>
        <p>Business Intelligence</p>
        <p>Cloud Adoption</p>
        <p>Managed services</p>
      <br />            
      <FooterComponent></FooterComponent>   
    </main>
  )
}
