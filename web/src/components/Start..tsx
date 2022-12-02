import {AiFillMeh, AiFillBell} from 'react-icons/ai'

export default function Start() {
    return (
        <div className='flex w-[358px] h-[70px] bg-slate-900 mb-20 rounded border-b-2 border-yellow-900'>
            <AiFillMeh className='text-white w-[40px] h-[50px] ml-2 mt-1' />
            <h1 className='text-white text-base text-center mt-5 ml-4'>Torcedor do Vasco</h1>
            <AiFillBell className='text-yellow-900 w-[30px] h-[40px] mt-3 ml-[100px]' />


        </div>
    )
}