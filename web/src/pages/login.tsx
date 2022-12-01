import Link from 'next/link'
import Image from "next/image"
import logo from '../../public/assets/img/QuerCaronaLogo2.png'
import Lines from "../components/Lines"
import Icons from "../components/Icons";
import Footer from "../components/Footer";

export default function Login() {
    return(
        <div className='max-w=[375px] max-h=[670] mx-auto flex flex-col items-center justify-center mt-4'>
            <Image src={logo} alt="Logo princinpal do App" />
            <h1 className='text-white mb-8 text-lg'>Fazer login</h1>
            <main className='flex flex-col gap-2'>
                <div className='flex flex-col'>
                    <label className='text-slate-300 mb-1' htmlFor="email">E-mail</label>
                    <input className='h-9 p-2 rounded bg-slate-900' type="email" name='email' id='email' placeholder='example@email.com' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-slate-300 mb-1' htmlFor="senha">Senha</label>
                    <input className='h-9 p-2 rounded bg-slate-900' type="password" name="senha" id="senha" placeholder='Sua senha' />
                </div>
                <div>
                    <button className='text-yellow-900 text-xs'><Link href="/" >Esqueceu sua senha?</Link></button>
                </div>
                <div className='flex items-center justify-center'>
                    <button className='bg-white rounded mt-1 p-1 w-[150px] hover:bg-slate-300' type='submit'>Entrar</button>
                </div>
                <Lines></Lines>
                <Icons></Icons>
            </main>
        </div>
    )
}