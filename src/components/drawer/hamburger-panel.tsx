import { GiHamburgerMenu } from 'react-icons/gi';

type HamburgerPanelProps = {
  onClick: () => void;
};

const HamburgerPanel = ({ onClick }: HamburgerPanelProps) => {
  return (
    <button
      className="hamburger-icon"
      aria-label="Open navigation menu"
      title="Open navigation menu"
      onClick={onClick}
    >
      <GiHamburgerMenu aria-hidden="true" />
    </button>
  );
};

export { HamburgerPanel };
