import React, { useEffect, useState } from 'react';
import axios from 'axios';
import AddServices from './AddServices';
import UpdateService from './UpdateService';

const ForAdminShowServices = () => {
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [limit] = useState(5);
    const [totalPages, setTotalPages] = useState(1);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showUpdateModal, setShowUpdateModal] = useState(false);
    const [selectedServiceId, setSelectedServiceId] = useState(null);

    const fetchServices = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`http://localhost:8080/api/all_services?page=${page}&limit=${limit}`);
            setServices(res.data.data.services);
            setTotalPages(res.data.data.totalPages);
        } catch (error) {
            console.error("Error fetching services", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchServices();
    }, [page]);

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleServiceAdded = () => {
        setShowAddModal(false);
        fetchServices(); // refresh the list
    };

    const handleServiceUpdated = () => {
        setShowUpdateModal(false);
        fetchServices(); // refresh the list
    };

    const handleEdit = (serviceId) => {
        setSelectedServiceId(serviceId);
        setShowUpdateModal(true);
    };

    return (
        <div className="p-6">
            {/* Header */}
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">All Services</h1>
                <button
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                    onClick={() => setShowAddModal(true)}
                >
                    + Add Service
                </button>
            </div>

            {/* Table */}
            {loading ? (
                <p>Loading services...</p>
            ) : (
                <table className="w-full border border-gray-300 rounded shadow">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="border p-2">Image</th>
                            <th className="border p-2">Name</th>
                            <th className="border p-2">Category</th>
                            <th className="border p-2">Price</th>
                            <th className="border p-2">Duration</th>
                            <th className="border p-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {services.map((service) => (
                            <tr key={service._id} className="text-center">
                                <td className="border p-2">
                                    <img
                                        src={service.profileImage || "https://via.placeholder.com/50"}
                                        alt={service.name}
                                        className="w-12 h-12 object-cover rounded"
                                    />
                                </td>
                                <td className="border p-2">{service.name}</td>
                                <td className="border p-2">{service.category}</td>
                                <td className="border p-2">${service.price}</td>
                                <td className="border p-2">{service.duration}</td>
                                <td className="border p-2">
                                    <button
                                        onClick={() => handleEdit(service._id)}
                                        className="bg-green-500 text-white px-2 py-1 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button className="bg-red-500 text-white px-2 py-1 rounded">Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}

            {/* Pagination */}
            <div className="flex justify-center items-center mt-4">
                <button
                    onClick={handlePrev}
                    disabled={page === 1}
                    className="px-4 py-2 border rounded mr-2 disabled:opacity-50"
                >
                    Previous
                </button>
                <span className="mx-2">Page {page} of {totalPages}</span>
                <button
                    onClick={handleNext}
                    disabled={page === totalPages}
                    className="px-4 py-2 border rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>

            {/* Add Service Modal */}
            {showAddModal && (
                <AddServices onClose={() => setShowAddModal(false)} onServiceAdded={handleServiceAdded} />
            )}

            {/* Update Service Modal */}
            {showUpdateModal && selectedServiceId && (
                <UpdateService
                    serviceId={selectedServiceId}
                    onClose={() => setShowUpdateModal(false)}
                    onServiceUpdated={handleServiceUpdated}
                />
            )}
        </div>
    );
};

export default ForAdminShowServices;
