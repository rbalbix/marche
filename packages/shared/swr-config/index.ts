import useSWR from 'swr';
import api from '@marche/axios-config';

export default function useFetch(url: string) {
  const { data, error } = useSWR(url, async url => {
    const response = await api.get(url);

    return response.data;
  });

  return { data, error };
}
