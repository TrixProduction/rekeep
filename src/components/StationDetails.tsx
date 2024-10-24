import React from 'react';
import { Station } from '../types/station';
import { X, MapPin, Clock, Calendar, Users, Train } from 'lucide-react';
import { WeeklySchedule } from './WeeklySchedule';

interface StationDetailsProps {
  station: Station;
  onClose: () => void;
}

export const StationDetails: React.FC<StationDetailsProps> = ({ station, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto">
      <div className="bg-white dark:bg-dark-700 rounded-lg w-full max-w-2xl my-8">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">{station.name}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 dark:hover:bg-dark-600 rounded-full"
            >
              <X className="w-6 h-6 text-gray-500 dark:text-gray-400" />
            </button>
          </div>

          <div className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center">
                <Train className="w-5 h-5 mr-3 text-green-600" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Lignes</p>
                  <p className="font-medium">{station.lines.join(', ')}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Users className="w-5 h-5 mr-3 text-orange-600" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Trafic Journalier</p>
                  <p className="font-medium">{station.dailyTraffic.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-3 text-blue-600" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Fréquence de Nettoyage</p>
                  <p className="font-medium">{station.cleaningSchedule.frequency}</p>
                </div>
              </div>

              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-3 text-purple-600" />
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Prochain Nettoyage Prévu</p>
                  <p className="font-medium">
                    {new Date(station.cleaningSchedule.nextScheduled).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            <div className="border-t dark:border-dark-600 pt-6">
              <h3 className="text-lg font-semibold mb-3">Équipements</h3>
              <div className="flex flex-wrap gap-2">
                {station.facilities.map((facility) => (
                  <span
                    key={facility}
                    className="px-3 py-1 bg-gray-100 dark:bg-dark-600 text-gray-700 dark:text-gray-300 rounded-full text-sm"
                  >
                    {facility}
                  </span>
                ))}
              </div>
            </div>

            <div className="border-t dark:border-dark-600 pt-6">
              <WeeklySchedule station={station} />
            </div>

            <div className="flex items-start">
              <MapPin className="w-5 h-5 mr-3 text-red-600 mt-1" />
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">Emplacement</p>
                <p className="font-medium">
                  {station.location.lat}, {station.location.lng}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};