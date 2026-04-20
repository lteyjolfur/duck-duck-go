import { HamburgerPanel } from './hamburger-panel';
import { Dropdown } from './dropdown';
import { FaBullhorn } from 'react-icons/fa';
import DarkmodeSwitch from './darkmode-switch';

const Header = () => {
  return (
    <header className="header" role="banner">
      <DarkmodeSwitch />
      <Dropdown>
        <FaBullhorn aria-label="Announcements" title="Announcements" />
      </Dropdown>
      <HamburgerPanel />
    </header>
  );
};

export { Header };
