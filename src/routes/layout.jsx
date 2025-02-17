import { Outlet } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../index.css'
import Footer from '../components/footer/Footer';

const Layout = () => {
  return (
  <div className="body_container">
    <div className="main_container">
    <Navigation />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  </div>
  );
};

export default Layout;
