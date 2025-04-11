
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ArtistBio = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-48 h-48 bg-artist-lilac rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-12 -right-12 w-36 h-36 bg-artist-pink rounded-full opacity-20 blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] md:h-[500px]">
              <div className="absolute -left-4 -top-4 w-full h-full bg-artist-pink rounded-md"></div>
              <div className="absolute -right-4 -bottom-4 w-full h-full bg-artist-sage rounded-md"></div>
              <img
                src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&auto=format&fit=crop&q=80"
                alt="Juliana in her studio"
                className="absolute inset-0 object-cover w-full h-full rounded-md shadow-lg z-10"
              />
            </div>
          </div>
          
          <div>
            <span className="block text-sm font-medium text-artist-dustyrose mb-2">About the Artist</span>
            <h2 className="font-serif text-3xl md:text-4xl mb-6 artistic-border relative inline-block pb-4">
              Meet Juliana
            </h2>
            <div className="space-y-4 text-lg">
              <p>
                Based in a small studio overlooking the mountains, I create art that celebrates the whimsical moments of everyday life. My paintings blend vibrant colors with delicate details to capture those fleeting feelings of joy and wonder.
              </p>
              <p>
                My journey as an artist began when I was just a child, drawing on any surface I could find. Today, my work has evolved into a celebration of nature, human connections, and the small moments that make life beautiful.
              </p>
              <p>
                Each of my pieces is created with love and attention to detail, meant to bring a touch of whimsy and warmth to your home.
              </p>
            </div>
            <Button asChild className="mt-8 bg-artist-dustyrose hover:bg-opacity-80 text-white font-medium rounded-md px-8 py-3">
              <Link to="/about">Read My Story</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistBio;
