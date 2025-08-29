import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Leaf } from "lucide-react";
import { Link } from "react-router-dom";

const Register = () => {
  const [preview, setPreview] = useState(null);
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log('Form Data:', data);
    console.log('Profile Image File:', data.profileImage[0]); 
    const formData = new FormData();
    formData.append('name', data.name)
    formData.append('email', data.email)
    formData.append('password', data.password)
    if (data.profileImage[0]) {
      formData.append('profileImage', data.profileImage[0]);
    }

    const res = await axios.post('https://organicfarm-wal6.vercel.app/api/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(res.data)
    return res.data
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-600 via-green-500 to-lime-400 p-6 relative overflow-hidden">
      
      {/* Decorative Leaves */}
      <Leaf className="absolute top-10 left-10 text-white/20 w-32 h-32 rotate-12" />
      <Leaf className="absolute bottom-20 right-16 text-white/20 w-40 h-40 -rotate-45" />
      <Leaf className="absolute top-1/2 left-1/4 text-white/10 w-48 h-48 -rotate-12" />
      <Leaf className="absolute top-1/3 right-1/3 text-white/15 w-36 h-36 rotate-6" />

      {/* Main Card */}
      <div className="flex bg-white/20 sm:backdrop-blur-lg backdrop-blur-none rounded-2xl overflow-hidden shadow-2xl max-w-4xl w-full border border-white/30 relative z-10">


        {/* Left side - Image Preview */}
        <div className="w-1/2 flex items-center justify-center p-6 bg-white/10">
          {preview ? (
            <img
              src={preview}
              alt="Preview"
              className="rounded-xl shadow-lg border border-white/40"
            />
          ) : (
            <p className="text-white text-lg">Image Preview</p>
          )}
        </div>

        {/* Right side - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Register</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

            <div>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: "Name is required" })}
                className="w-full px-4 py-2 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.name && <p className="text-red-200 text-sm">{errors.name.message}</p>}
            </div>

            <div>
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: "Email is required" })}
                className="w-full px-4 py-2 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.email && <p className="text-red-200 text-sm">{errors.email.message}</p>}
            </div>

            <div>
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: "Password is required" })}
                className="w-full px-4 py-2 rounded-lg bg-white/70 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              {errors.password && <p className="text-red-200 text-sm">{errors.password.message}</p>}
            </div>

            <div>
              <input
                type="file"
                accept="image/*"
                {...register("profileImage")}
                onChange={handleImageChange}
                className="w-full px-4 py-2 rounded-lg bg-white/70 cursor-pointer"
              />
            </div>
            <p>Allready have an account ? <Link to={'/login'}><span className="text-yellow-600 font-bold">Click</span></Link></p>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-lime-400 text-white font-bold shadow-lg hover:opacity-90 transition"
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
