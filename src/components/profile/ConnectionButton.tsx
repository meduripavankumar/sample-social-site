
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check, UserPlus, Clock } from 'lucide-react';

interface ConnectionButtonProps {
  isConnected?: boolean;
  isPending?: boolean;
}

const ConnectionButton = ({ 
  isConnected = false, 
  isPending = false 
}: ConnectionButtonProps) => {
  const [connected, setConnected] = useState(isConnected);
  const [pending, setPending] = useState(isPending);

  const handleConnect = () => {
    if (!connected && !pending) {
      setPending(true);
      // Here you would make an API call to send a connection request
      console.log('Connection request sent');
    }
  };

  return (
    <>
      {connected ? (
        <Button 
          variant="outline" 
          size="sm"
          className="bg-gray-100 text-gray-800 hover:bg-gray-200"
        >
          <Check size={16} className="mr-1.5" />
          Connected
        </Button>
      ) : pending ? (
        <Button 
          variant="outline" 
          size="sm"
          className="bg-gray-100 text-gray-800 hover:bg-gray-200"
          disabled
        >
          <Clock size={16} className="mr-1.5" />
          Pending
        </Button>
      ) : (
        <Button 
          size="sm"
          className="bg-linkedin-blue hover:bg-linkedin-darkBlue text-white"
          onClick={handleConnect}
        >
          <UserPlus size={16} className="mr-1.5" />
          Connect
        </Button>
      )}
    </>
  );
};

export default ConnectionButton;
