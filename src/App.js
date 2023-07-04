import './App.scss';
import { Routes, Route } from 'react-router-dom';
import About from './containers/about';
import Contact from './containers/contact';
import Home from './containers/home';
import Resume from './containers/resume';
import Portfolio from './containers/portfolio';
import NavBar from './components/navBar';
import Theme from './components/theme';

function App() {
  return (
    <div className="App">
      <div className='App__navbar-wrapper'>
        <NavBar />
      </div>
      <div className='App__main-content-wrapper'>
        <Theme/>
        <Routes>
          <Route path='/' index element={<Home />} />
          <Route path='/about' index element={<About />} />
          <Route path='/contact' index element={<Contact />} />
          <Route path='/portfolio' index element={<Portfolio />} />
          <Route path='/resume' index element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
