import Cookies from 'js-cookie';
import HomePage from './HomePage';

export default function UserPage() {
  const cookie = Cookies.get('Dsh');
  return cookie ? <div>UserPage</div> : <HomePage />;
}
