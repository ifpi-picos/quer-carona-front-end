import Link from 'next/link'
import Image from "next/image"
import logo from '../../public/assets/img/QuerCaronaLogo2.png'
import Lines from "../components/Lines"
import Icons from "../components/Icons";
import Footer from "../components/Footer";

export default function Escolha() {
    return (
    <div className="max-w=[375px] max-h=[670] mx-auto flex flex-col items-center justify-center mt-4">

      <Image src={logo} alt="Logo princinpal do App" />

      <h1 className='text-white text-lg mb-8'>O que você deseja fazer?</h1>
      <main className='w=[281px]'>
        <div className='flex flex-col  text-white w-[251px] gap-2'>
            <button className='rounded bg-slate-800 hover:bg-slate-700'><Link href="/pegarcarona"> Pegar carona</Link></button>
            <button className='rounded bg-slate-800 hover:bg-slate-700'><Link href="/oferecercarona"> Dar carona</Link></button>
        </div>
      </main>
    </div>
    )
}