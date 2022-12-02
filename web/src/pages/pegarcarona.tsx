import { AiFillSmile,AiOutlineMonitor, AiFillMessage} from 'react-icons/ai'
import {IoMdCompass} from 'react-icons/io'
import {TbArrowsLeftRight} from 'react-icons/tb'
import Link from 'next/link'
import Start from '../components/Start.'

export default function pegarCarona() {
    return (
        <div className='max-w=[375px] max-h=[740] mx-auto flex flex-col items-center justify-center'>
            <main className='bg-black-900 w-[360px] h-[103] rounded'>
                <Start />
                
                <div className='flex flex-col gap-4 mb-6 items-center'>
                    <input className=' bg-slate-900 rounded border-b-2 border-yellow-900 text-white p-2' type="text" placeholder='De(endereço completo)' />
                    <input className='bg-slate-900 rounded  border-b-2 border-yellow-900 text-white p-2' type="text" placeholder='Para(endereço completo)' />
                    
                </div>
                <div className='flex m-2 items-center justify-center'>
                    <input className='bg-slate-900 w-[100px] rounded border border-yellow-900 text-white p-1' type="date" placeholder='hoje' name="" id="" />
                    <select title='select' className='bg-slate-900 w-[70px] rounded border border-yellow-900 text-white ml-5 p-[6.5px]' name="select">
                        <option value="valor1"> &#128100; 1</option>
                        <option value="valor2">&#128100; 2</option>
                        <option value="valor3">&#128100; 3</option>
                        <option value="valor4">&#128100; 4</option>
                        <option value="valor5">&#128100; 5</option>
                    </select>
                </div>
                <div className='flex items-center justify-center mt-8 '>
                    <button className='bg-yellow-900 rounded w-[180px] hover:bg-yellow-300 mb-16'>Procurar</button>
                </div>
                <div className='flex justify-between items-center w-[358px] h-[70px] bg-slate-900 mb-20 rounded border-t-2 border-yellow-900 mt-[129px]'> 
                    <div className='flex flex-col items-center text-yellow-900 text-xs'><AiOutlineMonitor className='w-[30px] h-[30px] text-yellow-900' /><Link href="/pegarcarona"> Procurar</Link></div>
                    <div className='flex flex-col items-center text-white text-xs cursor-pointer'><IoMdCompass className='w-[30px] h-[30px] text-white' /><Link href="/oferecercarona"> Oferecer</Link></div>
                    <div className='flex flex-col items-center text-white text-xs cursor-pointer'><TbArrowsLeftRight className='w-[30px] h-[30px] text-white' /><Link href="/suasViagens"> Viagens</Link></div>
                    <div className='flex flex-col items-center text-white text-xs cursor-pointer'><AiFillMessage className='w-[30px] h-[30px] text-white' /><Link href="/telaDeMensagens"> Mensagens</Link></div>
                    <div className='flex flex-col items-center text-white text-xs cursor-pointer'><AiFillSmile className='w-[30px] h-[30px] text-white' /><Link href="/telaDePerfil"> Perfil</Link></div>
                </div>
            </main>
            
        </div>
    )
}