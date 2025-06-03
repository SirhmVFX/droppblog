import React, { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, BookOpen, LogIn } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import supabase from '../supabase-client';

export default function SignUp() {
<<<<<<< HEAD
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [showPassword, setShowPassword] = useState(false);
    const [errors, setErrors] = useState({});
    const [message, setMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
=======
    // Form data state to store user input
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });

    // State management for UI and form validation
    const [showPassword, setShowPassword] = useState(false); // Toggle password visibility
    const [errors, setErrors] = useState({}); // Store form validation errors
    const [message, setMessage] = useState(""); // Success/error messages from authentication
    const [loading, setLoading] = useState(false); // Prevent multiple form submissions
    const navigate = useNavigate(); // React Router navigation hook

    // Handle input changes and clear errors on user typing
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));

        // Clear error when user starts typing
>>>>>>> origin/main
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

<<<<<<< HEAD
    const validateForm = () => {
        const newErrors = {};
=======
    // Form validation logic
    const validateForm = () => {
        const newErrors = {};

        // Email validation
>>>>>>> origin/main
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'Email is invalid';
        }

<<<<<<< HEAD
=======
        // Password validation
>>>>>>> origin/main
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 8) {
            newErrors.password = 'Password must be at least 8 characters';
        }

        return newErrors;
    };

<<<<<<< HEAD
=======
    // Handle form submission and Supabase authentication
>>>>>>> origin/main
    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setLoading(true);

<<<<<<< HEAD
        const newErrors = validateForm();
=======
        // Validate form before submission
        const newErrors = validateForm();

>>>>>>> origin/main
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            setLoading(false);
            return;
        }

        try {
<<<<<<< HEAD
=======
            // Attempt to create user account with Supabase
>>>>>>> origin/main
            const { data, error } = await supabase.auth.signUp({
                email: formData.email,
                password: formData.password,
            });

<<<<<<< HEAD
=======
            // Handle authentication response
>>>>>>> origin/main
            if (error) {
                setMessage(error.message);
            } else if (data?.user?.identities?.length === 0) {
                setMessage("This email is already registered. Try logging in.");
            } else {
                setMessage("Account created successfully! Check your email to confirm your address.");
                setFormData({ email: '', password: '' });
<<<<<<< HEAD
                setTimeout(() => navigate("/login"), 3000);
            }
        } catch (err) {
            console.error(err);
            setMessage("An unexpected error occurred. Please try again.");
        }
        
=======
                // Navigate to login page after 3 seconds
                setTimeout(() => navigate("/login"),3000);
            }
        } catch (err) {
            setMessage("An unexpected error occurred. Please try again.");
        }
>>>>>>> origin/main

        setLoading(false);
    };

    return (
        <div className="min-h-screen bg-white flex items-center justify-center p-4">
            <div className="w-full max-w-md">
<<<<<<< HEAD
                {message.trim() !== "" && (
                    <div className={`text-center text-sm font-medium p-2 mb-5 rounded ${message.toLowerCase().includes("success")
                            ? "text-green-600 bg-green-100"
                            : "text-red-600 bg-red-100"
                        }`}>
                        {message}
                    </div>
                )}

                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
=======
                {/* Success/Error message display */}
                {message && (
                    <div className={`text-center text-sm font-medium p-2 mb-5 rounded ${
                        message.toLowerCase().includes("success")
                            ? "text-green bg-green-100"
                            : "text-red bg-red-100"
                    }`}>
                        {message}
                    </div>
                )}
                
                <div className="bg-white rounded-lg shadow-lg border border-gray-200 p-8">
                    {/* Header section with logo and welcome text */}
>>>>>>> origin/main
                    <div className="text-center mb-8">
                        <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-black mb-2">Welcome to droppblog</h2>
                        <p className="text-gray-600">Create an account</p>
                        <p>Your No1 blog site 💅💅💅💅 Purr</p>
                    </div>

<<<<<<< HEAD
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Email Address</label>
=======
                    <div className="space-y-6">
                        {/* Email input field */}
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">
                                Email Address
                            </label>
>>>>>>> origin/main
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
<<<<<<< HEAD
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
=======
                                    className={`w-full pl-10 pr-4 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
>>>>>>> origin/main
                                    placeholder="your@email.com"
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>

<<<<<<< HEAD
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">Password</label>
=======
                        {/* Password input field with visibility toggle */}
                        <div>
                            <label className="block text-sm font-medium text-black mb-2">
                                Password
                            </label>
>>>>>>> origin/main
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
<<<<<<< HEAD
                                    className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all ${errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    placeholder="Enter your password"
                                />
=======
                                    className={`w-full pl-10 pr-12 py-3 border rounded-lg focus:ring-2 focus:ring-black focus:border-black transition-all ${
                                        errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    placeholder="Enter your password"
                                />
                                {/* Password visibility toggle button */}
>>>>>>> origin/main
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

<<<<<<< HEAD
                        <button
                            type="submit"
                            disabled={loading}
                            className={`w-full bg-black text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 focus:ring-4 focus:ring-gray-300'
                                }`}
=======
                        {/* Submit button with loading state */}
                        <button
                            type="button"
                            onClick={handleSubmit}
                            disabled={loading}
                            className={`w-full bg-black text-white py-3 px-4 rounded-lg font-semibold flex items-center justify-center space-x-2 transition-all ${
                                loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-800 focus:ring-4 focus:ring-gray-300'
                            }`}
>>>>>>> origin/main
                        >
                            <LogIn className="w-5 h-5" />
                            <span>{loading ? "Creating..." : "Create Account"}</span>
                        </button>

<<<<<<< HEAD
                        <div className="text-center">
                            <Link
                                to="/forgotPassword"
=======
                        {/* Forgot password link */}
                        <div className="text-center">
                            <Link 
                                to="/forgotPassword" 
>>>>>>> origin/main
                                className="text-black hover:text-gray-700 text-sm font-medium underline transition-colors"
                            >
                                Forgot your password?
                            </Link>
                        </div>
<<<<<<< HEAD
                    </form>

                    <div className="text-center mt-8 pt-6 border-t border-gray-200">
                        <p className="text-gray-600 text-sm">
                            Already have an account?{' '}
                            <Link
                                to="/login"
=======
                    </div>

                    {/* Bottom section - Link to login page */}
                    <div className="text-center mt-8 pt-6 border-t border-gray-200">
                        <p className="text-gray-600 text-sm">
                            Already have an account?{' '}
                            <Link 
                                to="/login" 
>>>>>>> origin/main
                                className="text-black hover:text-gray-700 font-semibold underline"
                            >
                                Sign in here
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
<<<<<<< HEAD
}
=======
}
>>>>>>> origin/main
