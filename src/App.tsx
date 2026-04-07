import './App.css';
import {Header} from './components/header'
import {LogoHomepageLink} from './components/logo-homepage-link'
import {Searchbar} from './components/searchbar'
import DownloadButton from './components/download-button';

function App() {
  return (
    <>
    <div className='main'>
      <div className="App">
        <Header></Header>
        <header className="App-header">

          <LogoHomepageLink/>
          <Searchbar/>
          <p className='privacy-text'>
            Privacy, simplified.
          </p>
        </header>
      <DownloadButton/>
      <p>
        <strong>Explore our features</strong>
      </p>
      
      </div>
      
    </div>
    </>
  );
}

export default App;
