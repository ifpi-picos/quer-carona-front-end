import Link from "next/link";
import { AiFillMessage, AiFillSmile, AiOutlineBars, AiOutlineMonitor } from "react-icons/ai";
import { IoMdCompass } from "react-icons/io";
import { TbArrowsLeftRight } from "react-icons/tb";
import Start from "../components/Start.";

export default function SuasViagens () {
    return (
        <div className="max-w=[375px] max-h=[740] mx-auto flex flex-col items-center justify-center">
            <main className="bg-black-900 w-[360px] h-[103] rounded">
                <Start />
                <div className="flex gap-8 mb-10">
                    <h1 className="text-white">Suas viagens futuras aparecerão aqui</h1>
                    <AiOutlineBars className="text-yellow-900 w-[30px] h-[25px]" />
                </div>
                <p className="text-slate-400 text-xs p-1">
                Encontre a carona perfeita entre vários destinos ou publique sua carona e veja se alguem está indo para o mesmo destino que o seu, ainda há uma chance de receber uma gorjeta.
                </p>
                <div className='flex justify-between items-center w-[358px] h-[70px] bg-slate-900 mb-20 rounded border-t-2 border-yellow-900 mt-[289px]'> 
                    <div className='flex flex-col items-center text-white text-xs'><AiOutlineMonitor className='w-[30px] h-[30px] text-white' /><Link href="/pegarcarona"> Procurar</Link></div>
                    <div className='flex flex-col items-center text-white text-xs cursor-pointer'><IoMdCompass className='w-[30px] h-[30px] text-white' /><Link href="/oferecercarona"> Oferecer</Link></div>
                    <div className='flex flex-col items-center text-yellow-900 text-xs cursor-pointer'><TbArrowsLeftRight className='w-[30px] h-[30px] text-yellow-900' /><Link href="/suasViagens"> Viagens</Link></div>
                    <div className='flex flex-col items-center text-white text-xs cursor-pointer'><AiFillMessage className='w-[30px] h-[30px] text-white' /><Link href="/telaDeMensagens"> Mensagens</Link></div>
                    <div className='flex flex-col items-center text-white text-xs cursor-pointer'><AiFillSmile className='w-[30px] h-[30px] text-white' /><Link href="/telaDePerfil"> Perfil</Link></div>
                </div>
            </main>
        </div>
    )
}