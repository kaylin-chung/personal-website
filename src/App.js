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
          <Route path='/personal-website' index element={<Home />} />
          <Route path='/personal-website/about' index element={<About />} />
          <Route path='/personal-website/contact' index element={<Contact />} />
          <Route path='/personal-website/portfolio' index element={<Portfolio />} />
          <Route path='/personal-website/resume' index element={<Resume />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
