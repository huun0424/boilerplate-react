import useAgifyQuery from 'src/queries/useAgifyQuery';

const TanstackPage = () => {
  const { data } = useAgifyQuery('dave');

  return (
    <div>
      <p>tanstack example page</p>
      <p>request: dave의 나이는? </p>
      <p>{`response: ${data?.age}세`}</p>
    </div>
  );
};

export default TanstackPage;
