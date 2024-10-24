export interface Station {
  id: string;
  name: string;
  lines: string[];
  location: {
    lat: number;
    lng: number;
  };
  surface: {
    total: number;
    platforms: number;
    halls: number;
  };
  equipment: {
    elevators: number;
    escalators: number;
    ticketMachines: number;
  };
  cleaningSchedule: {
    lastCleaned: string;
    nextScheduled: string;
    frequency: string;
    shifts: {
      day: boolean;
      night: boolean;
    };
    weekendCoverage: boolean;
    weeklySchedule: {
      [key in WeekDay]: {
        start: string;
        end: string;
        team: string;
        tasks: string[];
      }[];
    };
  };
  status: 'propre' | 'attention_requise' | 'planifie';
  dailyTraffic: number;
  facilities: string[];
  maintenanceTeam: {
    size: number;
    supervisor: string;
  };
  lastInspection: string;
  nextInspection: string;
  interventionHistory: {
    date: string;
    type: string;
    description: string;
  }[];
}

export type WeekDay = 'lundi' | 'mardi' | 'mercredi' | 'jeudi' | 'vendredi' | 'samedi' | 'dimanche';