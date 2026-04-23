import logo_homepage from '../logo/logo_homepage.normal.v108.svg';
import logo_dark from '../logo/logo_homepage.alt.v109.svg';
import { useThemeContext } from '../providers/theme-provider';

const LogoHomepageLink = () => {
  const { theme } = useThemeContext();

  const isDark = theme === 'dark';

  return (
    <a
      href="/about"
      aria-label="DuckDuckGo Home"
      tabIndex={-1}
      aria-hidden="true"
    >
      <img
        className="logo-image"
        src={isDark ? logo_dark : logo_homepage}
        alt="DuckDuckGo logo"
      />
    </a>
  );
};

export { LogoHomepageLink };
