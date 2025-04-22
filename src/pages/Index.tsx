
import React from 'react';
import Header from '@/components/layout/Header';
import Sidebar from '@/components/layout/Sidebar';
import CreatePost from '@/components/post/CreatePost';
import Post from '@/components/post/Post';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const posts = [
  {
    id: '1',
    author: {
      id: 'user1',
      name: 'Sarah Johnson',
      title: 'UI/UX Designer at Creative Design Studio',
      imageUrl: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
    content: 'Just completed a new design system for our client. What do you think of this landing page mockup?',
    imageUrl: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80',
    likes: 42,
    comments: 8,
    shares: 3,
    timeAgo: '2h',
  },
  {
    id: '2',
    author: {
      id: 'user2',
      name: 'Michael Chen',
      title: 'Software Engineer at Tech Innovations',
    },
    content: "Excited to announce that after 3 months of hard work, we've finally launched our new product! It's been an amazing journey with the team. \n\nCheck it out at example.com",
    likes: 89,
    comments: 15,
    shares: 11,
    timeAgo: '5h',
  },
  {
    id: '3',
    author: {
      id: 'user3',
      name: 'Jessica Williams',
      title: 'Marketing Director at Global Brand',
      imageUrl: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80',
    },
    content: 'Looking for recommendations on great marketing automation tools for a mid-size company. What has worked well for your teams?',
    likes: 24,
    comments: 32,
    shares: 2,
    timeAgo: '1d',
  },
];

const people = [
  {
    name: 'Alex Rivera',
    title: 'Software Developer',
    mutual: 3,
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
  {
    name: 'Priya Patel',
    title: 'Product Manager',
    mutual: 5,
    avatar: 'https://randomuser.me/api/portraits/women/45.jpg',
  },
  {
    name: 'David Kim',
    title: 'Data Scientist',
    mutual: 2,
    avatar: 'https://randomuser.me/api/portraits/men/59.jpg',
  },
];

const Index = () => {
  return (
    <div className="bg-gradient-to-b from-linkedin-gray/80 to-linkedin-gray min-h-screen pb-16">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <Sidebar />

          <div className="md:col-span-6 lg:col-span-6">
            <CreatePost />

            {/* Animate feed with fade-in */}
            <div>
              {posts.map((post, i) => (
                <div className="animate-fade-in" style={{ animationDelay: `${i * 60}ms` }} key={post.id}>
                  <Post {...post} />
                </div>
              ))}
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-4 space-y-4">
            <Card className="mb-4 shadow-lg border border-gray-200">
              <CardContent className="p-4">
                <h2 className="font-semibold text-lg mb-3">LinkedIn News</h2>
                <ul className="space-y-3">
                  {[
                    'Tech layoffs slow down in Q2 2023',
                    'Remote work trends shifting again',
                    'Startup funding reaches new heights',
                    'AI skills in high demand',
                    'New policies for gig workers',
                  ].map((news, index) => (
                    <li key={index} className="flex items-center">
                      <span className="mr-2 text-lg text-linkedin-blue">•</span>
                      <div>
                        <p className="font-medium text-sm">{news}</p>
                        <p className="text-xs text-gray-500">
                          {Math.floor(Math.random() * 10) + 1}h ago • {Math.floor(Math.random() * 900) + 100} readers
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card className="shadow-lg border border-gray-200">
              <CardContent className="p-4">
                <h2 className="font-semibold text-lg mb-3">People you may know</h2>
                <ul className="space-y-4">
                  {people.map((person, index) => (
                    <li key={index} className="flex items-center gap-3 animate-fade-in" style={{ animationDelay: `${index * 80}ms` }}>
                      <div className="w-12 h-12 rounded-full bg-gray-300 overflow-hidden border-2 border-linkedin-blue shadow-md flex items-center justify-center">
                        <img
                          src={person.avatar}
                          alt={person.name}
                          className="w-12 h-12 object-cover"
                          onError={(e) => { (e.target as HTMLImageElement).src = '/placeholder.svg'; }}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link to="#" className="font-medium text-gray-900 hover:underline">
                          {person.name}
                        </Link>
                        <p className="text-sm text-gray-500 truncate">{person.title}</p>
                        <p className="text-xs text-gray-500">{person.mutual} mutual connections</p>
                        <button className="mt-1 text-sm font-medium text-linkedin-blue border border-linkedin-blue rounded-full px-3 py-1 hover:bg-blue-50 transition-colors">
                          Connect
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
