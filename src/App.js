import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import Drops from './Drops';
import Caps from './Caps';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import AddCap from './pages/AddCap';
import { AuthProvider } from './context/AuthContext';
import './App.css';
import ProfilePage from './pages/ProfilePage';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/drops" element={<Drops />} />
            <Route element={<ProtectedRoute />} >
              <Route path="/caps" element={<Caps />} />
              <Route path="/add-cap" element={<AddCap />} />
              <Route path="/cap:id" element={<AddCap />} />
              <Route path="/profile" element={<ProfilePage />} />
            </Route>
        </Routes>
      </AuthProvider>
    </div>
  );
}

export default App;
