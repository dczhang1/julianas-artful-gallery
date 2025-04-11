
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-artist-pink opacity-20 rounded-bl-[200px]"></div>
        <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-artist-lilac opacity-20 rounded-tr-[150px]"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight mb-6">
            Whimsical Paintings <br />
            <span className="text-artist-dustyrose">From the Heart</span>
          </h1>
          <p className="text-lg mb-8 max-w-lg">
            Discover unique paintings that capture moments of joy, wonder, and the beauty of everyday life. Each stroke tells a story waiting to be hung in your home.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild className="bg-artist-dustyrose hover:bg-opacity-80 text-white font-medium rounded-md px-8 py-3">
              <Link to="/gallery">Explore Gallery</Link>
            </Button>
            <Button asChild variant="outline" className="border-artist-dustyrose text-artist-dustyrose hover:bg-artist-pink hover:text-artist-dustyrose font-medium rounded-md px-8 py-3">
              <Link to="/shop">Shop Now</Link>
            </Button>
          </div>
        </div>
        
        <div className="order-1 lg:order-2 relative">
          <div className="relative w-full h-[400px] md:h-[500px] animate-float">
            <div className="absolute inset-0 bg-artist-sage rounded-tl-[100px] rounded-br-[100px] -rotate-6 transform"></div>
            <img
              src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&auto=format&fit=crop&q=80"
              alt="Juliana's colorful painting"
              className="absolute inset-2 object-cover rounded-tl-[90px] rounded-br-[90px] shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
