import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <HeaderComponent></HeaderComponent>            
      <br /> 
        <p>Here goes the about secction</p>
      <br />            
      <FooterComponent></FooterComponent>   
    </main>
  )
}
