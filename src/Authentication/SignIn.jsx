import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, BookOpen, LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../supabase-client';

const SignIn = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.email.trim()) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

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
            const { data, error } = await supabase.auth.signInWithPassword({
                email: formData.email,
                password: formData.password,
            });

            if (error) setMessage(error.message);
            else if (data?.user) {
                setMessage("Login successful! Redirecting...");
                setFormData({ email: '', password: '' });
                setTimeout(() => navigate("/"), 2000);
            }
        } catch (err) {
            console.error(err);
            setMessage("An unexpected error occurred. Please try again.");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4 sm:px-6 lg:px-8">
            <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-md mx-auto">
                {message && (
                    <div className={`text-center text-sm font-medium p-3 mb-5 rounded ${message.toLowerCase().includes("success")
                            ? "text-green-700 bg-green-100"
                            : "text-red-700 bg-red-100"
                        }`}>
                        {message}
                    </div>
                )}

                <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 sm:p-8">
                    <div className="text-center mb-6 sm:mb-8">
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                        </div>
                        <h2 className="text-2xl sm:text-3xl font-bold text-black mb-1">Welcome back to droppblog</h2>
                        <p className="text-sm sm:text-base text-gray-600">Your No1 blog site 💅💅💅💅 Purr</p>
                    </div>

                    <div className="space-y-5">
                        {/* Email Field */}
                        <div>
                            <label className="block text-sm font-medium text-black mb-1 sm:mb-2">
                                Email Address
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-4 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="your@email.com"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label className="block text-sm font-medium text-black mb-1 sm:mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`w-full pl-10 pr-12 py-2.5 sm:py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                                </button>
                            </div>
                            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className={`w-full bg-black text-white py-2.5 sm:py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 focus:ring-4 focus:ring-gray-300'
                                }`}
                        >
                            <LogIn className="w-5 h-5" />
                            <span>{loading ? "Logging in..." : "Log In"}</span>
                        </button>

                        <div className="text-center">
                            <Link
                                to="/forgotPassword"
                                className="text-black hover:text-gray-700 text-sm font-medium underline transition"
                            >
                                Forgot your password?
                            </Link>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className="text-center mt-6 sm:mt-8 pt-6 border-t border-gray-200">
                        <p className="text-gray-600 text-sm">
                            Don't have an account?{' '}
                            <Link
                                to="/signup"
                                className="text-black hover:text-gray-700 font-semibold underline"
                            >
                                Create an account here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;
