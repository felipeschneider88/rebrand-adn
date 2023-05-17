import styles from './page.module.css'
import "../styles/tailwind.css";
import HeaderComponent from "../components/common/Header/header";
import FooterComponent from "../components/common/Footer/footer";
import Image from "next/image";

export default function Home() {
  return (
    <main className={styles.main}>  
      <HeaderComponent></HeaderComponent>            
        <br /> 
        <div className=" flex flex-col justify-center items-start row-start-2 sm:row-start-1">
              <h1 className="text-3xl lg:text-4xl xl:text-5xl font-medium text-black-600 leading-normal">
                We help you solve your technology challenges.
              </h1>
              <p className="text-black-500 mt-4 mb-6">
                <strong>ADN UY</strong>is a boutique technology consultancy dedicated 
                to help small and mid-size organizations to make the most out of technology.
              </p>
              <button className={"py-3 lg:py-4 px-12 lg:px-16 text-white-500 font-semibold rounded-lg bg-orange-500 hover:shadow-orange-md transition-all outline-none "}>
                Get started
                </button>
            </div>
            <div className="flex w-full">
                <Image
                  src="/laptop.png"
                  alt="Working in the laptop"
                  quality={100}
                  width={612}
                  height={383}
                  layout="responsive"
                />
            </div>
      <br />              
    </main>
  )
}
