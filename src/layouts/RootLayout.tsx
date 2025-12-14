import { Outlet } from 'react-router-dom';
import BottomNav from '../components/BottomNav';
import Header from '../components/Header';

const RootLayout = () => {
  return (
    <div className="app-shell">
      <Header />
      <main className="app-content">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default RootLayout;
