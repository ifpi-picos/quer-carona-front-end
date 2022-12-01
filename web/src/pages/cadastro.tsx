import Link from 'next/link'
import Image from "next/image"
import logo from '../../public/assets/img/QuerCaronaLogo2.png'
import Lines from "../components/Lines"
import Icons from "../components/Icons";
import Footer from "../components/Footer";
import { FormEvent } from 'react';

export default function Cadastro() {
    return (
        <div className="max-w=[375px] max-h=[670] mx-auto flex flex-col items-center justify-center mt-4">

            <Image src={logo} alt="Logo princinpal do App" />
            <h1 className='text-white text-lg mb-8'>Crie sua conta gratuita</h1>
            <main className='w-[281px]'>
                <form className='flex flex-col gap-3'action=''>
                    <div className='flex flex-col gap-1 '>
                        <label className=' text-slate-300 mb-1' htmlFor='nome'> Seu nome</label>
                        <input className='h-9 p-2 bg-slate-900 rounded text-white' id='nome' name='nome' required type="text" placeholder='Digite seu nome' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-slate-300 mb-1' htmlFor='email'> Seu e-mail</label>
                        <input className='h-9 p-2 bg-slate-900 rounded text-white' id='email' name='email' required type="email" placeholder='Digite seu e-mail' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-slate-300 mb-1' htmlFor='senha'> Sua senha</label>
                        <input className='h-9 p-2 bg-slate-900 rounded text-white' name='senha' id='senha' required type="password" placeholder='Digite sua senha' />
                    </div>
                    <div className='flex flex-col gap-1'>
                        <label className='text-slate-300 mb-1' htmlFor='isenha'> Confirme sua senha</label>
                        <input className='h-9 p-2 bg-slate-900 rounded text-white' name='isenha' id='isenha' required type="password" placeholder='Senha' />
                    </div>
                    <div className='flex items-center justify-center'>
                        <button className=' bg-white rounded mt-1 p-1 w-[150px]' type='submit'>Enviar <Link href="/escolha"></Link></button>
                    </div>
                </form>
            </main>
        </div>
    )
}