import Image from 'next/image'
import HeaderComponent from './components/Header/header'
import FooterComponent from './components/Footer/footer'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <HeaderComponent></HeaderComponent>
      <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
          <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
            We help you solve your technology challenges.
          </h1>
          <p className="text-black-500 mt-4 mb-6">
            <strong>ADN UY</strong> is a boutique technology consultancy dedicated 
            to help small and mid-size organizations to make the most out of technology.
          </p>
      </div>
      <div className="align-center items-center justify-between">
        <Image
          className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
          src="/adnuyColor.svg"
          alt="ADN UY Logo"
          width={180}
          height={37}
          priority
        />
        <br></br>
            <button  className="py-3 lg:py-4 px-12 lg:px-16 font-semibold rounded-lg bg-green-500 relative">
                <a href="https://calendly.com/felipeschneider/"
                target="_blank">
                  Contact us</a>
              </button>
        </div>
      
  <FooterComponent></FooterComponent>
    </main>
  )
}
