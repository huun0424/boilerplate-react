import axios from 'axios';

export interface postAgifyRequest {
  name: string;
}

export interface postAgifyResult {
  count: number;
  name: string;
  age: number;
}

const postAgify = async (body: postAgifyRequest) => {
  const res = await axios.post<postAgifyResult>(`https://jsonplaceholder.typicode.com/posts`, {
    ...body,
    age: 34,
  });
  return res.data;
};

export default postAgify;
