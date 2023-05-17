import styles from './page.module.css'
import HeaderComponent from "../components/common/Header/header";
import FooterComponent from "../components/common/Footer/footer";
import '@/styles/global.css';
export default function Home() {
  return (
    <main className={styles.main}>
      <HeaderComponent></HeaderComponent>            
        <br /> 
        <header className={"headerStyle"}>
    <div className={"max-w-4xl mx-auto py-16 px-14 sm:px-6 lg:px-8"}>
      <h1 className={"font-sans font-bold text-4xl md:text-5xl lg:text-8xl text-center leading-snug text-gray-800"}>
        Your website, beyond expectations
      </h1>
      <div className={"max-w-xl mx-auto"}>
        <p className={"mt-10 text-gray-500 text-center text-xl lg:text-3xl"}>
          Make your website wonderful and build beyond your expectations.
        </p>
      </div>
      <div className={"mt-10 flex justify-center items-center w-full mx-auto"}>
        <button primary>Get started</button>
        <span className={"mx-2"}>or</span>
        <button>Contact us</button>
      </div>
    </div>
    </header>
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
