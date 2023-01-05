import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/img/QuerCaronaLogo2.png";
import Lines from "../components/Lines";
import Icons from "../components/Icons";
import Footer from "../components/Footer";
import { ChangeEvent, FormEvent, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Head from "next/head";
export default function Cadastro() {
  const [data, setData] = useState({
    nome: "",
    email: "",
    senha: "",
    isenha: "",
  });
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;
    setData((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasError(false);
    console.log(data);
    if (data.senha !== data.isenha) {
      setHasError(true);
      return;
    }
    const finalData = {
      nome: data.nome,
      email: data.email,
      data_nascimento: new Date(),
      senha: data.senha,
    };
    await axios.post("http://localhost:3001/users/", finalData);
    router.push("/escolha");
  };

  return (
    <div className="max-w=[375px] max-h=[670] mx-auto flex flex-col items-center justify-center mt-4">
      <Head>
        <title>Cadastro</title>
      </Head>
      <Image src={logo} alt="Logo princinpal do App" />
      <h1 className="text-white text-lg mb-8">Crie sua conta gratuita</h1>
      <main className="w-[281px]">
        <form className="flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col gap-1 ">
            <label className=" text-slate-300 mb-1" htmlFor="nome">
              Seu nome
            </label>
            <input
              className="h-9 p-2 bg-slate-900 rounded text-white"
              id="nome"
              name="nome"
              required
              type="text"
              placeholder="Digite seu nome"
              value={data.nome}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-300 mb-1" htmlFor="email">
              {" "}
              Seu e-mail
            </label>
            <input
              className="h-9 p-2 bg-slate-900 rounded text-white"
              id="email"
              name="email"
              required
              type="email"
              placeholder="Digite seu e-mail"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-300 mb-1" htmlFor="senha">
              {" "}
              Sua senha
            </label>
            <input
              className="h-9 p-2 bg-slate-900 rounded text-white"
              name="senha"
              id="senha"
              required
              type="password"
              placeholder="Digite sua senha"
              value={data.senha}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-slate-300 mb-1" htmlFor="isenha">
              {" "}
              Confirme sua senha
            </label>
            <input
              className="h-9 p-2 bg-slate-900 rounded text-white"
              name="isenha"
              id="isenha"
              required
              type="password"
              placeholder="Confirme sua Senha"
              value={data.isenha}
              onChange={handleChange}
            />
          </div>
          {hasError ? (
            <span className="text-xl text-red-400">
              Verifique os campos e tente novamente.
            </span>
          ) : (
            <div></div>
          )}
          <div className="flex items-center justify-center">
            <button
              className=" bg-white rounded mt-1 p-1 w-[150px]"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}