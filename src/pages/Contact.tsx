
import { useState } from "react";
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Instagram, Facebook, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [formStatus, setFormStatus] = useState<null | "success" | "error">(null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Normally would send the form data to a server
    console.log("Form submitted:", formData);
    setFormStatus("success");
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    
    // Reset status after 5 seconds
    setTimeout(() => {
      setFormStatus(null);
    }, 5000);
  };

  return (
    <>
      <Helmet>
        <title>Contact - Juliana's Art</title>
        <meta name="description" content="Get in touch with Juliana for inquiries about artwork, commissions, or collaborations." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-12">
            <h1 className="font-serif text-4xl md:text-5xl mb-6">Get in Touch</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Have a question about a specific artwork? Interested in commissioning a piece? 
              I'd love to hear from you!
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="bg-white p-8 rounded-lg shadow-md mb-8">
                <h2 className="font-serif text-2xl mb-6 artistic-border relative inline-block pb-4">
                  Contact Information
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="bg-artist-pink rounded-full p-3 mr-4">
                      <Mail size={20} className="text-artist-dustyrose" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-artist-navy text-opacity-70">juliana@example.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-artist-pink rounded-full p-3 mr-4">
                      <MapPin size={20} className="text-artist-dustyrose" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Studio Location</h3>
                      <p className="text-artist-navy text-opacity-70">
                        123 Artist Lane<br />
                        Portland, OR 97204<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="bg-artist-pink rounded-full p-3 mr-4">
                      <Clock size={20} className="text-artist-dustyrose" />
                    </div>
                    <div>
                      <h3 className="font-medium mb-1">Studio Hours</h3>
                      <p className="text-artist-navy text-opacity-70">
                        Monday - Friday: 10am - 5pm<br />
                        Saturday: By appointment<br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="font-serif text-2xl mb-6">Connect on Social Media</h2>
                <div className="flex space-x-4">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-artist-lilac hover:bg-artist-dustyrose transition-colors rounded-full p-4 text-artist-navy hover:text-white"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-artist-lilac hover:bg-artist-dustyrose transition-colors rounded-full p-4 text-artist-navy hover:text-white"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="mailto:juliana@example.com"
                    className="bg-artist-lilac hover:bg-artist-dustyrose transition-colors rounded-full p-4 text-artist-navy hover:text-white"
                  >
                    <Mail size={24} />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-serif text-2xl mb-6 artistic-border relative inline-block pb-4">
                Send a Message
              </h2>
              
              {formStatus === "success" && (
                <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-6">
                  <p>Thank you for your message! I'll get back to you soon.</p>
                </div>
              )}
              
              {formStatus === "error" && (
                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                  <p>There was an error sending your message. Please try again.</p>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Your Name <span className="text-artist-dustyrose">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-artist-lilac focus:outline-none focus:ring-2 focus:ring-artist-dustyrose"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email Address <span className="text-artist-dustyrose">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-artist-lilac focus:outline-none focus:ring-2 focus:ring-artist-dustyrose"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject <span className="text-artist-dustyrose">*</span>
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-md border border-artist-lilac focus:outline-none focus:ring-2 focus:ring-artist-dustyrose"
                  >
                    <option value="">Please select</option>
                    <option value="Artwork Inquiry">Artwork Inquiry</option>
                    <option value="Commission Request">Commission Request</option>
                    <option value="Collaboration">Collaboration</option>
                    <option value="General Question">General Question</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Your Message <span className="text-artist-dustyrose">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-2 rounded-md border border-artist-lilac focus:outline-none focus:ring-2 focus:ring-artist-dustyrose"
                  ></textarea>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-artist-dustyrose hover:bg-opacity-80 text-white font-medium py-3"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Contact;
