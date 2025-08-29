import React, { useState } from "react";
import { Form, set, useForm } from "react-hook-form";
import UseAxiosSecure from "../hook/UseAxiosSecure";

const AddStaff = ({ onClose, onStaffAdded }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const axiosSecure = UseAxiosSecure();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    const formData=new FormData();
    formData.append("name",data.name);
    formData.append("email",data.email);
    formData.append("password",data.password);
    formData.append("role",data.role);
    formData.append("phone",data.phone);
    if(data.profileImage && data.profileImage[0]){
        formData.append("profileImage",data.profileImage[0]);
    }
    formData.append("address",data.address);
    formData.append("active",data.active);
    try{
      setLoading(true);
      await axiosSecure.post('/create-staff',formData,{
        headers:{
            'Content-Type':'multipart/form-data'
        }
      })
      onStaffAdded()
      reset(); // ✅ Clear form after submit
    }catch(error){
        console.error("Error adding staff",error);
    }finally{
        setLoading(false);
    }
  };

  return (
    <div className="p-6 bg-white shadow-lg rounded-2xl max-w-2xl mx-auto">
      <h2 className="text-xl font-bold mb-4">Add Staff</h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Name + Email */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Name</label>
            <input
              {...register("name", { required: "Name is required" })}
              className="w-full border rounded p-2"
              placeholder="Enter name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Email</label>
            <input
              type="email"
              {...register("email", { required: "Email is required" })}
              className="w-full border rounded p-2"
              placeholder="Enter email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>
        </div>

        {/* Password + Role */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Password</label>
            <input
              type="password"
              {...register("password", { required: "Password is required" })}
              className="w-full border rounded p-2"
              placeholder="Enter password"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Role</label>
            <select
              {...register("role", { required: "Role is required" })}
              className="w-full border rounded p-2"
            >
              <option value="">Select role</option>
              <option value="staff">Staff</option>
              <option value="manager">Manager</option>
              <option value="account">Account</option>
              <option value="client">Client</option>
            </select>
            {errors.role && (
              <p className="text-red-500 text-sm">{errors.role.message}</p>
            )}
          </div>
        </div>

        {/* Phone + Address */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block mb-1">Phone</label>
            <input
              {...register("phone", { required: "Phone is required" })}
              className="w-full border rounded p-2"
              placeholder="Enter phone number"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="block mb-1">Address</label>
            <input
              {...register("address")}
              className="w-full border rounded p-2"
              placeholder="Enter address"
            />
          </div>
        </div>

        {/* Profile Image */}
        <div>
          <label className="block mb-1">Profile Image URL</label>
          <input
          type="file"
            {...register("profileImage")}
            className="w-full border rounded p-2"
            placeholder="Enter image URL"
          />
        </div>

        {/* Active Status */}
        <div className="flex items-center space-x-2">
          <input type="checkbox" {...register("active")} />
          <label>Active</label>
        </div>

        {/* Buttons */}
        <div className="flex justify-end space-x-2">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded bg-gray-300"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 rounded bg-blue-600 text-white"
            disabled={loading}
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddStaff;
