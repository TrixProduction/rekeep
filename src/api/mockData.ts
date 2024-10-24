import { Station } from '../types/station';

export const mockStations: Station[] = [
  {
    id: '1',
    name: 'Châtelet',
    lines: ['1', '4', '7', '11', '14'],
    location: { lat: 48.8586, lng: 2.3488 },
    surface: {
      total: 28500,
      platforms: 12000,
      halls: 16500
    },
    equipment: {
      elevators: 8,
      escalators: 32,
      ticketMachines: 24
    },
    cleaningSchedule: {
      lastCleaned: '2024-03-10T08:00:00Z',
      nextScheduled: '2024-03-17T08:00:00Z',
      frequency: 'Hebdomadaire',
      shifts: {
        day: true,
        night: true
      },
      weekendCoverage: true,
      weeklySchedule: {
        lundi: [
          {
            start: '06:00',
            end: '14:00',
            team: 'Équipe Matin',
            tasks: ['Nettoyage des quais', 'Désinfection des surfaces', 'Vérification des équipements']
          },
          {
            start: '22:00',
            end: '05:00',
            team: 'Équipe Nuit',
            tasks: ['Nettoyage approfondi', 'Maintenance préventive']
          }
        ],
        mardi: [
          {
            start: '06:00',
            end: '14:00',
            team: 'Équipe Matin',
            tasks: ['Nettoyage des halls', 'Entretien des escalators']
          }
        ],
        mercredi: [
          {
            start: '06:00',
            end: '14:00',
            team: 'Équipe Matin',
            tasks: ['Nettoyage complet', 'Inspection des ascenseurs']
          }
        ],
        jeudi: [
          {
            start: '06:00',
            end: '14:00',
            team: 'Équipe Matin',
            tasks: ['Nettoyage des quais', 'Maintenance des équipements']
          }
        ],
        vendredi: [
          {
            start: '06:00',
            end: '14:00',
            team: 'Équipe Matin',
            tasks: ['Nettoyage approfondi', 'Préparation weekend']
          },
          {
            start: '22:00',
            end: '05:00',
            team: 'Équipe Nuit',
            tasks: ['Maintenance spéciale', 'Nettoyage intensif']
          }
        ],
        samedi: [
          {
            start: '07:00',
            end: '15:00',
            team: 'Équipe Weekend',
            tasks: ['Nettoyage standard', 'Surveillance']
          }
        ],
        dimanche: [
          {
            start: '07:00',
            end: '15:00',
            team: 'Équipe Weekend',
            tasks: ['Nettoyage léger', 'Maintenance basique']
          }
        ]
      }
    },
    status: 'propre',
    dailyTraffic: 298000,
    facilities: ['Ascenseurs', 'Guichet', 'Toilettes', 'Zone Commerciale', 'WiFi'],
    maintenanceTeam: {
      size: 12,
      supervisor: 'Marie Laurent'
    },
    lastInspection: '2024-02-28T10:00:00Z',
    nextInspection: '2024-03-28T10:00:00Z',
    interventionHistory: [
      {
        date: '2024-03-10T08:00:00Z',
        type: 'Nettoyage Complet',
        description: 'Nettoyage approfondi des quais et halls'
      },
      {
        date: '2024-03-05T22:00:00Z',
        type: 'Maintenance',
        description: 'Réparation escalator #12'
      }
    ]
  },
  // ... (similar weekly schedule data for other stations)
];