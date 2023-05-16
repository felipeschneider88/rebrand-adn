import styles from '../page.module.css'

export default function Home() {
  return (
    <main className={styles.main}>
    <HeaderComponent></HeaderComponent>            
      <br /> 
        <p>Here goes the about services</p>
      <br />            
      <FooterComponent></FooterComponent>   
    </main>
  )
}
