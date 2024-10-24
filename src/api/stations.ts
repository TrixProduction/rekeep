import { Station } from '../types/station';
import { mockStations } from './mockData';

export class ApiError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'ApiError';
  }
}

// Simulate API delay
const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

export const getStations = async (): Promise<Station[]> => {
  try {
    // Simulate network delay
    await delay(800);
    return mockStations;
  } catch (error) {
    throw new ApiError('Failed to fetch stations');
  }
};

export const getStationDetails = async (id: string): Promise<Station> => {
  try {
    await delay(500);
    const station = mockStations.find(s => s.id === id);
    if (!station) {
      throw new Error('Station not found');
    }
    return station;
  } catch (error) {
    throw new ApiError('Failed to fetch station details');
  }
};