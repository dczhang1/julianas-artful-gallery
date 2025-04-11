
import { Helmet } from "react-helmet";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Juliana - Artist & Painter</title>
        <meta name="description" content="Learn about Juliana's journey as an artist, her inspiration, and her artistic process." />
      </Helmet>
      
      <Navbar />
      
      <main className="pt-24 pb-16">
        <section className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="text-center mb-16">
            <h1 className="font-serif text-4xl md:text-5xl mb-6">About Juliana</h1>
            <p className="text-lg max-w-3xl mx-auto">
              Artist, dreamer, and storyteller sharing moments of wonder through each brushstroke.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <img
                src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&auto=format&fit=crop&q=80"
                alt="Juliana in her studio"
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            
            <div>
              <h2 className="font-serif text-3xl mb-6 artistic-border relative inline-block pb-4">
                My Story
              </h2>
              <div className="space-y-4">
                <p>
                  Hello! I'm Juliana, an artist based in the Pacific Northwest where the misty mountains and lush forests constantly inspire my work.
                </p>
                <p>
                  My journey as an artist began in childhood, where I would spend hours sketching the wildlife around our rural home. Those early experiences shaped my artistic vision—seeing beauty in the smallest details and finding wonder in everyday moments.
                </p>
                <p>
                  After studying Fine Arts at the Pacific Arts Institute, I developed my distinctive style that blends whimsical elements with rich colors and textures. I work primarily with acrylics and watercolors, occasionally incorporating mixed media elements to create depth and interest.
                </p>
                <p>
                  When I'm not in my studio painting, you might find me hiking with my dog Luna, tending to my garden, or visiting local farmers markets for inspiration. These quiet moments in nature often spark ideas for my next creation.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-artist-pink bg-opacity-20 rounded-2xl p-8 md:p-12 mb-20">
            <h2 className="font-serif text-3xl mb-8 text-center">My Artistic Process</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-artist-lilac rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl text-artist-dustyrose">1</span>
                </div>
                <h3 className="font-serif text-xl mb-3">Inspiration</h3>
                <p className="text-sm">
                  Every painting begins with observation and inspiration—whether from nature, daily life, or emotions. I often sketch ideas in my journal before approaching the canvas.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-artist-lilac rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl text-artist-dustyrose">2</span>
                </div>
                <h3 className="font-serif text-xl mb-3">Creation</h3>
                <p className="text-sm">
                  I work intuitively, starting with broad strokes to establish composition and gradually adding layers of detail. I often listen to soft instrumental music as I paint.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg text-center">
                <div className="w-16 h-16 bg-artist-lilac rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-2xl text-artist-dustyrose">3</span>
                </div>
                <h3 className="font-serif text-xl mb-3">Refinement</h3>
                <p className="text-sm">
                  The final stage involves adding those special details that bring the piece to life—delicate highlights, subtle textures, and sometimes a touch of whimsy.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="font-serif text-3xl mb-6">My Studio</h2>
            <p className="text-lg max-w-3xl mx-auto mb-10">
              My creative sanctuary is a light-filled space overlooking the garden. Here's where the magic happens!
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <img
                src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=500&auto=format&fit=crop&q=80"
                alt="Juliana's art studio"
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=500&auto=format&fit=crop&q=80"
                alt="Art supplies"
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
              <img
                src="https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?w=500&auto=format&fit=crop&q=80"
                alt="Work in progress"
                className="rounded-lg shadow-md h-64 w-full object-cover"
              />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
