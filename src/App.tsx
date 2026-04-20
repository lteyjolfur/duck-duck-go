import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './providers/theme-provider';
import { Header } from './components/header';
import Home from './pages/home';
import AboutPage from './pages/about';

function App() {
  return (
    <ThemeProvider>
      <main className="main" aria-label="Main content">
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutPage />} />
          </Routes>
        </div>
      </main>
    </ThemeProvider>
  );
}

export default App;
