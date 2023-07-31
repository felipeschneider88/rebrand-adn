import HeaderComponent from "../components/Header/header";
import FooterComponent from "../components/Footer/footer";
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
      <button type="button" 
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Default</button>
       
      <FooterComponent></FooterComponent>   
    </main>
  )
}
