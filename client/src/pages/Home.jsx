import HeroSection from '../components/ui/HeroSection';
import WhoThisIsFor from '../components/ui/WhoThisIsFor';
import ServicesSection from '../components/ui/ServicesSections';
import LeadMagnetForm from '../components/ui/LeadMagnetForm';
import NewsletterAndFAQSection from '../components/ui/NewsletterAndFAQSection';
import ClientReviewCarousel from '../components/ui/ClientReviewCarousel';

function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhoThisIsFor />
      <LeadMagnetForm />
      <NewsletterAndFAQSection />
      <ClientReviewCarousel />
    </>

  );
}

export default Home;
