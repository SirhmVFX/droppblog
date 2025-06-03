import React, { useState } from 'react';
import user from './Assets/𝓜𝓪𝓶𝓪𝓭🦍⛓️ sur TikTok.jpeg';
import image1 from './Assets/Screenshot 2025-04-27 225511.png';
import image2 from './Assets/Screenshot 2025-04-14 121116.png'; 

function UserProfile() {
    const [activeTab, setActiveTab] = useState('posts');

    const tabs = [
        { id: 'posts', label: 'Posts' },
        { id: 'replies', label: 'Replies' },
        { id: 'media', label: 'Media' },
        { id: 'favorites', label: 'Favorites' },
    ];

    return (
        <div className="min-h-screen bg-white text-gray-900">
            {/* Header Banner */}
            <div className="h-48 bg-black relative">
                <div className="absolute bottom-0 left-6 transform translate-y-1/2">
                    <img
                        className="w-32 h-32 rounded-full border-4 border-white object-cover"
                        src={user}
                        alt="Profile"
                    />
                </div>
            </div>

            {/* Profile Info */}
            <div className="pt-20 px-6 border-b border-gray-200 max-w-3xl mx-auto">
                <div className="flex justify-between items-center mb-2">
                    <h1 className="text-3xl font-bold">Arnold</h1>
                    <button className="py-1 px-4 border border-gray-300 rounded-full text-sm font-semibold hover:bg-gray-100 transition">
                        Edit profile
                    </button>
                </div>
                <p className="text-gray-600">@himdev</p>

                <p className="mt-4 text-gray-800">
                    Frontend Developer | Coffee Lover ☕ | Tech Blogger
                </p>

                <div className="flex space-x-4 mt-4 text-gray-600 text-sm">
                    <div>
                        <span className="font-semibold text-gray-800">500</span> Following
                    </div>
                    <div>
                        <span className="font-semibold text-gray-800">2.5K</span> Followers
                    </div>
                </div>
            </div>

            {/* Tabs */}
            <div className="border-b border-gray-200 mt-4 max-w-3xl mx-auto px-6">
                <nav className="-mb-px flex space-x-8">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === tab.id
                                    ? 'border-black text-black'
                                    : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300'
                                }`}
                        >
                            {tab.label}
                        </button>
                    ))}
                </nav>
            </div>

            {/* Tab Content */}
            <div className="max-w-3xl mx-auto px-6 mt-6">
                {activeTab === 'posts' && (
                    <div className="space-y-6">
                        {/* Post 1 */}
                        <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50">
                            <p className="text-gray-800 mb-2">
                                Just launched my new project! Check it out at{' '}
                                <a
                                    href="https://example.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-black underline hover:text-gray-700"
                                >
                                    example.com
                                </a>
                            </p>
                            <img
                                src={image1}
                                alt="Project Screenshot"
                                className="rounded-lg w-full max-h-96 object-cover"
                            />
                            <span className="text-gray-500 text-xs block mt-2">2h ago</span>
                        </div>

                        {/* Post 2 */}
                        <div className="border border-gray-200 rounded-lg p-4 shadow-sm bg-gray-50">
                            <p className="text-gray-800 mb-2">
                                Learning TailwindCSS has made styling so much easier. Clean code, fast builds!
                            </p>
                            <img
                                src={image2}
                                alt="TailwindCSS Demo"
                                className="rounded-lg w-full max-h-96 object-cover"
                            />
                            <span className="text-gray-500 text-xs block mt-2">1d ago</span>
                        </div>
                    </div>
                )}
                {activeTab === 'replies' && <p className="text-gray-500">No replies yet.</p>}
                {activeTab === 'media' && <p className="text-gray-500">No media to show.</p>}
                {activeTab === 'favorites' && <p className="text-gray-500">No favorites yet.</p>}
            </div>
        </div>
    );
}

export default UserProfile;
