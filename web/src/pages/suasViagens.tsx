import Link from "next/link";
import {
  AiFillMessage,
  AiFillSmile,
  AiOutlineBars,
  AiOutlineMonitor,
} from "react-icons/ai";
import { IoMdCompass } from "react-icons/io";
import { TbArrowsLeftRight } from "react-icons/tb";
import Start from "../components/Start.";
import { useState, useEffect } from "react";
import { format } from "date-fns";
import axios from "axios";
import { getStreetNameForLocation } from "../util/mapboxGeocoder";
export default function SuasViagens() {
  const [corridasTaken, setCorridasTaken] = useState<any[]>([]);
  const [corridasGiven, setCorridasGiven] = useState<any[]>([]);
  const [currentTab, setCurrentTab] = useState("taken");
  useEffect(() => {
    axios
      .get("https://quer-carona-back-end.onrender.com/corridas/taken", { withCredentials: true })
      .then((res) => {
        Promise.all(
          res.data.map(async (el: Record<string, any>) => {
            const locationStart = el["start"]
              .split(";")
              .map((el: string) => parseFloat(el));
            const locationEnd = el["end"]
              .split(";")
              .map((el: string) => parseFloat(el));
            const enderecoStart = await getStreetNameForLocation({
              lat: locationStart[0],
              lng: locationStart[1],
            });
            const enderecoEnd = await getStreetNameForLocation({
              lat: locationEnd[0],
              lng: locationEnd[1],
            });
            return { ...el, enderecoStart, enderecoEnd };
          })
        ).then((results) => {
          setCorridasTaken(results);
        });
      });
    axios
      .get("https://quer-carona-back-end.onrender.com/corridas/given", { withCredentials: true })
      .then((res) => {
        Promise.all(
          res.data.map(async (el: Record<string, any>) => {
            const locationStart = el["start"]
              .split(";")
              .map((el: string) => parseFloat(el));
            const locationEnd = el["end"]
              .split(";")
              .map((el: string) => parseFloat(el));
            const enderecoStart = await getStreetNameForLocation({
              lat: locationStart[0],
              lng: locationStart[1],
            });
            const enderecoEnd = await getStreetNameForLocation({
              lat: locationEnd[0],
              lng: locationEnd[1],
            });
            return { ...el, enderecoStart, enderecoEnd };
          })
        ).then((results) => {
          setCorridasGiven(results);
        });
      });
  }, []);
  return (
    <div className="w-full h-full mx-auto flex flex-col items-center justify-center">
      <main className="bg-black-900 w-full h-full rounded flex flex-col">
        <Start />

        <div className="flex flex-col space-y-2 flex-1 w-full p-4">
          <ul className="flex w-full text-sm font-medium text-center text-gray-500 border-b border-gray-200">
            <li className="mr-2 w-1/2">
              <a
                href="#"
                aria-current="page"
                className={`inline-block p-4  ${
                  currentTab == "taken" ? "text-yellow-900 bg-gray-800" : ""
                } rounded-t-lg`}
                onClick={() => {
                  setCurrentTab("taken");
                }}
              >
                Pegas
              </a>
            </li>
            <li className="mr-2 w-1/2">
              <a
                href="#"
                className={`inline-block p-4  ${
                  currentTab == "given" ? "text-yellow-900 bg-gray-800" : ""
                } rounded-t-lg`}
                onClick={() => {
                  setCurrentTab("given");
                }}
              >
                Oferecidas
              </a>
            </li>
          </ul>
          {corridasTaken.length == 0 && (
            <div className="flex flex-col space-y-2">
              <div className="flex gap-8 mb-10">
                <h1 className="text-white">
                  Suas viagens futuras aparecerão aqui
                </h1>
              </div>
              <p className="text-slate-400 text-xs p-1">
                Encontre a carona perfeita entre vários destinos ou publique sua
                carona e veja se alguem está indo para o mesmo destino que o
                seu, ainda há uma chance de receber uma gorjeta.
              </p>
            </div>
          )}
          {currentTab == "taken" &&
            corridasTaken.map((el) => {
              return (
                <Link href={`corridas/${el["id"]}`} key={el["id"]}>
                  <div className="flex flex-row w-full p-4 border border-yellow-900 rounded items-center">
                    <div className="flex flex-col space-y-2 w-[80%]">
                      <span className="text-sm text-slate-50">
                        Local de Saída
                      </span>
                      <span className="text-white text-xl">
                        {el["enderecoStart"]}
                      </span>
                      <span className="text-sm text-slate-50">
                        Local de Chegada
                      </span>
                      <span className="text-white text-xl">
                        {el["enderecoEnd"]}
                      </span>
                    </div>
                    <div className="flex flex-col space-y-2 w-[20%] items-center">
                      <span className="text-sm text-slate-50">Horário</span>
                      <span className="text-white text-2xl">
                        {format(new Date(el["horario"]), "HH:mm")}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          {currentTab == "given" &&
            corridasGiven.map((el) => {
              return (
                <Link href={`corridas/${el["id"]}`} key={el["id"]}>
                  <div className="flex flex-row w-full p-4 border border-yellow-900 rounded items-center">
                    <div className="flex flex-col space-y-2 w-[80%]">
                      <span className="text-sm text-slate-50">
                        Local de Saída
                      </span>
                      <span className="text-white text-xl">
                        {el["enderecoStart"]}
                      </span>
                      <span className="text-sm text-slate-50">
                        Local de Chegada
                      </span>
                      <span className="text-white text-xl">
                        {el["enderecoEnd"]}
                      </span>
                    </div>
                    <div className="flex flex-col space-y-2 w-[20%] items-center">
                      <span className="text-sm text-slate-50">Horário</span>
                      <span className="text-white text-2xl">
                        {format(new Date(el["horario"]), "HH:mm")}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
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
          <div className="flex flex-col items-center text-yellow-900 text-xs hover:text-yellow-900">
            <Link
              className="flex flex-col justify-center items-center"
              href="/suasViagens"
            >
              <TbArrowsLeftRight className="w-[30px] h-[30px] text-yellow hover:text-yellow-900" />{" "}
              Viagens
            </Link>
          </div>
          <div className="flex flex-col items-center text-white text-xs cursor-pointer hover:text-yellow-900">
            <Link
              className="flex flex-col justify-center items-center"
              href="/telaDePerfil"
            >
              <AiFillSmile className="w-[30px] h-[30px] text-white hover:text-yellow-900" />{" "}
              Perfil
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
