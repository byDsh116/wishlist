import Cookies from 'js-cookie';
import HomePage from './HomePage';
import CreateRoomModal from '../components/CreateRoomModal';

export default function UserPage() {
  const cookie = Cookies.get('Dsh');
  return cookie ? (
    <div>
      UserPage
      <CreateRoomModal />
    </div>
  ) : (
    <HomePage />
  );
}
