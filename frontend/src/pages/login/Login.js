import axios from "axios";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Leaf } from "lucide-react";
import UseAxiosPublic from "../../hook/UseAxiosPublic";
import UseAuth from "../../hook/UseAuth";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [preview, setPreview] = useState(null);
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const navigate=useNavigate()
  const {loginUser}=UseAuth()

  const email = watch("email"); // listen to email input

  useEffect(() => {
    const fetchUser = async () => {
      if (!email) {
        setPreview(null);
        return;
      }
      try {
        const res = await axios.get(`https://organicfarm-wal6.vercel.app/api/getUserByEmail?email=${email}`);
        if (res.data?.user?.image) {
          setPreview(res.data.user.image);
        } else {
          setPreview(null);
        }
      } catch (err) {
        setPreview(null);
      }
    };

    // add small debounce so it doesn’t spam API
    const delay = setTimeout(fetchUser, 500);
    return () => clearTimeout(delay);
  }, [email]);

  const onSubmit = async (data) => {
    console.log('Login Data:', data);
    try {
      const res = await loginUser(data.email,data.password)
      console.log(res.data);
      if(res.success){
        navigate('/')
      }
    } catch (error) {
      console.error("Login failed:", error.response?.data || error.message);
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
              className="rounded-xl shadow-lg border border-white/40 w-48 h-48 object-cover"
            />
          ) : (
            <p className="text-white text-lg">Welcome Back</p>
          )}
        </div>

        {/* Right side - Form */}
        <div className="w-1/2 p-8">
          <h2 className="text-3xl font-bold text-white mb-6">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">

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
            <p>Dont have an account ? <Link to={'/register'}><span className="text-yellow-800 font-bold">Click</span></Link></p>
            <button
              type="submit"
              className="w-full py-3 rounded-lg bg-gradient-to-r from-green-500 to-lime-400 text-white font-bold shadow-lg hover:opacity-90 transition"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
