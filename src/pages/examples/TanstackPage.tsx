/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';
import useAgifyMutation from 'src/apis/mutations/useAgifyMutation';
import { postAgifyResult } from 'src/apis/postAgify';
import useAgifyQuery from 'src/apis/queries/useAgifyQuery';

const titleStyle = () => css`
  font-size: 20px;
  font-weight: bold;
`;

const TanstackPage = () => {
  const [mutationData, setMutationData] = useState<postAgifyResult>();

  const { data } = useAgifyQuery('dave');
  const { mutateAsync: agifyMutation } = useAgifyMutation({ name: 'dave' });

  const mutationHandler = async () => {
    const res = await agifyMutation();
    setMutationData(res);
  };

  return (
    <div>
      <p css={titleStyle}>tanstack example page</p>
      <p>request: dave의 나이는? </p>
      <p>{`get query response: ${data?.age}세`}</p>

      <button type="button" onClick={mutationHandler}>
        post mutation request
      </button>
      {mutationData && <p>{`post mutation response: ${mutationData?.age}세`}</p>}
    </div>
  );
};

export default TanstackPage;
