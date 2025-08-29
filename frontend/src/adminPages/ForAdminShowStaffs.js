import React, { useEffect, useState } from 'react';
import UseAxiosSecure from '../hook/UseAxiosSecure';
import AddStaff from './AddStaff';
import UpdateStaff from './UpdateStaff';


const ForAdminShowStaffs = () => {
    const [staffs, setStaffs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [limit] = useState(5);
    const [totalPages, setTotalPages] = useState(1);
    const [showAddModal, setShowAddModal] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [selectedStaff, setSelectedStaff] = useState(null);
    const axiosSecure = UseAxiosSecure();

    const fetchStaffs = async () => {
        try {
            setLoading(true);
            const res = await axiosSecure.get(`/all-staff?page=${page}&limit=${limit}`);
            setStaffs(res.data.data.staffs);
            setTotalPages(res.data.data.totalPages);
        } catch (error) {
            console.error("Error fetching staffs", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStaffs();
    }, [page]);

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleStaffAdded = () => {
        setShowAddModal(false);
        fetchStaffs(); // refresh the list
    };

    const handleStaffUpdated = () => {
        setShowEditModal(false);
        fetchStaffs(); // refresh the list
    };


    const handleDelete = async (id) => {
        if (!window.confirm("Are you sure you want to delete this staff?")) return;

        try {
            await axiosSecure.delete(`/staff/${id}`);
            fetchStaffs(); // refresh after deletion
        } catch (error) {
            console.error("Error deleting staff", error);
        }
    };

    const handleEdit = (staff) => {
        // Future implementation: open edit modal with staff data
        setSelectedStaff(staff);
        console.log(staff);
        setShowEditModal(true);
        console.log("Edit staff:", staff);
        alert(`Edit feature coming soon for ${staff.name}`);
    };

    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xl font-bold">Staffs</h1>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
                    onClick={() => setShowAddModal(true)}
                >
                    Add Staff
                </button>
            </div>

            {loading ? (
                <div>Loading...</div>
            ) : (
                <table className="w-full border border-gray-400 border-collapse">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="py-2 px-4 border border-gray-400 text-center">Name</th>
                            <th className="py-2 px-4 border border-gray-400 text-center">Email</th>
                            <th className="py-2 px-4 border border-gray-400 text-center">Phone</th>
                            <th className="py-2 px-4 border border-gray-400 text-center">Role</th>
                            <th className="py-2 px-4 border border-gray-400 text-center">Created By</th>
                            <th className="py-2 px-4 border border-gray-400 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {staffs.map((staff) => (
                            <tr key={staff._id} className="hover:bg-gray-100">
                                <td className="py-2 px-4 border border-gray-400 text-center">{staff.name}</td>
                                <td className="py-2 px-4 border border-gray-400 text-center">{staff.email}</td>
                                <td className="py-2 px-4 border border-gray-400 text-center">{staff.phone}</td>
                                <td className="py-2 px-4 border border-gray-400 text-center">{staff.role}</td>
                                <td className="py-2 px-4 border border-gray-400 text-center">
                                    {staff.createdBy ? `${staff.createdBy.name} (${staff.createdBy.email})` : 'N/A'}
                                </td>
                                <td className="py-2 px-4 border border-gray-400 text-center">
                                    <button
                                        onClick={() => handleEdit(staff)}
                                        className="bg-yellow-400 hover:bg-yellow-500 text-white py-1 px-3 rounded mr-2"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        onClick={() => handleDelete(staff._id)}
                                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
                                    >
                                        Delete
                                    </button>
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

            {/* Add Staff Modal */}
            {showAddModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                        <AddStaff
                            onClose={() => setShowAddModal(false)}
                            onStaffAdded={handleStaffAdded}
                        />
                    </div>
                </div>
            )}
            {
                showEditModal && selectedStaff && (
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
                        <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full">
                            <UpdateStaff
                                staffId={selectedStaff._id}
                                onClose={() => setShowEditModal(false)}
                                onStaffUpdated={handleStaffUpdated}
                            />
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default ForAdminShowStaffs;
