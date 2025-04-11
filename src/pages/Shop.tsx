
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ShoppingBag } from "lucide-react";

// Sample product data
const products = [
  {
    id: 1,
    title: "Spring Bloom",
    image: "https://images.unsplash.com/photo-1582201942988-13e60e4556ee?w=500&auto=format&fit=crop&q=80",
    price: 320,
    category: "Original Painting",
    description: "Watercolor on paper, 12 x 16 inches. A vibrant celebration of spring flowers in full bloom.",
  },
  {
    id: 2,
    title: "Midnight Garden",
    image: "https://images.unsplash.com/photo-1549887534-1541e9326642?w=500&auto=format&fit=crop&q=80",
    price: 450,
    category: "Original Painting",
    description: "Acrylic on canvas, 24 x 36 inches. A magical nocturnal garden scene with luminous elements.",
  },
  {
    id: 3,
    title: "Coastal Dreams",
    image: "https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=500&auto=format&fit=crop&q=80",
    price: 280,
    category: "Original Painting",
    description: "Mixed media on canvas, 18 x 24 inches. A serene coastal landscape capturing the essence of ocean air.",
  },
  {
    id: 4,
    title: "Whispers of Fall - Print",
    image: "https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?w=500&auto=format&fit=crop&q=80",
    price: 45,
    category: "Print",
    description: "High-quality giclee print on archival paper, 8 x 10 inches. Signed and numbered edition of 50.",
  },
  {
    id: 5,
    title: "Morning Light - Print",
    image: "https://images.unsplash.com/photo-1578922746334-9e452d3a2d14?w=500&auto=format&fit=crop&q=80",
    price: 35,
    category: "Print",
    description: "Fine art print on 100% cotton rag paper, 8 x 10 inches. Signed and numbered edition of 50.",
  },
  {
    id: 6,
    title: "Wild Botanicals - Cards",
    image: "https://images.unsplash.com/photo-1580394691078-2dfb5e8e17b3?w=500&auto=format&fit=crop&q=80",
    price: 18,
    category: "Cards",
    description: "Set of 6 greeting cards featuring Wild Botanicals artwork. Blank inside, with envelopes.",
  },
  {
    id: 7,
    title: "Ocean Memories - Cards",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=500&auto=format&fit=crop&q=80",
    price: 18,
    category: "Cards",
    description: "Set of 6 greeting cards featuring Ocean Memories artwork. Blank inside, with envelopes.",
  },
  {
    id: 8,
    title: "Art Calendar 2024",
    image: "https://images.unsplash.com/photo-1549887552-cb1071d3e5ca?w=500&auto=format&fit=crop&q=80",
    price: 28,
    category: "Merchandise",
    description: "2024 wall calendar featuring 12 of Juliana's most popular artworks. Printed on premium paper.",
  },
];

const categories = ["All", "Original Painting", "Print", "Cards", "Merchandise"];

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [cart, setCart] = useState<{id: number, quantity: number}[]>([]);

  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);
    
  const addToCart = (productId: number) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === productId);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === productId 
            ? { ...item, quantity: item.quantity + 1 } 
            : item
        );
      } else {
        return [...prevCart, { id: productId, quantity: 1 }];
      }
    });
  };

  return (
    <>
      <Helmet>
        <title>Shop - Juliana's Art</title>
        <meta name="description" content="Shop original artwork, prints, and merchandise by artist Juliana. Find the perfect piece for your home or a thoughtful gift." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Art Shop</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Browse and purchase original artwork, prints, and more. Each piece brings a touch of whimsy to your space.
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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map(product => (
              <div 
                key={product.id}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-5">
                  <span className="text-xs font-medium text-artist-dustyrose">{product.category}</span>
                  <h3 className="font-serif text-lg mt-1 mb-2">{product.title}</h3>
                  <p className="text-sm mb-4 text-artist-navy text-opacity-70 line-clamp-2">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">${product.price}</span>
                    <Button 
                      size="sm" 
                      className="bg-artist-sage hover:bg-artist-dustyrose text-artist-navy hover:text-white transition-colors"
                      onClick={() => addToCart(product.id)}
                    >
                      <ShoppingBag size={16} className="mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg">No products found in this category.</p>
            </div>
          )}
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Shop;
