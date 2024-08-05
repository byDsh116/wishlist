import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducers/store';
import CreateRoomModal from '../components/CreateRoomModal';

function UserPage(): JSX.Element {
  const { username } = useParams<{ username: string }>();
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/');
    }
  }, [isLoggedIn, navigate]);

  return (
    <div>
      <h1>Welcome, {username}!</h1>
      <p>This is your user page.</p>
      <CreateRoomModal/>
    </div>
  );
}

export default UserPage;
