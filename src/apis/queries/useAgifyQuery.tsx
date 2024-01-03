import { apiKeys } from 'src/apis/apiKeys';
import getAgify, { getAgifyResult } from 'src/apis/getAgify';
import { useQuery } from '@tanstack/react-query';

const useAgifyQuery = (name: string) =>
  useQuery<getAgifyResult, Error>({ queryKey: apiKeys.agify(name), queryFn: () => getAgify(name) });

export default useAgifyQuery;
