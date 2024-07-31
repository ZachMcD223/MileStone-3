import React, { useContext, useEffect, useState } from 'react';
import { CurrentCustomer } from './users/CurrentCustomer';
import "aos/dist/aos.css";
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const { currentCustomer, setCurrentCustomer } = useContext(CurrentCustomer);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentCustomer) {
            setLoading(false);
        }
    }, [currentCustomer]);

    const handleLogout = () => {
        
        setCurrentCustomer(null);
        
        navigate('/customers/sign-in');
    };

    if (loading) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl font-semibold">Loading...</div>
            </div>
        );
    }

    if (!currentCustomer || !currentCustomer.email) {
        return (
            <div className="flex justify-center items-center h-screen">
                <div className="text-2xl font-semibold">Please log in to view your profile.</div>
            </div>
        );
    }

    return (
        <div className="bg-gray-100 min-h-screen py-4 px-6">
            <section className="w-full max-w-2xl bg-white p-8 rounded-lg shadow-lg mx-auto mt-32">
                <h1 className="text-4xl font-bold text-center mb-8">Profile</h1>
                <div className="space-y-4 mb-8">
                    <p className="text-xl"><strong>Email:</strong> {currentCustomer.email}</p>
                    <p className="text-xl"><strong>First Name:</strong> {currentCustomer.first_name}</p>
                    <p className="text-xl"><strong>Last Name:</strong> {currentCustomer.last_name}</p>
                    <p className="text-xl"><strong>Phone:</strong> {currentCustomer.phone}</p>
                    <p className="text-xl"><strong>Address:</strong> {currentCustomer.address}</p>
                </div>
                <div className="text-center">
                    <button
                        onClick={handleLogout}
                        className="bg-red-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-red-700 transition duration-300"
                    >
                        Log Out
                    </button>
                </div>
            </section>
        </div>
    );
}

export default ProfilePage;
