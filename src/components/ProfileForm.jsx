// ProfileForm.js
import React, { useState } from 'react';
import useAppStore from '../appStore';
import { useNavigate } from "react-router-dom";

const ProfileForm = () => {
    const navigate = useNavigate();
    const { updateUserData } = useAppStore();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        bio: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can perform further actions, such as sending the data to a server, here
        console.log('Form submitted with data:', formData);
        updateUserData(formData);
        navigate('/');
    };

    return (
        <div className="max-w-md mx-auto mt-8 p-6 bg-white rounded-md shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Profile Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-600">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-600">
                        Bio
                    </label>
                    <textarea
                        id="bio"
                        name="bio"
                        value={formData.bio}
                        onChange={handleChange}
                        className="mt-1 p-2 w-full border rounded-md"
                        rows="3"
                    ></textarea>
                </div>
                <div className="text-right">
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                    >
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
};

export default ProfileForm;
