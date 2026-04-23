import React from 'react';

interface DropdownItemProps {
  href: string;
  children: React.ReactNode;
  onSelect?: () => void;
}

const DropdownItem = ({ href, children, onSelect }: DropdownItemProps) => (
  <li role="none">
    <a
      href={href}
      role="menuitem"
      tabIndex={0}
      className="dropdown-menu-item"
      onClick={() => onSelect?.()}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onSelect?.();
        }
      }}
      onMouseEnter={(e) => {
        if (
          document.activeElement instanceof HTMLElement &&
          document.activeElement !== e.currentTarget
        ) {
          document.activeElement.blur();
        }
      }}
    >
      {children}
    </a>
  </li>
);

export default DropdownItem;
