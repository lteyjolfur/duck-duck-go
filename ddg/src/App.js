import logo from './logo.svg';
import './App.css';
import {Header} from './components/header.jsx'
import {LogoHomepageLink} from './components/logo-homepage-link.jsx'
import {Searchbar} from './components/searchbar.jsx'
import DownloadButton from './components/download-button.jsx';

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
    <footer>1232</footer>
    </>
  );
}

export default App;
