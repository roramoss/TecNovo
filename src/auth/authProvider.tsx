// Lo que voy a conectar con el black para la base de datos de los usuarios


import React, { useContext, createContext, useState } from "react";

interface AuthProviderProps {
    children: React.ReactNode;
}

const AuthContext = createContext({
    isAuthenticated: false,
});

export function AuthProvider({ children }: AuthProviderProps) {
    const [isAuthenticated, setIsAuthenticated] = useState(true);

    return (
        <AuthContext.Provider value={{ isAuthenticated }}>
            {children}   
        </AuthContext.Provider>
    );
}


export const useAuth = () => useContext(AuthContext);




