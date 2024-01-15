import { useSelector } from 'react-redux';
import { getIsLoggedIn, getUser } from '../../Redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';
import MainLoader from '../Loader/MainLoader/MainLoader';

export default function AdminRoute({ children }) {
  const user = useSelector(getUser);
  const isLoading = useSelector(getIsLoggedIn);
  console.log(user);
  return (
    <>
      {isLoading ? (
        user.role === 'admin' ? (
          children
        ) : (
          <Navigate to="/login" />
        )
      ) : (
        <MainLoader />
      )}
    </>
  );
}
