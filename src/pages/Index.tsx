
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Book, Calendar, Heart, Image } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeatureCard from "@/components/FeatureCard";
import TestimonialCard from "@/components/TestimonialCard";
import StoryCard from "@/components/StoryCard";

const Index = () => {
  // Featured stories
  const featuredStories = [
    {
      id: "1",
      title: "The Summer Cabin by the Lake",
      excerpt: "Every summer, our family would gather at my grandparent's cabin. The memories we made there shaped who I am today.",
      date: "April 29, 2025",
      author: "Emma Johnson",
      imageSrc: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "2",
      title: "My First Day of School",
      excerpt: "I still remember the nervous excitement I felt walking into that classroom for the first time, clutching my lunchbox.",
      date: "April 24, 2025",
      author: "Michael Stevens",
      imageSrc: "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1016&auto=format&fit=crop"
    },
    {
      id: "3",
      title: "The Recipe That Brings Us Together",
      excerpt: "My grandmother's pasta sauce recipe has been passed down for generations. Here's the story behind it.",
      date: "April 21, 2025",
      author: "Sophia Rodriguez"
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-gradient-to-b from-reminisce-cream to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="fade-in">
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Preserve Your Stories For Generations
              </h1>
              <p className="text-slate-600 text-lg md:text-xl mb-8">
                Capture life's most meaningful moments with thoughtful prompts, beautiful editing tools, and heirloom-quality books.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/register">
                  <Button className="bg-reminisce-navy text-white hover:bg-reminisce-navy/90 text-lg px-8 py-6">
                    Start Your Story
                  </Button>
                </Link>
                <Link to="/how-it-works">
                  <Button variant="outline" className="border-reminisce-navy text-reminisce-navy hover:bg-reminisce-navy/5 text-lg px-8 py-6">
                    Learn How It Works
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl border border-reminisce-tan transform rotate-2 animate-float">
                <img 
                  src="https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop" 
                  alt="Family album" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute top-8 -right-4 md:-right-12 w-3/4 h-3/4 rounded-lg overflow-hidden shadow-xl border border-reminisce-tan transform -rotate-3 z-0">
                <img 
                  src="https://images.unsplash.com/photo-1579409686336-64754d364510?q=80&w=986&auto=format&fit=crop" 
                  alt="Vintage photo" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 md:-bottom-12 -left-4 md:-left-12 w-2/3 h-1/2 rounded-lg overflow-hidden shadow-xl border border-reminisce-tan transform rotate-6 z-0 bg-white p-4">
                <div className="font-display text-reminisce-navy text-xl mb-2">Grandma's Apple Pie Recipe</div>
                <p className="text-sm text-slate-600 line-clamp-3">The secret is to add a pinch of cardamom to the cinnamon mixture...</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Capture Memories With Ease</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Our thoughtfully designed platform makes preserving your life stories simple and enjoyable.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FeatureCard 
              icon={Book}
              title="Weekly Prompts"
              description="Receive thoughtful questions that inspire meaningful stories about your life experiences."
              color="text-reminisce-coral"
            />
            <FeatureCard 
              icon={Image}
              title="Photo Integration"
              description="Easily include photos alongside your stories to bring your memories to life."
              color="text-reminisce-gold"
            />
            <FeatureCard 
              icon={Heart}
              title="Family Sharing"
              description="Share your stories with loved ones and invite them to contribute their own memories."
              color="text-reminisce-navy"
            />
            <FeatureCard 
              icon={Calendar}
              title="Beautiful Books"
              description="Transform your digital stories into heirloom-quality printed books to cherish forever."
              color="text-reminisce-coral"
            />
          </div>
        </div>
      </section>
      
      {/* How It Works */}
      <section className="py-20 px-6 md:px-12 bg-reminisce-tan/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">How Reminisce Works</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              We've simplified the process of capturing and preserving your precious memories.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-reminisce-navy flex items-center justify-center text-white font-display text-xl mx-auto mb-6">
                1
              </div>
              <h3 className="font-display text-xl mb-3">Receive Weekly Prompts</h3>
              <p className="text-slate-600">
                Every week, we'll email you a thoughtful question designed to evoke meaningful memories and stories.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-reminisce-navy flex items-center justify-center text-white font-display text-xl mx-auto mb-6">
                2
              </div>
              <h3 className="font-display text-xl mb-3">Write Your Stories</h3>
              <p className="text-slate-600">
                Use our beautiful editor to respond to prompts with your personal stories. Add photos to bring them to life.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-reminisce-navy flex items-center justify-center text-white font-display text-xl mx-auto mb-6">
                3
              </div>
              <h3 className="font-display text-xl mb-3">Create Your Book</h3>
              <p className="text-slate-600">
                At the end of the year, we'll compile your stories into a beautiful, high-quality printed book.
              </p>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link to="/how-it-works">
              <Button variant="outline" className="border-reminisce-navy text-reminisce-navy hover:bg-reminisce-navy/5">
                Learn More <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Stories That Connect Generations</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Hear from families who have preserved their precious memories with Reminisce.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="I always wanted to document my grandfather's life, but didn't know where to start. Reminisce made it easy with weekly prompts that sparked amazing stories I'd never heard before."
              author="Sarah Mitchell"
              role="Reminisce User"
            />
            <TestimonialCard 
              quote="The book we created is absolutely beautiful. The quality exceeded our expectations, and now we have my mother's stories preserved forever."
              author="David Wilson"
              role="Gift Recipient"
            />
            <TestimonialCard 
              quote="My children never knew their great-grandparents, but now they can read their stories in their own words. It's an incredible gift that spans generations."
              author="Jennifer Lee"
              role="Family Historian"
            />
          </div>
        </div>
      </section>
      
      {/* Featured Stories */}
      <section className="py-20 px-6 md:px-12 bg-reminisce-tan/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Featured Stories</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Explore stories shared by our community of storytellers.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {featuredStories.map((story) => (
              <StoryCard 
                key={story.id}
                id={story.id}
                title={story.title}
                excerpt={story.excerpt}
                date={story.date}
                author={story.author}
                imageSrc={story.imageSrc}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/stories">
              <Button variant="outline" className="border-reminisce-navy text-reminisce-navy hover:bg-reminisce-navy/5">
                Browse All Stories <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-reminisce-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">Start Preserving Your Stories Today</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Don't let precious memories fade away. Begin capturing your life stories with Reminisce and create a lasting legacy for generations to come.
          </p>
          <Link to="/register">
            <Button className="bg-white text-reminisce-navy hover:bg-white/90 text-lg px-8 py-6">
              Start Your Free Trial
            </Button>
          </Link>
          <p className="mt-4 text-white/80 text-sm">No credit card required. Cancel anytime.</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
