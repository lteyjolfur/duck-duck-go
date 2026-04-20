import type { PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';

type DrawerLinkProps = PropsWithChildren<{
  to: string;
  onNavigate?: () => void;
}>;

export default function DrawerLink({
  to,
  onNavigate,
  children,
}: DrawerLinkProps) {
  return (
    <Link className="drawer-link" to={to} onClick={onNavigate}>
      {children}
    </Link>
  );
}
