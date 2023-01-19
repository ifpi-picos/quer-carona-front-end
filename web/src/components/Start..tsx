import {AiFillMeh, AiFillBell} from 'react-icons/ai'
import { useAuth } from '../contexts/AuthContext'

export default function Start() {
    const { user } = useAuth();
    return (
        <div className='flex w-full h-[70px] bg-slate-900 rounded border-b-2 border-yellow-900 py-5 px-2 items-center justify-between'>
            <div className='flex flex-row space-x-2 items-center'>
            <AiFillMeh className='text-white w-[40px] h-[50px]' />
            <h1 className='text-white text-base text-center'>{user?.nome}</h1>
            </div>
            <AiFillBell className='text-yellow-900 w-[30px] h-[40px]' />


        </div>
    )
}