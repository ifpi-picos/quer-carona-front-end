import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/img/QuerCaronaLogo2.png";
import Lines from "../components/Lines";
import Icons from "../components/Icons";
import Footer from "../components/Footer";
import { ChangeEvent, FormEvent, useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../contexts/AuthContext";

export default function Login() {
  const [data, setData] = useState({
    email: "",
    senha: "",
  });
  const [hasError, setHasError] = useState(false);
  const router = useRouter();
  const { login } = useAuth();
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const name = (event.target as HTMLInputElement).name;
    const value = (event.target as HTMLInputElement).value;
    setData((values) => ({ ...values, [name]: value }));
  };
  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasError(false);
    try {
        await login(data.email, data.senha);
        router.push("/escolha");
    } catch (error) {
        console.error();
    }
  };
  return (
    <div className="max-w=[375px] max-h=[670] mx-auto flex flex-col items-center justify-center mt-4">
      <Image src={logo} alt="Logo princinpal do App" />
      <h1 className="text-white mb-8 text-lg">Fazer login</h1>
      <main className="flex flex-col gap-2">
        <form className="flex flex-col gap-3" onSubmit={(e) => handleSubmit(e)}>
          <div className="flex flex-col">
            <label className="text-slate-300 mb-1" htmlFor="email">
              E-mail
            </label>
            <input
              className="h-9 p-2 rounded bg-slate-900 text-white"
              type="email"
              name="email"
              id="email"
              placeholder="example@email.com"
              value={data.email}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-slate-300 mb-1" htmlFor="senha">
              Senha
            </label>
            <input
              className="h-9 p-2 rounded bg-slate-900 text-white"
              type="password"
              name="senha"
              id="senha"
              placeholder="Sua senha"
              value={data.senha}
              onChange={handleChange}
            />
          </div>
          <div>
            <button className="text-yellow-900 text-xs hover:bg-yellow-300" type="button">
              <Link href="/">Esqueceu sua senha?</Link>
            </button>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-white rounded mt-1 p-1 w-[150px] hover:bg-slate-300"
              type="submit"
            >
              Entrar
            </button>
          </div>
        </form>
        <Lines></Lines>
        <Icons></Icons>
      </main>
    </div>
  );
}
