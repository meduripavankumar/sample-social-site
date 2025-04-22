
import React from 'react';
import { Edit, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ConnectionButton from './ConnectionButton';

interface ProfileCardProps {
  name: string;
  headline: string;
  location: string;
  connections: number;
  about: string;
  imageUrl?: string;
  backgroundUrl?: string;
  isOwnProfile?: boolean;
  isConnected?: boolean;
  isPending?: boolean;
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  name,
  headline,
  location,
  connections,
  about,
  imageUrl,
  backgroundUrl,
  isOwnProfile = false,
  isConnected = false,
  isPending = false,
}) => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mb-4">
      <div 
        className="h-32 bg-cover bg-center bg-linkedin-blue" 
        style={backgroundUrl ? { backgroundImage: `url(${backgroundUrl})` } : {}}
      >
        {isOwnProfile && (
          <div className="flex justify-end p-2">
            <button className="p-1 bg-white rounded-full">
              <Edit size={16} className="text-gray-700" />
            </button>
          </div>
        )}
      </div>
      
      <div className="relative px-4 sm:px-6">
        <div className="-mt-16 mb-4">
          {imageUrl ? (
            <img 
              src={imageUrl} 
              alt={name} 
              className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-white rounded-full object-cover"
            />
          ) : (
            <div className="w-24 h-24 sm:w-32 sm:h-32 border-4 border-white rounded-full bg-gray-300 flex items-center justify-center">
              <span className="text-2xl font-bold text-gray-500">
                {name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          )}
        </div>
        
        {isOwnProfile && (
          <div className="absolute right-4 top-4 sm:right-6 sm:top-6">
            <button className="p-1.5 bg-white rounded-full border border-gray-300">
              <Edit size={16} className="text-gray-700" />
            </button>
          </div>
        )}
        
        <div className="pb-5">
          <div className="flex flex-wrap justify-between items-start">
            <div className="mb-2">
              <h1 className="text-xl font-bold text-gray-900">{name}</h1>
              <p className="text-gray-600">{headline}</p>
              <div className="flex items-center text-gray-500 text-sm mt-1">
                <MapPin size={14} className="mr-1" />
                <span>{location}</span>
              </div>
              <p className="text-linkedin-blue text-sm font-medium mt-1">
                {connections} connections
              </p>
            </div>
            
            {!isOwnProfile && (
              <div className="mt-2">
                <ConnectionButton isConnected={isConnected} isPending={isPending} />
              </div>
            )}
            
            {isOwnProfile && (
              <div className="mt-2">
                <Button variant="outline" className="mr-2">
                  Add profile section
                </Button>
                <Button variant="outline">
                  More
                </Button>
              </div>
            )}
          </div>
          
          <div className="mt-4">
            <h2 className="text-lg font-semibold text-gray-900">About</h2>
            <p className="text-gray-700 mt-2">{about}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
