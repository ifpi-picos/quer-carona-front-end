import Link from "next/link";
import { AiFillMeh, AiFillMessage, AiFillPlusCircle, AiFillSmile, AiOutlineArrowRight, AiOutlineMonitor } from "react-icons/ai";
import {GiConfirmed} from 'react-icons/gi'
import { IoMdCompass } from "react-icons/io";
import { TbArrowsLeftRight } from "react-icons/tb";
import Line from "../components/Line.";

export default function TeladePerfil() {
    return(
        <div className="max-w=[375px] max-h=[740] mx-auto flex flex-col items-center justify-center">
            <main className="bg-black-900 w-[360px] h-[103] rounded">
                <div className="flex items-center justify-center gap-8 mt-3 mb-8">
                    <button className="bg-[#0A0A0A] text-yellow-900 rounded-xl border-yellow-900 border p-2">Sobre você</button>
                    <button className="bg-[#0A0A0A] text-white rounded-xl p-2 hover:bg-slate-600"><Link href="/telaconta"> Conta</Link></button>
                </div>
                <div className="flex items-center justify-around mb-6">
                    <h1 className="text-white">Torcedor do Vasco</h1>
                    <AiFillMeh className='text-white w-[40px] h-[50px] ml-2 mt-1' />
                    <AiOutlineArrowRight className="text-white w-[40px] h-[50px] ml-2 mt-1'"/>
                </div>
                <div className="flex flex-col gap-2 mb-3">
                    <label htmlFor="perfil" className="text-yellow-900">Alterar imagem do perfil</label>
                    <input className="text-white" type="file" src="" alt="" placeholder="" name="perfil"/>
                </div>
                <Line />
                <div className=" mt-2">
                    <h1 className="text-white mb-4">Verifique seu perfil</h1>
                    <p className="text-yellow-900 flex mb-1">Confirmar documentação</p>
                    <div className="flex  items-center gap-2">
                        <GiConfirmed className="text-yellow-900" />
                        <p className="text-white">    seuemail@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-2 mb-3">
                        <GiConfirmed className="text-yellow-900"/>
                        <p className="text-white">  +5599123456788</p>
                    </div>
                    <Line />
                    <div className="mt-2">
                        <h1 className="text-white mb-4">Sobre você</h1>
                        <div className="flex items-center gap-2">
                            <AiFillPlusCircle className="text-yellow-900" />
                            <p className="text-white">Adicionar biografia</p>
                        </div>
                        <div className="flex items-center gap-2 mb-3">
                            <AiFillPlusCircle className="text-yellow-900" />
                            <p className="text-white">Adicionar endereço padrão</p>
                        </div>
                        <Line />
                        <div className="mt-2">
                            <h1 className="text-white mb-4">Veículos</h1>
                            <div className="flex items-center gap-2">
                                <AiFillPlusCircle className="text-yellow-900" />
                                <p className="text-white">Adicionar veículo</p>
                            </div>
                        </div>
                        <div className='flex justify-between items-center w-[358px] h-[70px] bg-slate-900 mb-20 rounded border-t-2 border-yellow-900 mt-4'> 
                        <div className='flex flex-col items-center text-white text-xs'><AiOutlineMonitor className='w-[30px] h-[30px] text-white' /><Link href="/pegarcarona"> Procurar</Link></div>
                        <div className='flex flex-col items-center text-white text-xs cursor-pointer'><IoMdCompass className='w-[30px] h-[30px] text-white' /><Link href="/oferecercarona"> Oferecer</Link></div>
                        <div className='flex flex-col items-center text-white text-xs cursor-pointer'><TbArrowsLeftRight className='w-[30px] h-[30px] text-white' /><Link href="/suasViagens"> Viagens</Link></div>
                        <div className='flex flex-col items-center text-white text-xs cursor-pointer'><AiFillMessage className='w-[30px] h-[30px] text-white' /><Link href="/telaDeMensagens"> Mensagens</Link></div>
                        <div className='flex flex-col items-center text-yellow-900 text-xs cursor-pointer'><AiFillSmile className='w-[30px] h-[30px] text-yellow-900' /><Link href="/telaDePerfil"> Perfil</Link></div>
                </div>
                        
                    </div>
                </div>

            </main>
        </div>
    )
}