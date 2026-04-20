import type { PropsWithChildren } from 'react';

export default function DrawerTitle({ children }: PropsWithChildren) {
  return <p className="drawer-section-title">{children}</p>;
}
