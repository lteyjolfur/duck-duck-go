import logo from './logo.svg';
import './App.css';
import {Header} from './components/header'
import {LogoHomepageLink} from './components/logo-homepage-link.jsx'
import {Searchbar} from './components/searchbar'

function App() {
  return (
    <div className='main'>
    <div className="App">
      <Header></Header>
      <header className="App-header">

        <LogoHomepageLink/>
        <Searchbar/>
      </header>
      
    </div>
    </div>
  );
}

export default App;
