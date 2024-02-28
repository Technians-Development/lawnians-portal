import React, { useState } from 'react';

const CorporateProfileForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        tagline: '',
        profession: '',
        location: '',

    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleImageChange = (e) => {
        setFormData({
            ...formData,
            image: e.target.files[0], // Update image state
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const formDataToSend = new FormData();
            formDataToSend.append('name', formData.name);
            formDataToSend.append('email', formData.email);
            formDataToSend.append('tagline', formData.tagline);
            formDataToSend.append('profession', formData.profession);
            formDataToSend.append('location', formData.location);
            formDataToSend.append('image', formData.image); // Include image in FormData

            const response = await fetch('/submit', {
                method: 'POST',
                body: formDataToSend,
            });
            if (response.ok) {
                // Clear form fields on successful submission
                setFormData({
                    name: '',
                    email: '',
                    tagline: '',
                    profession: '',
                    location: '',
                    image: null,
                });
                // Handle successful submission
                alert('Corporate profile created successfully');
            } else {
                // Handle error
                alert('Failed to create corporate profile');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name: <input type="text" name="name" value={formData.name} onChange={handleChange} required />
            </label><br /><br />
            <label>
                Email: <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            </label><br /><br />
            <label>
                Tagline: <input type="text" name="tagline" value={formData.tagline} onChange={handleChange} />
            </label><br /><br />
            <label>
                Profession:
                <select name="profession" value={formData.profession} onChange={handleChange}>
                    <option value="">Choose profession...</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Designer">Designer</option>
                    <option value="Doctor">Doctor</option>
                    <option value="Lawyer">Lawyer</option>
                    <option value="Teacher">Teacher</option>
                </select>
            </label><br /><br />
            <label>
                Location:
                <select name="location" value={formData.location} onChange={handleChange}>
                    <option value="">Choose location...</option>
                    <option value="Delhi">Delhi</option>
                    <option value="Rajasthan">Rajasthan</option>
                    <option value="Gurgaon">Gurgaon</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Bengalore">Bengalore</option>
                </select>
            </label><br /><br />
            <label>
                Image: <input type="file" name="image" onChange={handleImageChange} accept="image/*" />
            </label><br /><br />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CorporateProfileForm;
