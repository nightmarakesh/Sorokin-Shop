import { createContext, useContext, useState, useEffect } from "react";

const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
    const [userData, setUserData] = useState(() => {
        const saved = localStorage.getItem('userData');
        return saved ? JSON.parse(saved) : {
            name: '',
            email: '',
            phone: '',
            address: ''
        };
    });

    useEffect(() => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }, [userData]);

    const onUpdateUser = (data) => {
        setUserData(data);
    };

    return (
        <UserContext.Provider value={{ userData, onUpdateUser }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within UserProvider');
    }
    return context;
};