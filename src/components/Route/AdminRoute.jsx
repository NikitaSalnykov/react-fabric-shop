import { useSelector } from 'react-redux';
import { getUser } from '../../Redux/auth/auth-selectors';
import { Navigate } from 'react-router-dom';

export default function AdminRoute({ children }) {
  const { role } = useSelector(getUser) || '';
  console.log(role);

  return role === 'admin' ? children : <Navigate to="/login" />;
}
