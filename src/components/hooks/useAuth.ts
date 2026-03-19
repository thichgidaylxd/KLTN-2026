import { useSelector, useDispatch } from 'react-redux';

export const useAuth = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: any) => state.auth);

  return {
    ...auth,
    dispatch,
  };
};
