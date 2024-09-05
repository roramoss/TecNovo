// Lo que voy a conectar con el black para la base de datos de los usuarios


import React, { useContext, createContext, useState } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
});

//Componente que esta validando constantemente si existe autenticacion o no para dejar pasar a la ruta que estan protegidas, podra acceder de nuestro usuario de la informacion que mandemos del back al fron
export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(true
        
    );

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}   
        </AuthContext.Provider>
    );
}


export const useAuth = () => useContext(AuthContext);




