// ...existing code...
import { Header } from './components/header';
import { LogoHomepageLink } from './components/logo-homepage-link';
import { Searchbar } from './components/searchbar';
import DownloadButton from './components/download-button';
import { ThemeProvider } from './providers/theme-provider';

function App() {
  return (
    <main className="main" aria-label="Main content">
      <ThemeProvider>
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
      </ThemeProvider>
    </main>
  );
}

export default App;
