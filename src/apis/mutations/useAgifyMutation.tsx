import { useMutation } from '@tanstack/react-query';
import postAgify, { postAgifyRequest } from 'src/apis/postAgify';

const useAgifyMutation = (body: postAgifyRequest) =>
  useMutation({ mutationFn: () => postAgify(body) });

export default useAgifyMutation;
