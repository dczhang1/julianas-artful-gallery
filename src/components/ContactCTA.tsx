
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ContactCTA = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-full h-full -z-10">
        <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-artist-pink opacity-10 rounded-br-[150px] transform -translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-2/3 h-2/3 bg-artist-lilac opacity-10 rounded-tl-[200px] transform translate-y-1/4"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-10 text-center">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6">
          Have a Question or Commission in Mind?
        </h2>
        <p className="text-lg max-w-3xl mx-auto mb-10">
          Whether you're interested in a particular artwork, want to discuss a custom commission, 
          or just want to say hello, I'd love to hear from you.
        </p>
        <Button asChild className="bg-artist-dustyrose hover:bg-opacity-80 text-white font-medium rounded-md px-8 py-6 text-lg">
          <Link to="/contact">Get in Touch</Link>
        </Button>
      </div>
    </section>
  );
};

export default ContactCTA;
