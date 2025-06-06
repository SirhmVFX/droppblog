import React, { useState } from 'react';
import { Link } from 'react-router';

function CreatePost() {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!title.trim() || !body.trim()) {
            setMessage('Title and body are required.');
            return;
        }

        // Simulate post creation
        setTimeout(() => {
            setMessage('Post created successfully!');
            setTitle('');
            setBody('');
        }, 1000);
    };

    return (
        <div className="min-h-screen bg-white flex flex-col justify-between px-4">
            {/* Header */}
            <header className="w-full border-b border-gray-200 py-4 mb-4">
                <div className="max-w-6xl mx-auto flex justify-between items-center px-4">
                    <div className="text-2xl font-bold text-black">
                        DroppBlog
                    </div>
                    <nav className="space-x-4 text-sm text-gray-600">
                      <Link
                       to="/"
                       className="hover:text-black transition duration-200 border-b-2 border-transparent hover:border-black"
                     >
                       Home
                    </Link>
                   <Link
                    to="/Profile"
                    className="hover:text-black transition duration-200 border-b-2 border-transparent hover:border-black"
                  >
                    Profile
                  </Link>
                  </nav>
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-xl w-full mx-auto mb-6">
                <h1 className="text-3xl font-bold mb-6">Create a New Post</h1>

                {message && (
                    <div className="mb-4 text-sm text-center text-white bg-green-600 rounded p-2">
                        {message}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block font-medium mb-1">Title</label>
                        <input
                            type="text"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Enter post title"
                        />
                    </div>

                    <div>
                        <label className="block font-medium mb-1">Body</label>
                        <textarea
                            value={body}
                            onChange={(e) => setBody(e.target.value)}
                            className="w-full border border-gray-300 rounded p-2 h-40 resize-none focus:outline-none focus:ring-2 focus:ring-black"
                            placeholder="Write your post content..."
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition"
                    >
                        Publish
                    </button>
                </form>
            </div>

            {/* Footer */}
            <footer className="w-full text-center py-4 text-sm text-gray-500 border-t border-gray-200">
                &copy; {new Date().getFullYear()} YourAppName. All rights reserved.
            </footer>
        </div>
    );
}

export default CreatePost;
