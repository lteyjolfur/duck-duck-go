import { HamburgerPanel } from './hamburger-panel';
import { Dropdown } from './dropdown';
import { FaBullhorn } from 'react-icons/fa';

const Header = () => {
  return (
    <header className="header" role="banner">
      <Dropdown>
        <FaBullhorn aria-label="Announcements" title="Announcements" />
      </Dropdown>
      <HamburgerPanel />
    </header>
  );
};

export { Header };
