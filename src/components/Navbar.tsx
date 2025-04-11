
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Shop", path: "/shop" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed w-full bg-artist-cream bg-opacity-95 z-50 py-4 px-6 md:px-10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="z-50">
          <h1 className="font-serif text-2xl md:text-3xl font-medium tracking-wide">
            Juliana's <span className="text-artist-dustyrose">Art</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="artistic-underline font-medium text-artist-navy hover:text-artist-dustyrose transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
          
          <Link to="/cart" className="relative">
            <Button variant="ghost" size="icon" className="text-artist-navy hover:text-artist-dustyrose hover:bg-artist-pink">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-artist-dustyrose text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                0
              </span>
            </Button>
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="z-50 md:hidden text-artist-navy hover:text-artist-dustyrose transition-colors"
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-artist-cream bg-opacity-95 flex flex-col justify-center items-center space-y-8 backdrop-blur-sm transition-transform duration-300 ease-in-out md:hidden",
            isOpen ? "transform translate-x-0" : "transform translate-x-full"
          )}
        >
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="font-serif text-2xl text-artist-navy hover:text-artist-dustyrose transition-colors duration-300"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          
          <Link 
            to="/cart" 
            className="flex items-center space-x-2 text-artist-navy hover:text-artist-dustyrose transition-colors duration-300"
            onClick={() => setIsOpen(false)}
          >
            <ShoppingBag size={24} />
            <span className="font-serif text-2xl">Cart (0)</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
