import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import Container from './Container';

import logo from '../assets/logoipsum.svg';
import { AlignJustify } from 'lucide-react';
import MegaMenu from './MegaMenu';
import MobileNavigationDrawer from './MobileNavigationDrawer';

const Navigation = () => {


  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const drawerButtonRef = useRef(null);

  return (
    <header className="nav__header">
      <Container className="contnavbar">
        <div className="toolbar">
          <button
            ref={drawerButtonRef}
            className="menu_icon md:hidden"
            aria-haspopup="true"
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
          >
            {/* Mobile Hamburger menu */}
            <AlignJustify />
          </button>
          <Link className="logo__link" to={'/'}>
            <img src={logo} />
          </Link>

          <div className="hidden md:block">
            <MegaMenu />
          </div>

          {/* Mobile navigation drawer */}
          <div className="md:hidden absolute">
            <MobileNavigationDrawer
              {...{ isDrawerOpen, setIsDrawerOpen, drawerButtonRef }}
            />
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Navigation;
