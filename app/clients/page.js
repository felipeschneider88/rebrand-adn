import styles from '../page.module.css'
import HeaderComponent from "../../components/common/Header/header";
import FooterComponent from "../../components/common/Footer/footer";

export default function Home() {
  return (
    <main className={styles.main}>
    <HeaderComponent></HeaderComponent>            
      <br /> 
        <p>Here goes the about Success Stories</p>
      <br />            
      <FooterComponent></FooterComponent>   
    </main>
  )
}
