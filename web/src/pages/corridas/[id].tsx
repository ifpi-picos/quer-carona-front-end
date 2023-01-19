import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillSmile, AiOutlineMonitor } from "react-icons/ai";
import { IoMdCompass } from "react-icons/io";
import { TbArrowsLeftRight } from "react-icons/tb";
import MyMap from "../../components/Map";
import Start from "../../components/Start.";
import { useEffect, useState } from "react";
import axios from "axios";
import { getStreetNameForLocation } from "../../util/mapboxGeocoder";
import { format } from "date-fns";
import { useAuth } from "../../contexts/AuthContext";
export default function CorridaDetails() {
  const router = useRouter();
  const { id: corridaId } = router.query;
  const [corridaData, setCorridaData] = useState<any>({});
  const [canTakeCorrida, setCanTakeCorrida] = useState(false);
  const [canStartCorrida, setCanStartCorrida] = useState(false);
  const [isPassageiro, setIsPassageiro] = useState(false);
  const { user } = useAuth();
  const [markers, setMarkers] = useState<
    { lat: number | undefined; lng: number | undefined; color?: string }[]
  >([]);
  useEffect(() => {
    if (!corridaId) return;
    axios
      .get(`https://quer-carona-back-end.onrender.com/corridas/${corridaId}`, {
        withCredentials: true,
      })
      .then(async (res) => {
        const corrida = res.data;
        const locationStart = corrida["start"]
          .split(";")
          .map((el: string) => parseFloat(el));
        const locationEnd = corrida["end"]
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
        setMarkers([
          { lat: locationStart[0], lng: locationStart[1], color: "yellow" },
          { lat: locationEnd[0], lng: locationEnd[1], color: "green" },
        ]);
        setCorridaData({ ...corrida, enderecoStart, enderecoEnd });
        setCanTakeCorrida(
          user?.id !== corrida["motoristaId"] &&
            !corrida["passageiros"].find(
              (el: Record<string, any>) => el["id"] == user?.id
            ) &&
            !corrida["finalizada"]
        );
        setCanStartCorrida(
          user?.id === corrida["motoristaId"] && !corrida["finalizada"]
        );
        setIsPassageiro(corrida["passageiros"].some(
          (el: Record<string, any>) => el["id"] == user?.id
        ));
      });
  }, [corridaId, user]);
  const startCorrida = async () => {
    if (!corridaId) return;
    const res = await axios.put(
      `https://quer-carona-back-end.onrender.com/corridas/${corridaId}/start`,
      {},
      {
        withCredentials: true,
      }
    );
    const corrida = res.data;
        const locationStart = corrida["start"]
          .split(";")
          .map((el: string) => parseFloat(el));
        const locationEnd = corrida["end"]
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
        setMarkers([
          { lat: locationStart[0], lng: locationStart[1], color: "yellow" },
          { lat: locationEnd[0], lng: locationEnd[1], color: "green" },
        ]);
        setCorridaData({ ...corrida, enderecoStart, enderecoEnd });
        setCanTakeCorrida(
          user?.id !== corrida["motoristaId"] &&
            !corrida["passageiros"].find(
              (el: Record<string, any>) => el["id"] == user?.id
            ) &&
            !corrida["finalizada"]
        );
        setCanStartCorrida(
          user?.id === corrida["motoristaId"] && !corrida["finalizada"]
        );
        setIsPassageiro(corrida["passageiros"].some(
          (el: Record<string, any>) => el["id"] == user?.id
        ));
  };
  const takeCorrida = async () => {
    if (!corridaId) return;
    const res = await axios.put(
      `https://quer-carona-back-end.onrender.com/corridas/${corridaId}/`,
      {},
      {
        withCredentials: true,
      }
    );
    const corrida = res.data;
        const locationStart = corrida["start"]
          .split(";")
          .map((el: string) => parseFloat(el));
        const locationEnd = corrida["end"]
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
        setMarkers([
          { lat: locationStart[0], lng: locationStart[1], color: "yellow" },
          { lat: locationEnd[0], lng: locationEnd[1], color: "green" },
        ]);
        setCorridaData({ ...corrida, enderecoStart, enderecoEnd });
        setCanTakeCorrida(
          user?.id !== corrida["motoristaId"] &&
            !corrida["passageiros"].find(
              (el: Record<string, any>) => el["id"] == user?.id
            ) &&
            !corrida["finalizada"]
        );
        setCanStartCorrida(
          user?.id === corrida["motoristaId"] && !corrida["finalizada"]
        );
        setIsPassageiro(corrida["passageiros"].some(
          (el: Record<string, any>) => el["id"] == user?.id
        ));
  };
  return (
    <div className="w-full h-full mx-auto flex flex-col items-center justify-center">
      <main className="bg-black-900 w-full h-full rounded flex flex-col">
        <Start />
        <div className="flex flex-col justify-center flex-1">
          {corridaData && (
            <div className="h-full">
              <div className="flex flex-col items-center space-y-2 px-2 w-full h-full max-h-[50%]">
                <MyMap selectPlace={false} markers={markers} />
              </div>
              <div className="flex flex-col p-4 space-y-2">
                <span className="text-slate-50 text-lg">Local de Saída</span>
                <span className="text-white text-2xl">
                  {corridaData["enderecoStart"]}
                </span>
                <span className="text-slate-50 text-lg">Local de Destino</span>
                <span className="text-white text-2xl">
                  {corridaData["enderecoEnd"]}
                </span>
                <span className="text-slate-50 text-lg">Horário de Saída</span>
                <span className="text-white text-2xl">
                  {corridaData["horario"] &&
                    format(new Date(corridaData["horario"]), "HH:mm")}
                </span>
                <span className="text-slate-50 text-lg">Telefone</span>
                <span className="text-white text-2xl">
                  {(corridaData["motorista"] &&
                    corridaData["motorista"]["telefone"]) ??
                    ""}
                </span>
                {canTakeCorrida && (
                  <button className="rounded-[5px] bg-yellow-900 cursor-pointer shadow text-black-900 font-bold text-lg hover:bg-yellow-300">
                    Pegar Carona
                  </button>
                )}
                {canStartCorrida && (
                  <button className="rounded-[5px] bg-yellow-900 cursor-pointer shadow text-black-900 font-bold text-lg hover:bg-yellow-300" onClick={() => startCorrida()}>
                    Iniciar Corrida
                  </button>
                )}
                {!canStartCorrida && !canTakeCorrida && (
                  <span className="text-white text-2xl">
                    Corrida finalizada
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex justify-around items-center w-full h-[70px] bg-slate-900 rounded border-t-2 border-yellow-900">
          <div className="flex flex-col items-center text-yellow-900 text-xs hover:text-yellow-900">
            <Link
              className="flex flex-col justify-center items-center"
              href="/pegarcarona"
            >
              <AiOutlineMonitor className="w-[30px] h-[30px] text-yellow hover:text-yellow-900" />{" "}
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
