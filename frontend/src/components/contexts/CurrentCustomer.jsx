import { createContext, useEffect, useState } from "react";

export const CurrentCustomer = createContext()

function CurrentCustomerProvider({ children }) {
    
    const [currentCustomer, setCurrentCustomer] = useState(null)

    useEffect(() => {
        const getLoggedInCustomer = async () => {
            let response = await fetch("http://localhost:3000/authentication/profile", {
                credentials: "include"
            });
            let customer = await response.json();
            setCurrentCustomer(customer);
        };
        getLoggedInCustomer()
    }, []);

    return (
        <CurrentCustomer.Provider value={{ currentCustomer, setCurrentCustomer }}>
            {children}
        </CurrentCustomer.Provider>
    );
}

export default CurrentCustomerProvider;

