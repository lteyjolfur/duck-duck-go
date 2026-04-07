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
        <header className="App-header" role="banner">
          <h1 className="visually-hidden">DuckDuckGo Clone</h1>
          <LogoHomepageLink />
          <Searchbar />
          <p className="privacy-text">Privacy, simplified.</p>
        </header>
        <DownloadButton />
        <section aria-labelledby="features-heading">
          <h2 id="features-heading">Explore our features</h2>
        </section>
      </div>
    </main>
  );
}

export default App;
