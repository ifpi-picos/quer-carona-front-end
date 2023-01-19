import dynamic from "next/dynamic";
import Link from "next/link";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  AiFillMessage,
  AiFillSmile,
  AiOutlineMonitor,
  AiOutlineArrowRight,
  AiOutlineCheck,
} from "react-icons/ai";
import { IoMdCompass } from "react-icons/io";
import { TbArrowsLeftRight } from "react-icons/tb";
import { LngLat, MapProvider, Marker, useMap } from "react-map-gl";
import MyMap from "../components/Map";
import Start from "../components/Start.";
import axios from "axios";
import { useRouter } from "next/router";

export default function OferecerCarona() {
  const AddressAutofill = dynamic(
    () => import("@mapbox/search-js-react").then((mod) => mod.AddressAutofill),
    { ssr: false }
  );
  const { map } = useMap();
  const [currentStep, setCurrentStep] = useState(0);
  const [startPoint, setStartPoint] = useState<LngLat | undefined>(undefined);
  const [endPoint, setEndPoint] = useState<LngLat | undefined>(undefined);
  const [data, setData] = useState({
    horario: "",
    vagas: "",
  });

  const router = useRouter();

  const [markers, setMarkers] = useState<
    { lat: number | undefined; lng: number | undefined; color?: string }[]
  >([]);
  const [selectedPlace, setSelectedPlace] = useState(true);
  const getUserLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      map?.setCenter({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    });
  };

  const getSelectedPositionStart = () => {
    setStartPoint(map?.getCenter());
    const oldMarkers = [
      ...markers,
      { lat: map?.getCenter().lat, lng: map?.getCenter().lng, color: "yellow" },
    ];
    setMarkers(oldMarkers);
  };
  const getSelectedPositionEnd = () => {
    setEndPoint(map?.getCenter());
    const oldMarkers = [
      ...markers,
      { lat: map?.getCenter().lat, lng: map?.getCenter().lng, color: "green" },
    ];
    setMarkers(oldMarkers);
    setSelectedPlace(false);
  };

  const onAddressSelected = (point: number[]) => {
    map?.setCenter({
      lat: point[1],
      lng: point[0],
    });
  };
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        const reqData = {
          ...data,
          start: `${startPoint?.lat};${startPoint?.lng}`,
          end: `${endPoint?.lat};${endPoint?.lng}`
        }
        const response = await axios.post("https://quer-carona-back-end.onrender.com/corridas/", reqData, {withCredentials: true});
        router.replace("/escolha");
    } catch (error) {
        console.error();
    }
  };

  return (
    <div className="w-full h-full mx-auto flex flex-col items-center justify-center">
      <main className="bg-black-900 w-full h-full rounded flex flex-col">
        <Start />
        <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center flex-1">
          <div className="flex flex-col items-center space-y-2 px-2 w-full h-full max-h-[90%]">
            <div className="flex flex-row px-2 w-full items-center">
              <div className="flex justify-center flex-1">
                {currentStep == 0 && (
                  <h1 className="text-white ">De onde você vai sair?</h1>
                )}
                {currentStep == 1 && (
                  <h1 className="text-white ">Qual o destino?</h1>
                )}
                {currentStep == 2 && (
                  <h1 className="text-white ">Deseja confirmar?</h1>
                )}
              </div>
              {currentStep == 0 && (
                <div className="p-4">
                  <button
                    type="button"
                    onClick={(event) => {
                      getSelectedPositionStart();
                      setCurrentStep(1);
                    }}
                  >
                    <AiOutlineArrowRight color="white" size={25} />
                  </button>
                </div>
              )}
              {currentStep == 1 && (
                <div className="p-4">
                  <button
                    type="button"
                    onClick={(event) => {
                      getSelectedPositionEnd();
                      setCurrentStep(2);
                    }}
                  >
                    <AiOutlineCheck color="white" size={25} />
                  </button>
                </div>
              )}
            </div>

            <MyMap selectPlace={selectedPlace} markers={markers} />
            {currentStep == 0 ||
              (currentStep == 1 && (
                <div className="w-full">
                  <AddressAutofill
                    onRetrieve={(res) => {
                      onAddressSelected(res.features[0].geometry.coordinates);
                    }}
                    accessToken="pk.eyJ1IjoiZ3Vuc2JsYXppbiIsImEiOiJjbGNtcG00cjIwdG9nM29yMDE1enNpOXByIn0.Jjga3PH602hNS7V9iH0iJg"
                  >
                    <input
                      className="bg-slate-900 rounded border-b-2 border-yellow-900 text-white p-2 w-full"
                      type="text"
                      placeholder="Insira o endereço completo"
                      autoComplete="address"
                    />
                  </AddressAutofill>
                </div>
              ))}
            {currentStep == 2 && (
              <>
              <div className="w-full p-2 md:space-x-2 flex flex-col md:flex-row justify-evenly items-center">
                <div className="md:w-1/2 w-full justify-center">
                  <input
                    className="bg-slate-900 p-2 rounded border-b-2 border-yellow-900 text-white w-full"
                    type="number"
                    max={5}
                    id="vagas"
                    name="vagas"
                    onChange={handleChange}
                    placeholder="Quantas vagas disponíveis?"
                  />
                </div>
                <div className="md:w-1/2 w-full justify-center">
                  <input
                    className="bg-slate-900 p-2 rounded border-b-2 border-yellow-900 text-white w-full"
                    type="text"
                    id="horario"
                    name="horario"
                    onChange={handleChange}
                    pattern="([0-9]|0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]"
                    placeholder="Qual o horário de saída?"
                  />
                </div>
                
              </div>
              <div className="w-full p-2 md:space-x-2 md:space-x-0 space-y-2 flex flex-col md:flex-row justify-evenly items-center">
                <div className="md:w-1/2 w-full flex justify-center">
                  <button type="submit" className="w-full md:w-1/2 rounded-[5px] bg-yellow-900 cursor-pointer p-2 shadow text-black-900 font-bold text-lg hover:bg-yellow-300">
                    Salvar
                  </button>
                </div>
                
              </div>
              </>
              
            )}
          </div>
          {currentStep == 0 && (
            <button
              className="flex flex-row gap-2 items-center justify-center w-[250px]"
              type="button"
              onClick={getUserLocation}
            >
              <IoMdCompass className="text-yellow-900 w-[20px] h-[40px]" />
              <p className="text-yellow-900 text-sm">Usar localização atual</p>
            </button>
          )}
        </form>
        <div className="flex justify-around items-center w-full h-[70px] bg-slate-900 rounded border-t-2 border-yellow-900">
          <div className="flex flex-col items-center text-white text-xs hover:text-yellow-900">
            <Link
              className="flex flex-col justify-center items-center"
              href="/pegarcarona"
            >
              <AiOutlineMonitor className="w-[30px] h-[30px] text-white hover:text-yellow-900" />{" "}
              Procurar
            </Link>
          </div>
          <div className="flex flex-col items-center text-yellow-900 text-xs cursor-pointer">
            <Link
              className="flex flex-col justify-center items-center"
              href="/oferecercarona"
            >
              <IoMdCompass className="w-[30px] h-[30px] text-yellow-900" />{" "}
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
