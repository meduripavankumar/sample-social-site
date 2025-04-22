
import React, { useState } from 'react';
import { MoreHorizontal, ThumbsUp, MessageSquare, Share2, Send } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PostProps {
  id: string;
  author: {
    id: string;
    name: string;
    title: string;
    imageUrl?: string;
  };
  content: string;
  imageUrl?: string;
  likes: number;
  comments: number;
  shares: number;
  timeAgo: string;
  hasLiked?: boolean;
}

const Post = ({
  id,
  author,
  content,
  imageUrl,
  likes,
  comments,
  shares,
  timeAgo,
  hasLiked = false,
}: PostProps) => {
  const [liked, setLiked] = useState(hasLiked);
  const [likeCount, setLikeCount] = useState(likes);

  const handleLike = () => {
    if (liked) {
      setLikeCount(prev => prev - 1);
    } else {
      setLikeCount(prev => prev + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 mb-4 overflow-hidden">
      <div className="p-4">
        <div className="flex justify-between">
          <div className="flex items-start">
            <div className="mr-2">
              <Link to={`/profile/${author.id}`}>
                {author.imageUrl ? (
                  <img src={author.imageUrl} alt={author.name} className="w-12 h-12 rounded-full object-cover" />
                ) : (
                  <div className="w-12 h-12 rounded-full bg-gray-300 flex items-center justify-center">
                    <span className="text-lg font-bold text-gray-500">
                      {author.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                )}
              </Link>
            </div>
            <div>
              <Link to={`/profile/${author.id}`} className="font-medium text-gray-900 hover:underline">
                {author.name}
              </Link>
              <p className="text-gray-500 text-sm">{author.title}</p>
              <p className="text-gray-400 text-xs flex items-center">
                {timeAgo} • <span className="mx-1">🌎</span>
              </p>
            </div>
          </div>
          <button className="text-gray-400 hover:text-gray-600">
            <MoreHorizontal size={20} />
          </button>
        </div>
        
        <div className="mt-3">
          <p className="text-gray-800 whitespace-pre-line">{content}</p>
        </div>
      </div>
      
      {imageUrl && (
        <div className="border-t border-gray-100">
          <img src={imageUrl} alt="Post" className="w-full object-cover max-h-96" />
        </div>
      )}
      
      <div className="px-4 py-2 border-t border-gray-200">
        <div className="flex justify-between text-xs text-gray-500">
          <div>{likeCount > 0 && <span>{likeCount} likes</span>}</div>
          <div>{comments > 0 && <span>{comments} comments</span>} {shares > 0 && <span>• {shares} shares</span>}</div>
        </div>
      </div>
      
      <div className="px-2 py-1 border-t border-gray-200 flex justify-between">
        <button 
          onClick={handleLike}
          className={`flex items-center px-2 py-2 rounded-md hover:bg-gray-100 ${liked ? 'text-linkedin-blue' : 'text-gray-500'}`}
        >
          <ThumbsUp size={18} className="mr-1" />
          <span>{liked ? 'Liked' : 'Like'}</span>
        </button>
        <button className="flex items-center text-gray-500 px-2 py-2 rounded-md hover:bg-gray-100">
          <MessageSquare size={18} className="mr-1" />
          <span>Comment</span>
        </button>
        <button className="flex items-center text-gray-500 px-2 py-2 rounded-md hover:bg-gray-100">
          <Share2 size={18} className="mr-1" />
          <span>Share</span>
        </button>
        <button className="flex items-center text-gray-500 px-2 py-2 rounded-md hover:bg-gray-100">
          <Send size={18} className="mr-1" />
          <span>Send</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
