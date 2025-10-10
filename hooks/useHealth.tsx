import { useContext } from 'react';
import { HealthContext } from '../contexts/HealthContext';

export function useHealth() {
  const context = useContext(HealthContext);
  if (!context) {
    throw new Error('useHealth must be used within HealthProvider');
  }
  return context;
}