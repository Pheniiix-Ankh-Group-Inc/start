import CallToAction from './components/CallToAction';
import DescriptionParagraph from './components/DescriptionParagraph';
import Faq from './components/Faq';
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import IntroText from './components/IntroText';
import LeadMagnetForm from './components/LeadMagnetForm';
import NewsletterCTA from './components/NewsletterCTA';
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
        <LeadMagnetForm />
        <NewsletterCTA />
        <Faq />
        <Footer />
    </>
  );
}

export default App
