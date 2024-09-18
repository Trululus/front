import { createContext, useState, useContext, useEffect } from 'react';
import { registerRequest, loginRequest , verififyTokenRequest} from '../api/auth.js';
import Cookies from 'js-cookie';

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [errors, setErrors] = useState([]); // Inicializado como un array vacío

    const signup = async (data) => {
        try {
            const response = await registerRequest(data);
            setUser(response.data);
            setIsAuthenticated(true);
            setErrors([]); // Limpiar errores si el registro es exitoso
        } catch (err) {
            console.log(err.response.data);
            const errorMessages = Object.values(err.response.data); // Convertir a array
            setErrors(errorMessages); // Guardar los errores como array
        }
    }

    const login = async (user) => {
        try {
            const response = await loginRequest(user);
            console.log(response);
            setIsAuthenticated(true);
            setUser(response.data);
            setErrors([]); // Limpiar errores si el login es exitoso
        } catch (err) {
            console.log(err.response);
            const errorMessages = err.response?.data ? Object.values(err.response.data) : ['Error de autenticación']; 
            setErrors(errorMessages); // Guardar los errores como array
        }
    }

    useEffect(() => {
        if (errors.length > 0) {
            const timer = setTimeout(() => {
                setErrors([]);
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [errors]);

    useEffect(() => {
        async function checkLogin() {
            const cookies = Cookies.get(); // Solo obtener el token

            if (cookies.token) {
                try{
                    const res = await verififyTokenRequest(cookies.token)
                    if (!res.data) setIsAuthenticated(false);

                    setIsAuthenticated(true);
                    setUser(res.data);
                }catch(err){
                    setIsAuthenticated(false);
                    setUser(null);
                    setErrors(['Token no valido']);
                }
        }
    }
    checkLogin();
    }, []);

    return (
        <AuthContext.Provider value={{
            signup,
            login,
            user,
            isAuthenticated,
            errors // Pasar el array de errores
        }}>
            {children}
        </AuthContext.Provider>
    );
}
