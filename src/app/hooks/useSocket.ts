'use client';

import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const socket = io('http://localhost:3000', {  // Ensure this URL is correct
  transports: ['websocket'],  // Enforce WebSocket transport for stability
});


export const useSocket = (onMessage: (msg: string) => void) => {
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // Handle connection
    socket.on('connect', () => {
      setIsConnected(true);1
      console.log('Connected to WebSocket:', socket.id);
    });

    // Handle disconnection
    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('Disconnected from WebSocket');
    });

    // Handle incoming messages
    socket.on('message', onMessage);

    // Clean up socket listeners on component unmount
    return () => {
      socket.off('connect');
      socket.off('disconnect');
      socket.off('message');
    };
  }, [onMessage]);

  const sendMessage = (msg: string) => {
    if (isConnected) {
      socket.emit('message', msg);  // Send message to WebSocket server
    } else {
      console.error('Socket is not connected');
    }
  };

  return { sendMessage, isConnected };
};
