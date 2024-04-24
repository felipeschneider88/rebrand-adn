import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <HeaderComponent></HeaderComponent>            
      <br /> 
        <h1>Felipe Schneider</h1>
      <h2>CEO  </h2>
      <h2>felipe@adn.edu.uy  </h2>
      <br />            
      <FooterComponent></FooterComponent>   
    </main>
  )
}
