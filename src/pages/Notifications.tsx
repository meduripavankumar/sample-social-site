
import React from 'react';
import Header from '@/components/layout/Header';
import Avatar from '@/components/common/Avatar';
import { Card, CardContent } from '@/components/ui/card';
import { MoreHorizontal } from 'lucide-react';

const Notifications = () => {
  // Sample data - in a real app this would come from an API
  const notifications = [
    {
      id: '1',
      user: { name: 'Sarah Johnson', title: 'UI/UX Designer' },
      action: 'liked your post',
      post: 'Just completed a new design system for our client...',
      time: '2h',
      isRead: false,
    },
    {
      id: '2',
      user: { name: 'Michael Chen', title: 'Software Engineer' },
      action: 'commented on your post',
      post: 'Excited to announce that after 3 months of hard work...',
      comment: 'Congratulations on the launch! Looking forward to checking it out.',
      time: '5h',
      isRead: false,
    },
    {
      id: '3',
      user: { name: 'Tech Company' },
      action: 'shared a post',
      post: 'We are hiring experienced software engineers!',
      time: '1d',
      isRead: true,
    },
    {
      id: '4',
      user: { name: 'Jessica Williams', title: 'Marketing Director' },
      action: 'viewed your profile',
      time: '2d',
      isRead: true,
    },
    {
      id: '5',
      user: { name: 'Alex Rivera', title: 'Software Developer' },
      action: 'is celebrating 3 years at Creative Code Inc',
      time: '3d',
      isRead: true,
    },
  ];

  return (
    <div className="bg-linkedin-gray min-h-screen pb-16">
      <Header />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <Card>
          <CardContent className="p-0">
            <div className="p-4 border-b border-gray-200 flex justify-between items-center">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <div className="flex space-x-2">
                <button className="text-gray-500 hover:text-gray-700">
                  <MoreHorizontal size={20} />
                </button>
              </div>
            </div>
            
            <div>
              {notifications.map((notification) => (
                <div 
                  key={notification.id}
                  className={`p-4 hover:bg-gray-50 flex ${notification.isRead ? '' : 'bg-blue-50'}`}
                >
                  <div className="mr-3">
                    <Avatar name={notification.user.name} size="lg" />
                  </div>
                  
                  <div className="flex-1">
                    <p className="text-gray-800">
                      <span className="font-medium">{notification.user.name}</span>
                      {' '}{notification.action}
                      {notification.post && (
                        <>: <span className="text-gray-600">"{notification.post.substring(0, 50)}..."</span></>
                      )}
                    </p>
                    
                    {notification.comment && (
                      <p className="text-gray-600 mt-1 text-sm">
                        "{notification.comment}"
                      </p>
                    )}
                    
                    <p className="text-gray-500 text-sm mt-1">{notification.time}</p>
                  </div>
                  
                  <button className="text-gray-400 hover:text-gray-600 self-start">
                    <MoreHorizontal size={20} />
                  </button>
                </div>
              ))}
            </div>
            
            {notifications.length === 0 && (
              <div className="p-8 text-center">
                <p className="text-gray-500">No new notifications</p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Notifications;
