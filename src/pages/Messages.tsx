
import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Avatar from '@/components/common/Avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Search, Edit, Send } from 'lucide-react';

const Messages = () => {
  const [selectedChat, setSelectedChat] = useState<string | null>(null);
  const [messageText, setMessageText] = useState('');

  // Sample data - in a real app this would come from an API
  const chats = [
    {
      id: '1',
      user: { 
        name: 'Sarah Johnson', 
        title: 'UI/UX Designer at Creative Design Studio',
        online: true,
      },
      lastMessage: {
        text: 'Thanks for the project update! Let\'s discuss the wireframes tomorrow.',
        time: '10:42 AM',
        isUnread: true,
      },
    },
    {
      id: '2',
      user: { 
        name: 'Michael Chen', 
        title: 'Software Engineer at Tech Innovations',
        online: false,
      },
      lastMessage: {
        text: 'I\'ll send you the documentation for the new API endpoints.',
        time: 'Yesterday',
        isUnread: false,
      },
    },
    {
      id: '3',
      user: { 
        name: 'Jessica Williams', 
        title: 'Marketing Director at Global Brand',
        online: false,
      },
      lastMessage: {
        text: 'Can we schedule a meeting to discuss the campaign results?',
        time: 'Monday',
        isUnread: false,
      },
    },
  ];

  // Sample messages for a chat
  const messages = [
    {
      id: '1',
      sender: 'other',
      text: "Hi there! I came across your profile and I'm impressed with your work. Would you be interested in discussing a potential collaboration?",
      time: 'Monday 2:30 PM',
    },
    {
      id: '2',
      sender: 'me',
      text: "Hello! Thank you for reaching out. I'd definitely be interested in hearing more about the collaboration opportunity.",
      time: 'Monday 3:15 PM',
    },
    {
      id: '3',
      sender: 'other',
      text: "Great! Our company is looking for someone with your skillset for an upcoming project. It involves developing a new feature for our product.",
      time: 'Monday 3:20 PM',
    },
    {
      id: '4',
      sender: 'me',
      text: "That sounds interesting! Could you provide more details about the project scope and timeline?",
      time: 'Monday 3:45 PM',
    },
    {
      id: '5',
      sender: 'other',
      text: "Of course. The project is expected to last about 6 weeks. We're looking to add a new analytics dashboard to our platform. Would you be available for a call this week to discuss further?",
      time: 'Yesterday 10:30 AM',
    },
    {
      id: '6',
      sender: 'me',
      text: "Yes, I could make time for a call. How about Thursday afternoon?",
      time: 'Yesterday 11:15 AM',
    },
    {
      id: '7',
      sender: 'other',
      text: "Thursday afternoon works for me. Let's say 2 PM? I'll send a calendar invite with the meeting details.",
      time: 'Yesterday 11:30 AM',
    },
    {
      id: '8',
      sender: 'me',
      text: "Perfect. I'll look out for the invite. Looking forward to our conversation!",
      time: 'Yesterday 11:45 AM',
    },
    {
      id: '9',
      sender: 'other',
      text: "Great! Just sent the invite. Talk to you on Thursday!",
      time: 'Today 10:42 AM',
    },
  ];

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (messageText.trim()) {
      // Here you would handle sending the message to the backend
      console.log('Sending message:', messageText);
      setMessageText('');
    }
  };

  return (
    <div className="bg-linkedin-gray min-h-screen pb-16">
      <Header />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <Card className="h-[calc(100vh-120px)]">
          <Tabs defaultValue="primary" className="h-full">
            <div className="grid grid-cols-12 h-full">
              <div className="col-span-12 md:col-span-4 border-r border-gray-200 h-full flex flex-col">
                <div className="p-4 border-b border-gray-200 flex justify-between items-center">
                  <h2 className="font-semibold">Messaging</h2>
                  <button className="p-1.5 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-full">
                    <Edit size={20} />
                  </button>
                </div>
                
                <div className="p-2 border-b border-gray-200">
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <Search className="h-4 w-4 text-gray-400" />
                    </div>
                    <Input
                      type="text"
                      placeholder="Search messages"
                      className="pl-10 pr-3 py-2 w-full text-sm"
                    />
                  </div>
                </div>
                
                <TabsList className="p-0 h-auto bg-transparent border-b border-gray-200">
                  <TabsTrigger 
                    value="primary" 
                    className="flex-1 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none border-b-2 data-[state=active]:border-linkedin-blue data-[state=active]:text-linkedin-blue"
                  >
                    Primary
                  </TabsTrigger>
                  <TabsTrigger 
                    value="other" 
                    className="flex-1 rounded-none data-[state=active]:bg-white data-[state=active]:shadow-none border-b-2 data-[state=active]:border-linkedin-blue data-[state=active]:text-linkedin-blue"
                  >
                    Other
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="primary" className="m-0 p-0 flex-1 overflow-y-auto">
                  <ul className="divide-y divide-gray-200">
                    {chats.map((chat) => (
                      <li
                        key={chat.id}
                        className={`hover:bg-gray-50 cursor-pointer ${selectedChat === chat.id ? 'bg-blue-50' : ''} ${chat.lastMessage.isUnread ? 'font-semibold' : ''}`}
                        onClick={() => setSelectedChat(chat.id)}
                      >
                        <div className="flex p-4">
                          <div className="relative mr-3">
                            <Avatar name={chat.user.name} size="md" />
                            {chat.user.online && (
                              <span className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></span>
                            )}
                          </div>
                          
                          <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline">
                              <h3 className="text-sm truncate">{chat.user.name}</h3>
                              <span className="text-xs text-gray-500 ml-2 flex-shrink-0">{chat.lastMessage.time}</span>
                            </div>
                            
                            <p className={`text-sm truncate ${chat.lastMessage.isUnread ? 'text-gray-900' : 'text-gray-500'}`}>
                              {chat.lastMessage.text}
                            </p>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </TabsContent>
                
                <TabsContent value="other" className="m-0 p-4 flex-1">
                  <p className="text-gray-500 text-center mt-4">No messages in other folder</p>
                </TabsContent>
              </div>
              
              <div className="hidden md:block md:col-span-8 h-full">
                {selectedChat ? (
                  <div className="flex flex-col h-full">
                    <div className="p-4 border-b border-gray-200 flex items-center">
                      <Avatar name={chats.find(c => c.id === selectedChat)?.user.name || ''} size="md" className="mr-3" />
                      
                      <div>
                        <h3 className="font-medium">{chats.find(c => c.id === selectedChat)?.user.name}</h3>
                        <p className="text-xs text-gray-500">
                          {chats.find(c => c.id === selectedChat)?.user.title}
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex-1 overflow-y-auto p-4 space-y-4">
                      {messages.map((message) => (
                        <div
                          key={message.id}
                          className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
                        >
                          <div
                            className={`max-w-[70%] rounded-lg p-3 ${
                              message.sender === 'me'
                                ? 'bg-linkedin-blue text-white'
                                : 'bg-gray-200 text-gray-800'
                            }`}
                          >
                            <p className="text-sm">{message.text}</p>
                            <p className={`text-xs mt-1 ${message.sender === 'me' ? 'text-blue-100' : 'text-gray-500'}`}>
                              {message.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="p-4 border-t border-gray-200">
                      <form onSubmit={handleSendMessage} className="flex items-center">
                        <Input
                          type="text"
                          value={messageText}
                          onChange={(e) => setMessageText(e.target.value)}
                          placeholder="Write a message..."
                          className="flex-1 mr-2"
                        />
                        <button
                          type="submit"
                          disabled={!messageText.trim()}
                          className={`p-2 rounded-full ${
                            messageText.trim()
                              ? 'bg-linkedin-blue text-white'
                              : 'bg-gray-200 text-gray-400'
                          }`}
                        >
                          <Send size={18} />
                        </button>
                      </form>
                    </div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <h3 className="text-lg font-medium text-gray-700">Select a conversation</h3>
                      <p className="text-gray-500 mt-1">Choose from your existing conversations</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </Tabs>
        </Card>
      </div>
    </div>
  );
};

export default Messages;
