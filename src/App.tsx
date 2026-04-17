import './App.css';
import { Header } from './components/header';
import { LogoHomepageLink } from './components/logo-homepage-link';
import { Searchbar } from './components/searchbar';
import DownloadButton from './components/download-button';

function App() {
  return (
    <main className="main" aria-label="Main content">
      <div className="App">
        <Header />
        <header className="App-header">
          <h1 className="visually-hidden">
            DuckDuckGo-inspired search homepage
          </h1>
          <LogoHomepageLink />
          <Searchbar />
          <p className="privacy-text">Privacy, simplified.</p>
        </header>
        <DownloadButton />
      </div>
    </main>
  );
}

export default App;
