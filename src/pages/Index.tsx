
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedArtworks from "@/components/FeaturedArtworks";
import ArtistBio from "@/components/ArtistBio";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Juliana's Art - Whimsical Paintings from the Heart</title>
        <meta name="description" content="Discover unique paintings that capture moments of joy, wonder, and the beauty of everyday life by artist Juliana." />
      </Helmet>
      
      <Navbar />
      
      <main>
        <HeroSection />
        <FeaturedArtworks />
        <ArtistBio />
        <Testimonials />
        <ContactCTA />
      </main>
      
      <Footer />
    </>
  );
};

export default Index;
