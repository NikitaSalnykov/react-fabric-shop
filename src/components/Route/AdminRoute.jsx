import { useSelector } from 'react-redux';
import { getUser } from '../../Redux/auth/auth-selectors';

export default function PrivateRoute({ children }) {
  const { role } = useSelector(getUser) || '';
  console.log(role);

  return role === 'admin' ? children : null;
}
