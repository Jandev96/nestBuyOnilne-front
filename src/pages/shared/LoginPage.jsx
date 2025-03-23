import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("http://localhost:3000/api/user/login", data, { withCredentials: true });
      alert(response.data.message);
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="hero bg-base-200 min-h-screen flex items-center justify-center">
      <div className="card bg-base-100 w-full max-w-sm shadow-2xl p-6">
        <h1 className="text-3xl font-bold text-center mb-4">Login</h1>

        {/* Email Input */}
        <label className="label">Email</label>
        <input type="email" className="input input-bordered w-full" placeholder="Email" {...register("email", { required: "Email is required" })} />
        {errors.email && <p className="text-red-500">{errors.email.message}</p>}

        {/* Password Input */}
        <label className="label mt-2">Password</label>
        <input type="password" className="input input-bordered w-full" placeholder="Password" {...register("password", { required: "Password is required" })} />
        {errors.password && <p className="text-red-500">{errors.password.message}</p>}

        {/* Submit Button */}
        <button type="submit" className="btn btn-neutral mt-4 w-full">Login</button>
      </div>
    </form>
  );
}
