import logo_homepage from '../logo/logo_homepage.normal.v108.svg';
import logo_dark from '../logo/logo_homepage.alt.v109.svg';
import { useEffect, useState } from 'react';

const LogoHomepageLink = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const current =
      document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light';
    setTheme(current);
  }, []);

  return (
    <a href="/" aria-label="DuckDuckGo Home">
      <img
        className="logo-image"
        src={theme === 'dark' ? logo_dark : logo_homepage}
        alt="DuckDuckGo logo"
      />
    </a>
  );
};

export { LogoHomepageLink };
