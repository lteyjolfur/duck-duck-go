import { HamburgerPanel } from './drawer/hamburger-panel';
import { Dropdown } from './dropdown';
import { FaBullhorn } from 'react-icons/fa';
import DarkmodeSwitch from './darkmode-switch';
import ComposedDrawer from './drawer/composed-drawer';

import { useState } from 'react';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const openDrawer = () => setDrawerOpen(true);

  const closeDrawer = () => setDrawerOpen(false);

  return (
    <header className="header" role="banner">
      <DarkmodeSwitch />
      <Dropdown>
        <FaBullhorn aria-label="Announcements" title="Announcements" />
      </Dropdown>
      <HamburgerPanel onClick={openDrawer} />
      <ComposedDrawer open={drawerOpen} onClose={closeDrawer} />
    </header>
  );
};

export { Header };
