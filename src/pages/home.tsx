import { LogoHomepageLink } from '../components/logo-homepage-link';
import { Searchbar } from '../components/searchbar';
import DownloadButton from '../components/download-button/download-button';

export default function Home() {
  return (
    <>
      <header className="App-header">
        <h1 className="visually-hidden">DuckDuckGo-inspired search homepage</h1>

        <LogoHomepageLink />
        <Searchbar />
        <p className="privacy-text">Privacy, simplified.</p>
      </header>

      <DownloadButton />
    </>
  );
}
