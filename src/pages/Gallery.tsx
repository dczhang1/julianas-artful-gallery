
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

// Sample artwork data
const artworks = [
  {
    id: 1,
    title: "Spring Bloom",
    image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=500&auto=format&fit=crop&q=80",
    year: 2023,
    medium: "Watercolor on paper",
    size: "12 x 16 inches",
    category: "Watercolor",
    available: true,
  },
  {
    id: 2,
    title: "Midnight Garden",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=500&auto=format&fit=crop&q=80",
    year: 2023,
    medium: "Acrylic on canvas",
    size: "24 x 36 inches",
    category: "Acrylic",
    available: true,
  },
  {
    id: 3,
    title: "Coastal Dreams",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500&auto=format&fit=crop&q=80",
    year: 2022,
    medium: "Mixed media on canvas",
    size: "18 x 24 inches",
    category: "Mixed Media",
    available: false,
  },
  {
    id: 4,
    title: "Whispers of Fall",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=500&auto=format&fit=crop&q=80",
    year: 2022,
    medium: "Acrylic on canvas",
    size: "20 x 20 inches",
    category: "Acrylic",
    available: true,
  },
  {
    id: 5,
    title: "Morning Light",
    image: "https://images.unsplash.com/photo-1578922746334-9e452d3a2d14?w=500&auto=format&fit=crop&q=80",
    year: 2021,
    medium: "Watercolor on paper",
    size: "11 x 14 inches",
    category: "Watercolor",
    available: true,
  },
  {
    id: 6,
    title: "Wild Botanicals",
    image: "https://images.unsplash.com/photo-1580394691078-2dfb5e8e17b3?w=500&auto=format&fit=crop&q=80",
    year: 2021,
    medium: "Gouache on paper",
    size: "9 x 12 inches",
    category: "Gouache",
    available: false,
  },
  {
    id: 7,
    title: "Ocean Memories",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=80",
    year: 2020,
    medium: "Acrylic and ink on canvas",
    size: "30 x 40 inches",
    category: "Mixed Media",
    available: true,
  },
  {
    id: 8,
    title: "Mountain Whispers",
    image: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=500&auto=format&fit=crop&q=80",
    year: 2020,
    medium: "Oil on canvas",
    size: "24 x 36 inches",
    category: "Oil",
    available: true,
  },
];

const categories = ["All", "Watercolor", "Acrylic", "Oil", "Mixed Media", "Gouache"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [selectedArtwork, setSelectedArtwork] = useState<typeof artworks[0] | null>(null);

  const filteredArtworks = activeCategory === "All" 
    ? artworks 
    : artworks.filter(artwork => artwork.category === activeCategory);

  const handleArtworkClick = (artwork: typeof artworks[0]) => {
    setSelectedArtwork(artwork);
    setShowModal(true);
  };

  return (
    <>
      <Helmet>
        <title>Gallery - Juliana's Art</title>
        <meta name="description" content="Browse Juliana's collection of original paintings, from serene watercolors to vibrant acrylics." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Art Gallery</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Browse my collection of original artwork. Each piece tells a unique story.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 mb-10">
            {categories.map(category => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  "rounded-full px-5",
                  activeCategory === category 
                    ? "bg-artist-dustyrose hover:bg-artist-dustyrose/90 text-white" 
                    : "border-artist-dustyrose text-artist-navy hover:bg-artist-pink hover:text-artist-navy"
                )}
              >
                {category}
              </Button>
            ))}
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArtworks.map(artwork => (
              <div 
                key={artwork.id}
                className="group cursor-pointer"
                onClick={() => handleArtworkClick(artwork)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-md mb-4">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity"></div>
                  {!artwork.available && (
                    <div className="absolute top-4 right-4 bg-artist-pink px-3 py-1 rounded-full text-sm font-medium">
                      Sold
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-xl mb-1">{artwork.title}</h3>
                <p className="text-sm text-artist-navy text-opacity-70">{artwork.medium}, {artwork.year}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      
      {showModal && selectedArtwork && (
        <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4" onClick={() => setShowModal(false)}>
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-auto" onClick={(e) => e.stopPropagation()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6">
                <img
                  src={selectedArtwork.image}
                  alt={selectedArtwork.title}
                  className="w-full h-auto rounded-md"
                />
              </div>
              <div className="p-6">
                <button 
                  className="absolute top-4 right-4 text-artist-navy hover:text-artist-dustyrose"
                  onClick={() => setShowModal(false)}
                >
                  ✕
                </button>
                <h2 className="font-serif text-2xl mb-2">{selectedArtwork.title}</h2>
                <p className="text-artist-dustyrose mb-4">{selectedArtwork.category}</p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex">
                    <span className="font-medium w-24">Year:</span>
                    <span>{selectedArtwork.year}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24">Medium:</span>
                    <span>{selectedArtwork.medium}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24">Size:</span>
                    <span>{selectedArtwork.size}</span>
                  </div>
                  <div className="flex">
                    <span className="font-medium w-24">Status:</span>
                    <span>{selectedArtwork.available ? "Available" : "Sold"}</span>
                  </div>
                </div>
                
                <p className="mb-6">
                  This piece is part of my {selectedArtwork.year} collection, inspired by the {selectedArtwork.category.toLowerCase()} tradition with my own whimsical touch. Each brushstroke is carefully applied to create depth and texture.
                </p>
                
                {selectedArtwork.available ? (
                  <Button className="w-full bg-artist-dustyrose hover:bg-opacity-80 text-white">
                    Inquire About This Piece
                  </Button>
                ) : (
                  <Button variant="outline" className="w-full border-artist-dustyrose text-artist-dustyrose" disabled>
                    Sold
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
      
      <Footer />
    </>
  );
};

export default Gallery;
