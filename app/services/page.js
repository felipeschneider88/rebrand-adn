import styles from '../page.module.css'
import HeaderComponent from "../../components/common/Header/header";
import FooterComponent from "../../components/common/Footer/footer";
import Image from 'next/image';

export default function Home() {
  return (
    <main className={styles.main}>
    <HeaderComponent></HeaderComponent>            
      <br /> 
      <Image
      src="/office.png"
      width={500}
      height={500}
      alt="Picture of the office"
    />
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
