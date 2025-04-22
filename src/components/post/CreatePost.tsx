
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Image, 
  FileText, 
  Video, 
  Calendar 
} from 'lucide-react';

const CreatePost = () => {
  const [postText, setPostText] = useState('');

  const handlePostSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (postText.trim()) {
      // Here you would handle the post submission with backend
      alert(`Post submitted: ${postText}`);
      setPostText('');
    }
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 mb-4">
      <form onSubmit={handlePostSubmit}>
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
            <span className="text-sm font-bold text-gray-500">JD</span>
          </div>
          <div className="flex-grow">
            <textarea
              value={postText}
              onChange={(e) => setPostText(e.target.value)}
              className="w-full border border-gray-300 rounded-full py-2 px-4 focus:outline-none focus:ring-1 focus:ring-linkedin-blue focus:border-linkedin-blue resize-none"
              placeholder="Start a post"
              rows={1}
              style={{ maxHeight: '60px', minHeight: '40px' }}
            ></textarea>
          </div>
        </div>
        
        {postText.trim() && (
          <div className="flex justify-end mb-4">
            <Button 
              type="submit" 
              className="bg-linkedin-blue text-white hover:bg-linkedin-darkBlue"
            >
              Post
            </Button>
          </div>
        )}
        
        <div className="flex justify-between pt-2 border-t border-gray-200">
          <button type="button" className="flex items-center text-gray-500 hover:text-linkedin-blue px-3 py-1 rounded-md hover:bg-gray-100">
            <Image size={18} className="mr-2" />
            <span className="hidden sm:inline-block">Photo</span>
          </button>
          <button type="button" className="flex items-center text-gray-500 hover:text-linkedin-blue px-3 py-1 rounded-md hover:bg-gray-100">
            <Video size={18} className="mr-2" />
            <span className="hidden sm:inline-block">Video</span>
          </button>
          <button type="button" className="flex items-center text-gray-500 hover:text-linkedin-blue px-3 py-1 rounded-md hover:bg-gray-100">
            <FileText size={18} className="mr-2" />
            <span className="hidden sm:inline-block">Document</span>
          </button>
          <button type="button" className="flex items-center text-gray-500 hover:text-linkedin-blue px-3 py-1 rounded-md hover:bg-gray-100">
            <Calendar size={18} className="mr-2" />
            <span className="hidden sm:inline-block">Event</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
