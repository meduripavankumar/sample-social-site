
import React from 'react';

interface AvatarProps {
  name: string;
  imageUrl?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeClasses = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-16 h-16 text-lg',
};

const Avatar = ({ 
  name, 
  imageUrl, 
  size = 'md',
  className = '',
}: AvatarProps) => {
  const initials = name
    .split(' ')
    .map(part => part[0])
    .join('')
    .toUpperCase();

  return (
    <>
      {imageUrl ? (
        <img 
          src={imageUrl} 
          alt={name} 
          className={`${sizeClasses[size]} rounded-full object-cover ${className}`}
        />
      ) : (
        <div 
          className={`${sizeClasses[size]} rounded-full bg-gray-300 flex items-center justify-center ${className}`}
        >
          <span className="font-medium text-gray-600">{initials}</span>
        </div>
      )}
    </>
  );
};

export default Avatar;
