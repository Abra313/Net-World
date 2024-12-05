import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from '../src/Context/AuthContext';
import Login from './Auth/loginPage';
import SignUp from './Auth/signUpPage';
import LostPassword from './Auth/LostPassword';
import UserPage from './pages/userPage/userPage';
import FriendList from './pages/friendsPage/friends';

const AppRoute = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/lost" element={<LostPassword />} />
          <Route path="/user/*" element={<UserPage />} />
          <Route path="/user/friends" element={<FriendList />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
};

export default AppRoute;
