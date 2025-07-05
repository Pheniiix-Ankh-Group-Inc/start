import HeroSection from '../components/ui/HeroSection';
import Layout from '../components/layout/Layout';
import WhoThisIsFor from '../components/ui/WhoThisIsFor';
import ServicesSection from '../components/ui/ServicesSections';
import LeadMagnetForm from '../components/ui/LeadMagnetForm';
import NewsletterAndFAQSection from '../components/ui/NewsletterAndFAQSection';
import ClientReviewCarousel from '../components/ui/ClientReviewCarousel';

function Home() {
  return (
    <Layout >
      <HeroSection />
      <ServicesSection />
      <WhoThisIsFor />
      <LeadMagnetForm />
      <NewsletterAndFAQSection />
      <ClientReviewCarousel />
    </Layout>
  );
}

export default Home;
