
import React from 'react';
import Header from '@/components/layout/Header';
import Avatar from '@/components/common/Avatar';
import { Card, CardContent } from '@/components/ui/card';
import { Users, UserPlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const Network = () => {
  // Sample data - in a real app this would come from an API
  const connections = [
    { id: '1', name: 'Alex Rivera', title: 'Software Developer', mutual: 12 },
    { id: '2', name: 'Priya Patel', title: 'Product Manager', mutual: 8 },
    { id: '3', name: 'David Kim', title: 'Data Scientist', mutual: 5 },
    { id: '4', name: 'Emma Watson', title: 'Marketing Director', mutual: 3 },
    { id: '5', name: 'Carlos Rodriguez', title: 'UX Designer', mutual: 7 },
    { id: '6', name: 'Sophia Chen', title: 'Frontend Developer', mutual: 10 },
  ];

  const pendingInvitations = [
    { id: '1', name: 'John Smith', title: 'Software Engineer at Tech Co', time: '2 weeks ago' },
    { id: '2', name: 'Linda Johnson', title: 'HR Manager at Recruitment Inc', time: '3 days ago' },
  ];

  return (
    <div className="bg-linkedin-gray min-h-screen pb-16">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-0">
                <div className="p-4 border-b border-gray-200">
                  <h2 className="text-lg font-semibold">Manage my network</h2>
                </div>
                
                <nav>
                  {[
                    { name: 'Connections', count: 582, icon: <Users size={18} /> },
                    { name: 'People I Follow', count: 26, icon: <UserPlus size={18} /> },
                    { name: 'Groups', count: 8, icon: <Users size={18} /> },
                    { name: 'Events', count: 0, icon: <Users size={18} /> },
                    { name: 'Pages', count: 15, icon: <Users size={18} /> },
                    { name: 'Newsletter', count: 3, icon: <Users size={18} /> },
                    { name: 'Hashtags', count: 12, icon: <Users size={18} /> },
                  ].map((item, index) => (
                    <Link
                      key={index}
                      to="#"
                      className="flex items-center justify-between px-4 py-3 hover:bg-gray-100"
                    >
                      <div className="flex items-center">
                        <span className="mr-3 text-gray-500">{item.icon}</span>
                        <span>{item.name}</span>
                      </div>
                      <span className="text-gray-500">{item.count}</span>
                    </Link>
                  ))}
                </nav>
              </CardContent>
            </Card>
          </div>
          
          <div className="lg:col-span-2 space-y-4">
            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-4">Invitations ({pendingInvitations.length})</h2>
                
                {pendingInvitations.length > 0 ? (
                  <ul className="divide-y divide-gray-200">
                    {pendingInvitations.map((invitation) => (
                      <li key={invitation.id} className="py-4 flex">
                        <Avatar name={invitation.name} size="lg" className="mr-4" />
                        
                        <div className="flex-1">
                          <div className="flex items-start justify-between">
                            <div>
                              <h3 className="font-medium text-gray-900">{invitation.name}</h3>
                              <p className="text-sm text-gray-500">{invitation.title}</p>
                              <p className="text-xs text-gray-400 mt-1">Invited {invitation.time}</p>
                            </div>
                            
                            <div className="flex space-x-2">
                              <button className="border border-gray-400 text-gray-500 hover:bg-gray-50 px-3 py-1 rounded-full text-sm font-medium">
                                Ignore
                              </button>
                              <button className="bg-linkedin-blue text-white hover:bg-linkedin-darkBlue px-3 py-1 rounded-full text-sm font-medium">
                                Accept
                              </button>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No pending invitations</p>
                )}
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4">
                <h2 className="text-lg font-semibold mb-4">People you may know</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {connections.map((connection) => (
                    <div key={connection.id} className="border border-gray-200 rounded-lg p-4">
                      <div className="flex items-start mb-3">
                        <Avatar name={connection.name} size="lg" className="mr-3" />
                        
                        <div>
                          <h3 className="font-medium text-gray-900">{connection.name}</h3>
                          <p className="text-sm text-gray-500">{connection.title}</p>
                          <p className="text-xs text-gray-400 mt-1">
                            {connection.mutual} mutual connections
                          </p>
                        </div>
                      </div>
                      
                      <button className="w-full border border-linkedin-blue text-linkedin-blue hover:bg-blue-50 py-1 rounded-full text-sm font-medium flex items-center justify-center">
                        <UserPlus size={16} className="mr-1" />
                        Connect
                      </button>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Network;
