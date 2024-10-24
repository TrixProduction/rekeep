import React, { useState } from 'react';
import { Station, WeekDay } from '../types/station';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';

interface WeeklyScheduleProps {
  station: Station;
}

const DAYS: WeekDay[] = ['lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi', 'dimanche'];

export const WeeklySchedule: React.FC<WeeklyScheduleProps> = ({ station }) => {
  const [expandedDay, setExpandedDay] = useState<WeekDay | null>(null);

  const toggleDay = (day: WeekDay) => {
    setExpandedDay(expandedDay === day ? null : day);
  };

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2">
        <Clock className="w-5 h-5 text-accent-600" />
        Planning Hebdomadaire
      </h3>
      
      <div className="space-y-2">
        {DAYS.map((day) => {
          const schedules = station.cleaningSchedule.weeklySchedule[day];
          const isExpanded = expandedDay === day;
          
          return (
            <div
              key={day}
              className="border rounded-lg overflow-hidden bg-white dark:bg-dark-700"
            >
              <button
                onClick={() => toggleDay(day)}
                className="w-full px-4 py-3 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-dark-600"
              >
                <span className="font-medium capitalize">{day}</span>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {schedules.length} équipe(s)
                  </span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>
              
              {isExpanded && (
                <div className="px-4 pb-3 space-y-3">
                  {schedules.map((schedule, index) => (
                    <div
                      key={index}
                      className="text-sm space-y-2 pt-3 border-t first:border-t-0 first:pt-0"
                    >
                      <div className="flex justify-between text-gray-600 dark:text-gray-300">
                        <span>{schedule.team}</span>
                        <span>{schedule.start} - {schedule.end}</span>
                      </div>
                      <ul className="list-disc list-inside text-gray-500 dark:text-gray-400">
                        {schedule.tasks.map((task, taskIndex) => (
                          <li key={taskIndex}>{task}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};