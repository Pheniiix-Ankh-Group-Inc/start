import './App.css'
import CallToAction from './components/CallToAction';
import DescriptionParagraph from './components/DescriptionParagraph';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroText from './components/IntroText';
import ServicesSection from './components/ServicesSection';

function App() {

  return (
    <>
    <Header />
    <HeroSection />
    <IntroText />
    <DescriptionParagraph />
    <ServicesSection />
    <CallToAction />
    <Footer />
    </>
    
  );
}

export default App
