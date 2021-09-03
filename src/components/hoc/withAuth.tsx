import { verifyToken } from '@/store/actions/auth';
import { getCurrentUser } from '@/store/selectors/auth';
import React, { ReactNode, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Empty = () => <div />;

const withAuth: ReactNode = (AuthComponent: React.FC) => {
  const AuthenHOC: React.FC = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getCurrentUser);

    useEffect(() => {
      dispatch(verifyToken());
    }, [dispatch]);

    return currentUser ? <AuthComponent /> : <Empty />;
  };

  return AuthenHOC;
};

export default withAuth;
