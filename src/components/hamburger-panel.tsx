import { GiHamburgerMenu } from 'react-icons/gi';

const HamburgerPanel = () => {
  return (
    <button
      className="hamburger-icon"
      aria-label="Open navigation menu"
      title="Open navigation menu"
    >
      <GiHamburgerMenu aria-hidden="true" />
    </button>
  );
};

export { HamburgerPanel };
