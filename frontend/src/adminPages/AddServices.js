import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import UseAxiosSecure from '../hook/UseAxiosSecure';

const AddServices = ({ onClose, onServiceAdded }) => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    const axiosSecure = UseAxiosSecure();

    const onSubmit = async (data) => {
        const formData = new FormData();
        formData.append('name', data.name);
        formData.append('category', data.category);
        formData.append('description', data.description);
        formData.append('price', data.price);
        formData.append('duration', data.duration);
        if (data.profileImage && data.profileImage[0]) {
            formData.append('profileImage', data.profileImage[0]);
        }

        try {
            setLoading(true);
            await axiosSecure.post('/add_service', formData, {
                headers: { 'Content-Type': 'multipart/form-data' }
            });
            onServiceAdded();
            reset(); // ✅ Clear form after submit
        } catch (error) {
            console.error('Error adding service', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white p-6 rounded-lg w-96">
                <h2 className="text-xl font-bold mb-4">Add New Service</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        type="text"
                        placeholder="Service Name"
                        className="border p-2 w-full"
                        {...register('name', { required: 'Service name is required' })}
                    />
                    {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}

                    <input
                        type="text"
                        placeholder="Category"
                        className="border p-2 w-full"
                        {...register('category', { required: 'Category is required' })}
                    />
                    {errors.category && <p className="text-red-500 text-sm">{errors.category.message}</p>}

                    <textarea
                        placeholder="Description"
                        className="border p-2 w-full"
                        {...register('description', { required: 'Description is required' })}
                    />
                    {errors.description && <p className="text-red-500 text-sm">{errors.description.message}</p>}

                    <input
                        type="number"
                        placeholder="Price"
                        className="border p-2 w-full"
                        {...register('price', { required: 'Price is required', valueAsNumber: true })}
                    />
                    {errors.price && <p className="text-red-500 text-sm">{errors.price.message}</p>}

                    <input
                        type="text"
                        placeholder="Duration (e.g., 30 mins)"
                        className="border p-2 w-full"
                        {...register('duration', { required: 'Duration is required' })}
                    />
                    {errors.duration && <p className="text-red-500 text-sm">{errors.duration.message}</p>}

                    <input
                        type="file"
                        {...register('profileImage')}
                    />

                    <div className="flex justify-end gap-2 mt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="bg-gray-400 text-white px-4 py-2 rounded"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded"
                            disabled={loading}
                        >
                            {loading ? 'Saving...' : 'Save'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddServices;
