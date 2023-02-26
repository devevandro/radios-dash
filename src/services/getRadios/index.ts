import api from '../api';

export const getRadios = async (state: string, region: string): Promise<any[]> => {
  const radios = await api.get(`/${state}?region=${region}`);
  return radios.data;
};
