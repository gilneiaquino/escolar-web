// useToken.ts
import { useSelector } from 'react-redux';
import { selectToken } from '../jwt/tokenSlice';

export function useToken() {
  return useSelector(selectToken);
}
