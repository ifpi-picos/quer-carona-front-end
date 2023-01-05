import Link from 'next/link'
import Image from "next/image"
import logo from '../../public/assets/img/QuerCaronaLogo2.png'
import Lines from "../components/Lines"
import Icons from "../components/Icons";
import Footer from "../components/Footer";
import Head from 'next/head';

export default function Home() {
  return (
    <div className="max-w=[375px] max-h=[670] mx-auto flex flex-col items-center justify-center mt-4">
      <Head>
        <title>Quer Carona?</title>
      </Head>
      <Image src={logo} alt="Logo princinpal do App" />

      <div>
        <main className="w-[281px]">
          <div className="flex flex-col justify-center w-[281px] gap-2 mb-4">
            <button className=" pr-[.3rem] pl-2 rounded-[5px] bg-yellow-900 cursor-pointer shadow text-black-900 font-bold text-lg hover:bg-yellow-300"><Link href="/cadastro">Cadastre-se</Link></button>
            <button className=" pr-[.3rem] pl-2 rounded-[5px] bg-slate-800  cursor-pointer shadow text-white font-bold text-lg hover:bg-slate-700"><Link href="/login"> Entrar</Link></button>
          </div>
          <Lines />
          <Icons />
          <Footer />
          
        </main>
      </div>
    </div>
    
  )
}

Home()