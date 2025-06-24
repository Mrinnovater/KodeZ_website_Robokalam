import { Outlet } from 'react-router-dom';
import PublicHeader from '../PublicHeader';

export default function PublicLayout({ setIsLoginOpen, setIsSignupOpen }) {
  const userRole = localStorage.getItem('userRole');

  return (
    <>
      {!userRole && (
        <PublicHeader
          setIsLoginOpen={setIsLoginOpen}
          setIsSignupOpen={setIsSignupOpen}
        />
      )}
      <Outlet />
    </>
  );
}
