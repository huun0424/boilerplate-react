import { apiKeys } from 'src/apis/apiKeys';
import getAgify, { getAgifyResult } from 'src/apis/getAgify';
import { useSuspenseQuery } from '@tanstack/react-query';

const useAgifySuspeseQuery = (name: string) =>
  useSuspenseQuery<getAgifyResult, Error>({
    queryKey: apiKeys.agify(name),
    queryFn: () => getAgify(name),
  });

export default useAgifySuspeseQuery;
