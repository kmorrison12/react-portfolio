import React from 'react'
import Header from './components/pages/Header';
import Footer from './components/pages/Footer'
import PortfolioContainer from './components/PortfolioContainer';
import About from './components/pages/About';
import ContactForm from './components/pages/ContactForm';
import Projects from './components/pages/Projects';
import ProjectCard from './components/pages/ProjectCard';

function App() {
  return (
    <div>
    <Header />
    <ProjectCard />
    <Footer />
    </div>
  );
}

export default App;
