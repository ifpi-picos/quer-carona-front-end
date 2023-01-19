import { format } from "date-fns";
import Link from "next/link";
import {
  AiFillMeh,
  AiFillMessage,
  AiFillPlusCircle,
  AiFillSmile,
  AiOutlineArrowRight,
  AiOutlineMonitor,
} from "react-icons/ai";
import { GiConfirmed } from "react-icons/gi";
import { IoMdCompass } from "react-icons/io";
import { TbArrowsLeftRight } from "react-icons/tb";
import Line from "../components/Line.";
import Start from "../components/Start.";
import { useAuth } from "../contexts/AuthContext";

export default function TeladePerfil() {
  const { user } = useAuth();
  return (
    <div className="w-full h-full mx-auto flex flex-col items-center justify-center">
      <main className="bg-black-900 w-full h-full rounded flex flex-col">
        <Start />

        <div className="flex flex-col space-y-2 flex-1 w-full p-4">
          <div className="flex flex-col space-y-4">
            <span className="text-slate-50 text-lg">Nome</span>
            <span className="text-white text-2xl">{user?.nome}</span>
            <span className="text-slate-50 text-lg">Email</span>
            <span className="text-white text-2xl">{user?.email}</span>
            <span className="text-slate-50 text-lg">Telefone</span>
            <span className="text-white text-2xl">{user?.telefone}</span>
            <span className="text-slate-50 text-lg">Data de Nascimento</span>
            <span className="text-white text-2xl">{user && format(new Date(user.data_nascimento), "dd/MM/yyyy")}</span>
          </div>
        </div>
        <div className="flex justify-around items-center w-full h-[70px] bg-slate-900 rounded border-t-2 border-yellow-900">
          <div className="flex flex-col items-center text-white text-xs cursor-pointer hover:text-yellow-900">
            <Link
              className="flex flex-col justify-center items-center"
              href="/pegarcarona"
            >
              <AiOutlineMonitor className="w-[30px] h-[30px] text-white hover:text-yellow-900" />{" "}
              Procurar
            </Link>
          </div>
          <div className="flex flex-col items-center text-white text-xs cursor-pointer hover:text-yellow-900">
            <Link
              className="flex flex-col justify-center items-center"
              href="/oferecercarona"
            >
              <IoMdCompass className="w-[30px] h-[30px] text-white hover:text-yellow-900" />{" "}
              Oferecer
            </Link>
          </div>
          <div className="flex flex-col items-center text-white text-xs cursor-pointer hover:text-yellow-900">
            <Link
              className="flex flex-col justify-center items-center"
              href="/suasViagens"
            >
              <TbArrowsLeftRight className="w-[30px] h-[30px] text-white hover:text-yellow-900" />{" "}
              Viagens
            </Link>
          </div>
          <div className="flex flex-col items-center text-yellow-900 text-xs cursor-pointer hover:text-yellow-900">
            <Link
              className="flex flex-col justify-center items-center"
              href="/telaDePerfil"
            >
              <AiFillSmile className="w-[30px] h-[30px] text-yellow-900 hover:text-yellow-900" />{" "}
              Perfil
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
