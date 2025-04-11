
import { cn } from "@/lib/utils";

// Sample testimonial data
const testimonials = [
  {
    id: 1,
    quote: "Juliana's painting brought so much warmth to our living room. The colors are even more vibrant in person!",
    name: "Sarah Johnson",
    location: "New York, NY",
  },
  {
    id: 2,
    quote: "I commissioned a piece for my daughter's birthday and it exceeded all expectations. Working with Juliana was a wonderful experience.",
    name: "Michael Chen",
    location: "Seattle, WA",
  },
  {
    id: 3,
    quote: "The attention to detail in her work is remarkable. I find something new to love about my painting every day.",
    name: "Emma Williams",
    location: "Portland, OR",
  },
];

const Testimonials = ({ className }: { className?: string }) => {
  return (
    <section className={cn("py-16 bg-artist-sage bg-opacity-20", className)}>
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <h2 className="font-serif text-3xl md:text-4xl mb-12 artistic-border relative inline-block pb-4 text-center mx-auto block">
          What Collectors Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              className={cn(
                "bg-white p-8 rounded-lg shadow-md relative",
                index % 2 === 0 ? "transform md:translate-y-4" : ""
              )}
            >
              <div className="absolute -top-4 -left-4 text-artist-dustyrose opacity-30 text-6xl font-serif">"</div>
              <p className="italic mb-6 relative z-10">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-artist-lilac flex items-center justify-center text-artist-dustyrose font-medium">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-4">
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-artist-navy text-opacity-70">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
