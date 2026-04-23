import './drawer.css';

import SideDrawer from './side-drawer';
import DrawerTitle from './drawer-title';
import DrawerLink from './drawer-link';

export default function ComposedDrawer({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <SideDrawer open={open} onClose={onClose} title="Menu">
      <nav id="site-drawer" aria-label="Sidebar navigation">
        <div className="drawer-section">
          <DrawerTitle>Search</DrawerTitle>

          <DrawerLink to="/" onNavigate={onClose}>
            Homepage
          </DrawerLink>

          <DrawerLink to="/about" onNavigate={onClose}>
            About this project
          </DrawerLink>
        </div>

        <div className="drawer-section">
          <DrawerTitle>Settings</DrawerTitle>

          <button
            type="button"
            className="drawer-link drawer-link-button"
            onClick={onClose}
          >
            Theme settings
          </button>
        </div>

        <div className="drawer-section">
          <DrawerTitle>Other</DrawerTitle>

          <a
            className="drawer-link"
            href="https://duck-duck-go-green.vercel.app/"
            target="_blank"
            rel="noreferrer"
            onClick={onClose}
          >
            Live demo
          </a>
        </div>

        <a
          className="drawer-link"
          href="https://github.com/lteyjolfur/duckduckgo-homepage-react"
          target="_blank"
          rel="noreferrer"
          onClick={onClose}
        >
          Source code
        </a>
      </nav>
    </SideDrawer>
  );
}
