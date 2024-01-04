import useAgifySuspeseQuery from 'src/apis/queries/useAgifySuspeseQuery';

const SuspenseText = () => {
  const { data } = useAgifySuspeseQuery('dave');

  // error 발생 테스트 구문
  // throw new Error('Error!');

  return (
    <div>
      <p>{data?.name}</p>
    </div>
  );
};

export default SuspenseText;
