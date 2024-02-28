import React, { useState } from 'react';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import CorporateProfileForm from '@/Components/CorporateProfileForm';

export default function Dashboard({ auth }) {
    const [showCorporateProfileForm, setShowCorporateProfileForm] = useState(false);

    const handleCorporateProfileClick = () => {
        setShowCorporateProfileForm((prev) => !prev);
    };

    return (
        <AuthenticatedLayout 
            user={auth.user}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900">You're logged in!</div>
                    </div>
                    <br />
                    {/* Button to trigger Corporate Profile form */}
                    <button onClick={handleCorporateProfileClick}>Corporate Profile</button>

                    {/* Conditionally render CorporateProfileForm */}
                    {showCorporateProfileForm && <CorporateProfileForm />}
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
