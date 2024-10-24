import React, { useState, useEffect } from 'react';
import { getStations, ApiError } from './api/stations';
import { Station } from './types/station';
import { StationCard } from './components/StationCard';
import { StationDetails } from './components/StationDetails';
import { ThemeToggle } from './components/ThemeToggle';
import { Search, Filter } from 'lucide-react';

function App() {
  const [stations, setStations] = useState<Station[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedStation, setSelectedStation] = useState<Station | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    fetchStations();
  }, []);

  const fetchStations = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getStations();
      setStations(data);
    } catch (err) {
      const errorMessage = err instanceof ApiError 
        ? err.message 
        : 'Une erreur inattendue est survenue';
      setError(errorMessage);
      setStations([]);
    } finally {
      setLoading(false);
    }
  };

  const filteredStations = stations.filter(station => {
    const matchesSearch = station.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || station.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStationClick = (id: string) => {
    const station = stations.find(s => s.id === id);
    if (station) setSelectedStation(station);
  };

  const handleRetry = () => {
    fetchStations();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-dark-800 transition-colors">
      <nav className="bg-white dark:bg-dark-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img 
                src="https://rekeepfrance.com/wp-content/uploads/2021/01/favicon-rekeep-1.png"
                alt="Rekeep Logo"
                className="w-8 h-8"
              />
              <h1 className="ml-3 text-2xl font-bold text-gray-800 dark:text-white">Rekeep</h1>
            </div>
            <ThemeToggle />
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
            <input
              type="text"
              placeholder="Rechercher des stations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-500 dark:text-white"
            />
          </div>
          
          <div className="sm:w-48">
            <div className="relative">
              <Filter className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-5 h-5" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-white dark:bg-dark-700 border border-gray-200 dark:border-dark-600 rounded-lg appearance-none focus:outline-none focus:ring-2 focus:ring-accent-500 dark:text-white"
              >
                <option value="all">Tous les statuts</option>
                <option value="propre">Propre</option>
                <option value="attention_requise">Attention requise</option>
                <option value="planifie">Planifié</option>
              </select>
            </div>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-4 border-accent-500 border-t-transparent"></div>
          </div>
        ) : error ? (
          <div className="flex flex-col items-center justify-center h-64 text-center">
            <p className="text-gray-600 dark:text-gray-300 mb-4">{error}</p>
            <button
              onClick={handleRetry}
              className="px-4 py-2 bg-accent-600 text-white rounded-lg hover:bg-accent-700 transition-colors"
            >
              Réessayer
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredStations.map((station) => (
              <StationCard
                key={station.id}
                station={station}
                onClick={handleStationClick}
              />
            ))}
          </div>
        )}

        {selectedStation && (
          <StationDetails
            station={selectedStation}
            onClose={() => setSelectedStation(null)}
          />
        )}
      </main>
    </div>
  );
}

export default App;