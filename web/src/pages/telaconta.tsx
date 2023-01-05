import Link from "next/link";
import { AiOutlineMonitor, AiFillMessage, AiFillSmile } from "react-icons/ai";
import { IoMdCompass } from "react-icons/io";
import { TbArrowsLeftRight } from "react-icons/tb";

export default function TelaConta() {
    return(
        <div className="max-w=[375px] max-h=[740] mx-auto flex flex-col items-center justify-center">
            <main className="bg-black-900 w-[360px] h-[103] rounded">
                <div className="flex items-center justify-center gap-8 mt-3 mb-8">
                    <button className="bg-[#0A0A0A] text-white rounded-xl border p-2 hover:bg-slate-600"><Link href="/telaDePerfil"> Sobre você</Link></button>
                    <button className="bg-[#0A0A0A] text-yellow-900 rounded-xl border-yellow-900 border p-2"> Conta</button>
                </div>
                <div className="text-white flex flex-col gap-2 border">
                    <p>Avaliações</p>
                    <p>Notificações</p>
                    <p>Modo Dark</p>
                    <p>Senha</p>
                    <p>Avalie o App</p>
                    <p>Ajuda</p>
                    <p>Termos de uso</p>
                    <p>Proteção de dados</p>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <button className="text-yellow-900 border border-yellow-900 rounded p-2 hover:bg-slate-900">Encerrar sessão</button>
                </div>
                    <div className='flex justify-around items-center w-[358px] h-[70px] bg-slate-900 mb-20 rounded border-t-2 border-yellow-900 mt-12'> 
                        <div className='flex flex-col items-center text-white text-xs hover:text-yellow-900'><Link className="flex flex-col justify-center items-center" href="/pegarcarona"><AiOutlineMonitor className='w-[30px] h-[30px] text-white hover:text-yellow-900' /> Procurar</Link></div>
                        <div className='flex flex-col items-center text-white text-xs cursor-pointer hover:text-yellow-900'><Link className="flex flex-col justify-center items-center" href="/oferecercarona"><IoMdCompass className='w-[30px] h-[30px] text-white hover:text-yellow-900' /> Oferecer</Link></div>
                        <div className='flex flex-col items-center text-white text-xs cursor-pointer hover:text-yellow-900'><Link className="flex flex-col justify-center items-center" href="/suasViagens"><TbArrowsLeftRight className='w-[30px] h-[30px] text-white hover:text-yellow-900' /> Viagens</Link></div>
                        <div className='flex flex-col items-center text-white text-xs cursor-pointer hover:text-yellow-900'><Link className="flex flex-col justify-center items-center" href="/telaDeMensagens"><AiFillMessage className='w-[30px] h-[30px] text-white hover:text-yellow-900' /> Mensagens</Link></div>
                        <div className='flex flex-col items-center text-yellow-900 text-xs cursor-pointer hover:text-yellow-900'><Link className="flex flex-col justify-center items-center" href="/telaDePerfil"><AiFillSmile className='w-[30px] h-[30px] text-yellow-900 hover:text-yellow-900' /> Perfil</Link></div>
                    </div>
            </main>
        </div>
    )
}