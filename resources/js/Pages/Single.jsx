import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 

const Single = () => {
    const { id } = useParams(); 
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        console.log('Fetching profile with ID:', id);
        const fetchProfile = async () => {
            try {
                const response = await fetch(`/api/corprofiles/${id}`);
                const jsonData = await response.json();
                console.log('Profile data:', jsonData);
                setProfile(jsonData);
            } catch (error) {
                console.error('Error fetching profile:', error);
            }
        };
        fetchProfile();
    }, [id]);
    

    if (!profile) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <img src={`http://127.0.0.1:8000/storage/${profile.image}`} alt="Profile Image" />
            <h2>{profile.name}</h2>
            {/* Display other profile details */}
        </div>
    );
};

export default Single;
