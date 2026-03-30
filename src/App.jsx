import Banner from './components/Banner/banner.jsx';
import Projects from './components/Projects/projects.jsx';
import Footer from './components/Footer/footer.jsx';
import About from './components/About/About.jsx';

import './App.css';

function App() {
  return (
    <div className="app">
      <Banner />
      <Projects />
      <About />
      <Footer />
    </div>
  );
}

export default App;
