import Image from "next/image"
import logo from '../../public/assets/img/QuerCaronaLogo2.png'

export default function Home() {
  return (
    <div className="max-w=[375px] max-h=[670] mx-auto flex flex-col items-center justify-center mt-4">

      <Image src={logo} alt="Logo princinpal do App" />

      <div>
        <main>
          <div className="flex flex-col justify-center w-[281px] gap-4 mb-4">
            <button className=" pr-[.3rem] pl-2 rounded-[5px] bg-yellow-900 cursor-pointer shadow text-black-900 font-bold text-lg hover:bg-white">Cadastre-se</button>
            <button className=" pr-[.3rem] pl-2 rounded-[5px] bg-slate-800  cursor-pointer shadow text-white font-bold text-lg">Entrar</button>
          </div>
          
        </main>
      </div>
    </div>
    
  )
}

Home()