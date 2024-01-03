import axios from 'axios';

export interface getAgifyResult {
  count: number;
  name: string;
  age: number;
}

const getAgify = async (name: string) => {
  const res = await axios.get<getAgifyResult>(`https://api.agify.io?name=${name}`);
  return res.data;
};

export default getAgify;
