import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { recoilKeys } from './key';

// type
interface testStateProps {
  message: string;
}

const defaultState: testStateProps = {
  message: 'test',
};

const testState = atom<testStateProps>({
  key: recoilKeys.testStateKey,
  default: defaultState,
});

export const useTestState = () => useRecoilState(testState);
export const useTestSet = () => useSetRecoilState(testState);
export const useTestValue = () => useRecoilValue(testState);
