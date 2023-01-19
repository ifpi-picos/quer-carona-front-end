import { createContext, useContext, ReactNode, useState, useEffect } from "react";
import axios from "axios";

interface UserType {
    id: string;
    email: string;
    nome: string;
    data_nascimento: string;
    telefone: string;
}
interface AuthContextType {
    user?:  UserType | null;
    login: (email: string, password: string) => Promise<UserType>;
    logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export const useAuth = () => useContext<AuthContextType>(AuthContext);

export const AuthContextProvider = ({ children } : {children: ReactNode}) => {
    const [user, setUser] = useState<UserType | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getUser();
        setLoading(false);
    }, []);

    const getUser = async () => {
        try {
            const response = await axios.get("https://quer-carona-back-end.onrender.com/auth/me", {withCredentials: true});
            const user = response.data.user;
            setUser(user);
            return user;
        } catch (error) {
            console.log(error);
            
        }
    }

    const login = async (email: string, password: string) => {
        const data = {email, senha: password};
        try {
            const response = await axios.post("https://quer-carona-back-end.onrender.com/auth/login", data, {withCredentials: true});
            const user = response.data.user;
            setUser(user);
            return user;
        } catch (error) {
            console.log(error);
            
        }
    }
    const logout = async () => {
        try {
            await axios.post("https://quer-carona-back-end.onrender.com/auth/logout", {}, {withCredentials: true});
            setUser(null);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <AuthContext.Provider value={{user, login, logout}}>
            {loading ? null : children}
        </AuthContext.Provider>
    );
};