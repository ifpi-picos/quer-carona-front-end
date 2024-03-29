import Link from "next/link";
import { AiFillMessage, AiFillSmile, AiOutlineMonitor } from "react-icons/ai";
import { IoMdCompass } from "react-icons/io";
import { TbArrowsLeftRight } from "react-icons/tb";
import Start from "../components/Start.";

export default function TelaDeMensagens () {
    return (
        <div className="max-w=[375px] max-h=[740] mx-auto flex flex-col items-center justify-center">
            <main className="bg-black-900 w-[360px] h-[103] rounded">
                <Start />
                <div className="flex gap-8 mb-10">
                    <h1 className="text-white p-2">Caixa de entrada</h1>
                </div>
                <p className="text-slate-400 text-xs p-1">
                    Nenhuma mensagem no momento. Ofereça uma carona para falar com alguém.
                </p>
                <div className='flex justify-around items-center w-[358px] h-[70px] bg-slate-900 mb-20 rounded border-t-2 border-yellow-900 mt-[289px]'> 
                    <div className='flex flex-col items-center text-white text-xs hover:text-yellow-900'><Link className="flex flex-col justify-center items-center" href="/pegarcarona"><AiOutlineMonitor className='w-[30px] h-[30px] text-white hover:text-yellow-900' /> Procurar</Link></div>
                    <div className='flex flex-col items-center text-white text-xs cursor-pointer hover:text-yellow-900'><Link className="flex flex-col justify-center items-center" href="/oferecercarona"><IoMdCompass className='w-[30px] h-[30px] text-white hover:text-yellow-900' /> Oferecer</Link></div>
                    <div className='flex flex-col items-center text-white text-xs cursor-pointer hover:text-yellow-900'><Link className="flex flex-col justify-center items-center" href="/suasViagens"><TbArrowsLeftRight className='w-[30px] h-[30px] text-white hover:text-yellow-900' /> Viagens</Link></div>
                    <div className='flex flex-col items-center text-yellow-900 text-xs cursor-pointer hover:text-yellow-900'><Link className="flex flex-col justify-center items-center" href="/telaDeMensagens"><AiFillMessage className='w-[30px] h-[30px] text-yellow-900 hover:text-yellow-900' /> Mensagens</Link></div>
                    <div className='flex flex-col items-center text-white text-xs cursor-pointer hover:text-yellow-900'><Link className="flex flex-col justify-center items-center" href="/telaDePerfil"><AiFillSmile className='w-[30px] h-[30px] text-white hover:text-yellow-900' /> Perfil</Link></div>
                </div>
            </main>
        </div>
    )
}