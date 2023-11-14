// useToken.ts
import { useSelector } from 'react-redux';
import { selectToken } from '../Jwt/tokenSlice';

export function useToken() {
  return useSelector(selectToken);
}
