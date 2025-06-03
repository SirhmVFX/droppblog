import React from 'react';
import { FiHeart, FiMessageCircle, FiShare2, FiBookmark } from 'react-icons/fi';

const PostCard = ({
  title = 'Post title',
  author = 'Anonymous',
  avatar = 'https://i.pravatar.cc/150?img=3',
  date = 'Unknown date',
  summary = 'Post summary goes here.',
  image = '',
  likes = 0,
  comments = 0,
  shares = 0,
}) => {
  return (
    <div className="flex gap-6 p-6 bg-white rounded-2xl shadow-md max-w-3xl mx-auto mb-5">
      {/* Left Content */}
      <div className="flex-1 flex flex-col">
        {/* Author Info */}
        <div className="flex items-center gap-3 mb-2">
          <img
            src={avatar}
            alt="Author"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div>
            <p className="text-sm font-semibold text-gray-900">{author}</p>
            <p className="text-xs text-gray-500">{date}</p>
          </div>
        </div>

        {/* Post Title and Summary */}
        <h2 className="text-xl font-bold text-gray-900 leading-snug mb-1">{title}</h2>
        <p className="text-gray-700 text-sm leading-relaxed mb-4">{summary}</p>

        {/* Engagement Metrics + Save */}
        <div className="flex gap-6 text-gray-600 text-sm mt-auto items-center">
          <div className="flex items-center gap-1">
            <FiHeart size={16} />
            <span>{likes}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiMessageCircle size={16} />
            <span>{comments}</span>
          </div>
          <div className="flex items-center gap-1">
            <FiShare2 size={16} />
            <span>{shares}</span>
          </div>
          <button className="ml-auto text-gray-600 hover:text-black transition">
            <FiBookmark size={18} />
          </button>
        </div>
      </div>

      {/* Right Section: Subscribe + Image */}
      {image && (
        <div className="flex-shrink-0 flex flex-col items-end justify-between h-36">
          <button className="bg-black text-white text-xs px-3 py-1 rounded-md hover:bg-gray-800 transition mb-2 cursor-p">
            Subscribe
          </button>
          <img
            src={image}
            alt={title}
            className="w-36 h-36 rounded-xl object-cover"
          />
        </div>
      )}
    </div>
  );
};

export default PostCard;
