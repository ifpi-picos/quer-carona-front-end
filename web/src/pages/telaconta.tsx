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
                <div className="text-white flex flex-col gap-2">
                    <p>Avaliações</p>
                    <p>Notificações</p>
                    <p>Modo Dark</p>
                    <p>Senha</p>
                    <p>Endereço</p>
                    <p>Avalie o App</p>
                    <p>Ajuda</p>
                    <p>Termos de uso</p>
                    <p>Proteção de dados</p>
                </div>
                <div className="flex items-center justify-center mt-8">
                    <button className="text-yellow-900 border border-yellow-900 rounded p-2 hover:bg-slate-900">Encerrar sessão</button>
                </div>
                    <div className='flex justify-between items-center w-[358px] h-[70px] bg-slate-900 mb-20 rounded border-t-2 border-yellow-900 mt-12'> 
                        <div className='flex flex-col items-center text-white text-xs'><AiOutlineMonitor className='w-[30px] h-[30px] text-white' /><Link href="/pegarcarona"> Procurar</Link></div>
                        <div className='flex flex-col items-center text-white text-xs cursor-pointer'><IoMdCompass className='w-[30px] h-[30px] text-white' /><Link href="/oferecercarona"> Oferecer</Link></div>
                        <div className='flex flex-col items-center text-white text-xs cursor-pointer'><TbArrowsLeftRight className='w-[30px] h-[30px] text-white' /><Link href="/suasViagens"> Viagens</Link></div>
                        <div className='flex flex-col items-center text-white text-xs cursor-pointer'><AiFillMessage className='w-[30px] h-[30px] text-white' /><Link href="/telaDeMensagens"> Mensagens</Link></div>
                        <div className='flex flex-col items-center text-yellow-900 text-xs cursor-pointer'><AiFillSmile className='w-[30px] h-[30px] text-yellow-900' /><Link href="/telaDePerfil"> Perfil</Link></div>
                    </div>
            </main>
        </div>
    )
}