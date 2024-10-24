import { getStations, getStationDetails, ApiError } from '../api/stations';
import { mockStations } from '../api/mockData';

describe('Station API', () => {
  test('getStations returns all stations', async () => {
    const stations = await getStations();
    expect(stations).toEqual(mockStations);
    expect(stations.length).toBe(3);
  });

  test('getStationDetails returns correct station', async () => {
    const station = await getStationDetails('1');
    expect(station).toEqual(mockStations[0]);
    expect(station.name).toBe('Châtelet');
  });

  test('getStationDetails throws error for invalid ID', async () => {
    await expect(getStationDetails('999')).rejects.toThrow(ApiError);
  });
});