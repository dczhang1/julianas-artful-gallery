
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Sample data - would typically come from a database
const artworks = [
  {
    id: 1,
    title: "Spring Bloom",
    image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=500&auto=format&fit=crop&q=80",
    price: 320,
    category: "Watercolor",
  },
  {
    id: 2,
    title: "Midnight Garden",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=500&auto=format&fit=crop&q=80",
    price: 450,
    category: "Acrylic",
  },
  {
    id: 3,
    title: "Coastal Dreams",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500&auto=format&fit=crop&q=80",
    price: 280,
    category: "Mixed Media",
  },
];

const FeaturedArtworks = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-16", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="font-serif text-3xl md:text-4xl mb-4 artistic-border relative inline-block pb-4">
              Featured Artworks
            </h2>
            <p className="max-w-2xl text-lg">
              A selection of my newest and most beloved paintings, each capturing a unique moment of inspiration.
            </p>
          </div>
          <Button asChild variant="ghost" className="mt-6 md:mt-0 self-start md:self-auto">
            <Link to="/gallery" className="text-artist-navy hover:text-artist-dustyrose">
              View All Artworks →
            </Link>
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {artworks.map((artwork) => (
            <div 
              key={artwork.id} 
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
            >
              <Link to={`/artwork/${artwork.id}`} className="block relative h-80 overflow-hidden">
                <img
                  src={artwork.image}
                  alt={artwork.title}
                  className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </Link>
              <div className="p-6">
                <span className="text-sm text-artist-dustyrose font-medium">{artwork.category}</span>
                <h3 className="font-serif text-xl mt-1 mb-2">{artwork.title}</h3>
                <div className="flex justify-between items-center">
                  <span className="font-medium">${artwork.price}</span>
                  <Button size="sm" className="bg-artist-sage hover:bg-artist-dustyrose text-artist-navy hover:text-white transition-colors">
                    Add to Cart
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedArtworks;
