import { useState, useCallback } from 'react';

/**
 * useWallet - Mock wallet connection hook
 * 
 * In a real app, this would integrate with Web3 providers like:
 * - MetaMask
 * - WalletConnect
 * - Coinbase Wallet
 */
export const useWallet = () => {
  const [walletAddress, setWalletAddress] = useState<string | undefined>(undefined);
  const [isConnecting, setIsConnecting] = useState(false);

  const connect = useCallback(async () => {
    setIsConnecting(true);
    // Simulate wallet connection delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Mock wallet address
    setWalletAddress('0x3C...9D2');
    setIsConnecting(false);
  }, []);

  const disconnect = useCallback(() => {
    setWalletAddress(undefined);
  }, []);

  return {
    walletAddress,
    isConnecting,
    connect,
    disconnect,
    isConnected: !!walletAddress
  };
};
