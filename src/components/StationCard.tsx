import React from 'react';
import { Station } from '../types/station';
import { Calendar, Users, Train, AlertCircle, ArrowRight } from 'lucide-react';

interface StationCardProps {
  station: Station;
  onClick: (id: string) => void;
}

export const StationCard: React.FC<StationCardProps> = ({ station, onClick }) => {
  const statusColors = {
    propre: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-100',
    attention_requise: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-100',
    planifie: 'bg-accent-100 dark:bg-accent-900 text-accent-800 dark:text-accent-100',
  };

  const statusText = {
    propre: 'Propre',
    attention_requise: 'Attention Requise',
    planifie: 'Planifié',
  };

  return (
    <div 
      onClick={() => onClick(station.id)}
      className="card p-6 cursor-pointer"
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{station.name}</h3>
        <span className={`px-3 py-1 rounded-full text-sm ${statusColors[station.status]}`}>
          {statusText[station.status]}
        </span>
      </div>
      
      <div className="space-y-3">
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Train className="w-5 h-5 mr-2" />
          <span>Lignes: {station.lines.join(', ')}</span>
        </div>
        
        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Users className="w-5 h-5 mr-2" />
          <span>{station.dailyTraffic.toLocaleString()} voyageurs/jour</span>
        </div>

        <div className="flex items-center text-gray-600 dark:text-gray-300">
          <Calendar className="w-5 h-5 mr-2" />
          <span>Prochain nettoyage: {new Date(station.cleaningSchedule.nextScheduled).toLocaleDateString()}</span>
        </div>

        {station.status === 'attention_requise' && (
          <div className="flex items-center text-orange-600 dark:text-orange-400 mt-2">
            <AlertCircle className="w-5 h-5 mr-2" />
            <span>Intervention requise</span>
          </div>
        )}

        <div className="pt-4 flex justify-end">
          <button className="text-accent-600 dark:text-accent-400 hover:text-accent-700 dark:hover:text-accent-300 flex items-center">
            <span className="mr-1">Voir détails</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};