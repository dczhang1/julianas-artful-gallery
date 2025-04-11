
import { Link } from "react-router-dom";
import { Instagram, Facebook, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-artist-sage bg-opacity-30 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="font-serif text-2xl mb-4">Juliana's Art</h3>
            <p className="text-sm leading-relaxed mb-4">
              Creating whimsical paintings that celebrate the beauty in everyday moments.
              Each piece is crafted with love and attention to detail.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-artist-navy hover:text-artist-dustyrose transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-artist-navy hover:text-artist-dustyrose transition-colors">
                <Facebook size={20} />
              </a>
              <a href="mailto:juliana@example.com" aria-label="Email" className="text-artist-navy hover:text-artist-dustyrose transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-artist-dustyrose transition-colors">About Juliana</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-sm hover:text-artist-dustyrose transition-colors">Art Gallery</Link>
              </li>
              <li>
                <Link to="/shop" className="text-sm hover:text-artist-dustyrose transition-colors">Shop Artworks</Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-artist-dustyrose transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-sm hover:text-artist-dustyrose transition-colors">Shipping & Returns</Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-serif text-xl mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Subscribe to receive updates on new artworks and upcoming exhibitions.</p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded-md border border-artist-lilac focus:outline-none focus:ring-2 focus:ring-artist-dustyrose text-sm bg-white"
                required
              />
              <button
                type="submit"
                className="bg-artist-dustyrose hover:bg-opacity-80 text-white px-4 py-2 rounded-md transition-colors text-sm font-medium"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-artist-lilac border-opacity-30 pt-6 text-center text-sm text-artist-navy text-opacity-70">
          <p>&copy; {currentYear} Juliana's Art. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
