import React, { createContext, useEffect, useState } from "react";

export const CurrentCustomer = createContext();

function CurrentCustomerProvider({ children }) {
    const [currentCustomer, setCurrentCustomer] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getLoggedInCustomer = async () => {
            try {
                let response = await fetch("http://localhost:3000/authentication/profile", {
                    credentials: "include",
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                let customer = await response.json();
                console.log('Fetched customer:', customer);
                setCurrentCustomer(customer);
            } catch (error) {
                console.error("Failed to fetch customer:", error);
                setCurrentCustomer(null);
            } finally {
                setLoading(false);
            }
        };

        getLoggedInCustomer();
    }, []);

    return (
        <CurrentCustomer.Provider value={{ currentCustomer, setCurrentCustomer, loading }}>
            {children}
        </CurrentCustomer.Provider>
    );
}

export default CurrentCustomerProvider;
