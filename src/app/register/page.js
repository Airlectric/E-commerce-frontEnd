"use client"
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import axiosInstance from '../utils/axiosInstance';
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Register() {
  const [form, setForm] = useState({ username: '', email: '', password: '', profile: { role: 'USER' } });
  const router = useRouter();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'role') {
      setForm({ ...form, profile: { ...form.profile, role: value } });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axiosInstance.post('/register/', form);
      toast.success('Registration successful!');
      router.push('/login');
    } catch (error) {
      toast.error('Error during registration');
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                name="username"
                className="form-control"
                placeholder="Enter your username"
                value={form.username}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="Create a password"
                value={form.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Role</label>
              <select
                name="role"
                className="form-select"
                value={form.profile.role}
                onChange={handleChange}
              >
                <option value="USER">User</option>
                <option value="SHOP_OWNER">Shop Owner</option>
              </select>
            </div>
            <button type="submit" className="btn btn-primary w-100">Register</button>
          </form>
          <ToastContainer />
        </div>
      </div>
    </div>
  );
}
