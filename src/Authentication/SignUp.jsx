import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, BookOpen, LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../supabase-client';

export default function SignUp() {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });      // useSTate to store the create account information 

    const [showPassword, setShowPassword] = useState(false);  // To make the manage password visibility state
    const [errors, setErrors] = useState({}); // state variable for storing form validation errors
    const [message, setMessage] = useState(""); // state variable to store error/succes message from supabase authentication
    const [loading, setLoading] = useState(false); // loading state to ensure that create account is not done more than once
    const navigate = useNavigate(); // to state variable to navigate to login page

    const handleInputChange = (e) => {
        const { name, value, } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        })); // to validate form and save information

        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        return newErrors;
    };// validate form function ensures that are fields have a correctly typed input

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

        const newErrors = validateForm();

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
            });

            if (error) {
                setMessage(error.message);
            } else if (data?.user?.identities?.length === 0) {
                setMessage("This email is already registered. Try logging in.");
            } else {
                setMessage("Account created successfully! Check your email to confirm your address.");
                setFormData({ email: '', password: '' });
                setTimeout(()=> navigate("/login"), 5000)
            }
        } catch (err) {
            setMessage("An unexpected error occurred. Please try again.");
        }

        setLoading(false);
    };



    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">


            <div className="w-full max-w-md">
                {message && (
                    <div className={`text-center text-sm font-medium p-2 mb-5 rounded ${message.toLowerCase().includes("success")
                        ? "text-green bg-green-100"
                        : "text-red bg-red-100"
                        }`}>
                        {message}
                    </div>
                )}
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-black mb-2">Welcome to droppblog</h2>
                        <p className="text-gray-600">Create an account </p>
                        <p>Your No1 blog site 💅💅💅💅 Purr</p>
                    </div>

                    <div className="space-y-6">
                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="your@email.com"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        {/* Submit buttonto  message show if errors are available or account created succesfully */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className={`w-full bg-black text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all
    ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 focus:ring-4 focus:ring-gray-300'}`}
                        >
                            <LogIn className="w-5 h-5" />
                            <span>{loading ? "Creating..." : "Create Account"}</span>
                        </button>

                        {/* Forgot Password */}
                        <div className="text-center">
                            <Link to={"/forgotPassword"} className="text-black hover:text-gray-700 text-sm font-medium underline transition-colors">
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    {/* bottom */}
                    <div className="text-center mt-8 pt-6 border-t border-gray-200">
                        <p className="text-gray-600 text-sm">
                            Don't have an account?{' '}
                            <Link to={"/login"} className="text-black hover:text-gray-700 font-semibold underline">
                                Create one here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}