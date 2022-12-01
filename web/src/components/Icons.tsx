import { AiFillApple } from "react-icons/ai";
import { FcGoogle } from "react-icons/fc";

export default function Icons() {
    return (
        <div className=" flex flex-col justify-center w-[281px] gap-2 text-center ">
            <button className="rounded bg-white  text-black hover:bg-slate-300"> <AiFillApple className="absolute w-5 h-5 ml-1" /> Continuar com a Apple</button>
            <button className="rounded bg-white text-black hover:bg-slate-300"> <FcGoogle className="absolute w-4 h-6 ml-[6px]"/> Continuar com o Google</button>
          </div>
    )
}