
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  ArrowRight,
  BookOpen, 
  Check, 
  Edit, 
  Heart, 
  Image, 
  MessageSquare,
  Share,
  User,
  Users
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import TestimonialCard from "@/components/TestimonialCard";

const HowItWorks = () => {
  const features = [
    {
      icon: Edit,
      title: "Weekly Prompts",
      description: "Every week, we email you a thoughtful question designed to spark meaningful memories and stories."
    },
    {
      icon: BookOpen,
      title: "Beautiful Editor",
      description: "Our elegant, distraction-free writing environment makes it easy to capture your thoughts."
    },
    {
      icon: Image,
      title: "Photo Integration",
      description: "Easily upload and include photos alongside your stories to bring your memories to life."
    },
    {
      icon: Users,
      title: "Collaborative Stories",
      description: "Invite family members to contribute their perspectives to create richer, multi-faceted narratives."
    },
    {
      icon: MessageSquare,
      title: "Family Comments",
      description: "Allow loved ones to add comments, questions, and their own memories to your stories."
    },
    {
      icon: User,
      title: "Private & Secure",
      description: "Your stories are yours alone. You control who sees them and how they're shared."
    },
    {
      icon: Share,
      title: "Easy Sharing",
      description: "Share individual stories or collections with family members through simple, secure links."
    },
    {
      icon: Heart,
      title: "Heirloom Books",
      description: "Transform your digital stories into beautifully designed, high-quality printed books."
    }
  ];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 bg-gradient-to-b from-reminisce-cream to-white">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">How Reminisce Works</h1>
          <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-8">
            We've made preserving your life stories simple, enjoyable, and meaningful with our thoughtfully designed process.
          </p>
        </div>
      </section>
      
      {/* Step by Step Process */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="font-display text-3xl font-bold mb-4">Your Journey With Reminisce</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              From weekly prompts to beautiful books, here's how we help you preserve your precious memories.
            </p>
          </div>
          
          <div className="space-y-20">
            {/* Step 1 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="p-2 bg-reminisce-tan/20 rounded-lg inline-block mb-4">
                  <div className="w-12 h-12 rounded-full bg-reminisce-navy flex items-center justify-center text-white font-display text-xl">
                    1
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Receive Weekly Story Prompts</h3>
                <p className="text-slate-600 text-lg mb-6">
                  Each week, we'll email you a thoughtfully crafted question designed to evoke meaningful memories. These prompts cover various life stages and experiences, helping you recall important moments you might otherwise forget.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Questions tailored to different life stages</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Customized to your interests and experiences</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Delivered on a schedule that works for you</span>
                  </li>
                </ul>
                <div className="bg-reminisce-navy/5 p-4 rounded-lg border border-reminisce-navy/10">
                  <p className="italic text-slate-600">
                    "What was your childhood home like? Describe a room you remember vividly."
                  </p>
                  <p className="text-sm text-slate-500 mt-2">Example weekly prompt</p>
                </div>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-lg border border-reminisce-tan">
                    <img 
                      src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=1169&auto=format&fit=crop" 
                      alt="Weekly prompts example" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg border border-reminisce-tan max-w-[200px]">
                    <p className="text-sm font-medium">📝 New Story Prompt</p>
                    <p className="text-xs text-slate-600 mt-1">What's a family tradition you cherish?</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2">
                <div className="rounded-lg overflow-hidden shadow-lg border border-reminisce-tan">
                  <img 
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1170&auto=format&fit=crop" 
                    alt="Writing story" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="grid grid-cols-3 gap-4 mt-4">
                  <div className="rounded-lg overflow-hidden shadow-md border border-reminisce-tan aspect-square">
                    <img 
                      src="https://images.unsplash.com/photo-1455894127589-22f75500213a?q=80&w=987&auto=format&fit=crop" 
                      alt="Old photo" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md border border-reminisce-tan aspect-square">
                    <img 
                      src="https://images.unsplash.com/photo-1531928351158-2f736078e0a1?q=80&w=1170&auto=format&fit=crop" 
                      alt="Family gathering" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-md border border-reminisce-tan aspect-square">
                    <img 
                      src="https://images.unsplash.com/photo-1609220136736-443140cffec6?q=80&w=1170&auto=format&fit=crop" 
                      alt="Vintage items" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1">
                <div className="p-2 bg-reminisce-tan/20 rounded-lg inline-block mb-4">
                  <div className="w-12 h-12 rounded-full bg-reminisce-navy flex items-center justify-center text-white font-display text-xl">
                    2
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Write Your Stories</h3>
                <p className="text-slate-600 text-lg mb-6">
                  Our beautiful, distraction-free writing environment makes it easy to respond to prompts with your personal stories. You can write as much or as little as you'd like, and our platform saves your progress automatically.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Elegant, easy-to-use text editor</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Add photos to bring your stories to life</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Work at your own pace with auto-save</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Edit and revise anytime</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="p-2 bg-reminisce-tan/20 rounded-lg inline-block mb-4">
                  <div className="w-12 h-12 rounded-full bg-reminisce-navy flex items-center justify-center text-white font-display text-xl">
                    3
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Share With Your Family</h3>
                <p className="text-slate-600 text-lg mb-6">
                  Invite family members to read your stories and contribute their own perspectives. Create a collaborative family narrative that captures different viewpoints and enriches your shared history.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Control exactly who can see each story</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Allow comments and discussions</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Invite others to contribute their memories</span>
                  </li>
                </ul>
              </div>
              <div className="order-1 md:order-2">
                <div className="rounded-lg overflow-hidden shadow-lg border border-reminisce-tan">
                  <img 
                    src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1032&auto=format&fit=crop" 
                    alt="Family sharing" 
                    className="w-full h-auto"
                  />
                </div>
                <div className="bg-white rounded-lg shadow-lg border border-reminisce-tan p-4 mt-4">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=961&auto=format&fit=crop" 
                        alt="Sarah" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Sarah</p>
                      <p className="text-sm text-slate-600">I remember that day! Dad was so excited about his new camera.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                      <img 
                        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop" 
                        alt="Tom" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-medium">Tom</p>
                      <p className="text-sm text-slate-600">This brings back so many memories of grandma's house!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Step 4 */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2">
                <div className="relative">
                  <div className="rounded-lg overflow-hidden shadow-xl border border-reminisce-tan transform -rotate-3">
                    <img 
                      src="https://images.unsplash.com/photo-1539795845756-4fadad2905ec?q=80&w=987&auto=format&fit=crop" 
                      alt="Printed book" 
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="rounded-lg overflow-hidden shadow-xl border border-reminisce-tan absolute bottom-0 right-0 transform rotate-6 w-2/3">
                    <img 
                      src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=987&auto=format&fit=crop" 
                      alt="Book pages" 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </div>
              <div className="order-1">
                <div className="p-2 bg-reminisce-tan/20 rounded-lg inline-block mb-4">
                  <div className="w-12 h-12 rounded-full bg-reminisce-navy flex items-center justify-center text-white font-display text-xl">
                    4
                  </div>
                </div>
                <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">Create Your Heirloom Book</h3>
                <p className="text-slate-600 text-lg mb-6">
                  At the end of the year, we'll compile your stories into a beautifully designed, high-quality printed book. These heirloom-quality books are meant to be cherished and passed down for generations.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Professional design and typography</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Premium paper and binding</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Beautiful integration of photos and text</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="text-reminisce-coral mt-1 mr-2 flex-shrink-0" size={18} />
                    <span>Order additional copies for family members</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Grid */}
      <section className="py-20 px-6 md:px-12 bg-reminisce-tan/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">Features Designed For Storytellers</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Every aspect of Reminisce has been crafted to make capturing and preserving your memories simple and beautiful.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <Card key={index} className="border border-reminisce-tan bg-white hover:shadow-md transition-all">
                <CardContent className="pt-6">
                  <div className="w-10 h-10 rounded-full bg-reminisce-navy/10 flex items-center justify-center mb-4">
                    <feature.icon size={20} className="text-reminisce-navy" />
                  </div>
                  <h3 className="font-display text-lg font-medium mb-2">{feature.title}</h3>
                  <p className="text-slate-600 text-sm">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonials */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">What Our Users Say</h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Hear from families who have discovered the joy of preserving their stories with Reminisce.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <TestimonialCard 
              quote="I've tried keeping journals before, but the prompts from Reminisce have helped me unlock memories I hadn't thought about in decades. My grandchildren are fascinated by stories of what life was like when I was young."
              author="Robert Miller, 72"
              role="Using Reminisce for 1 year"
              imageSrc="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1170&auto=format&fit=crop"
            />
            <TestimonialCard 
              quote="When my mother was diagnosed with early-stage dementia, we started using Reminisce together. It's been incredible to capture her stories while she can still share them. The book we created is now our family's most treasured possession."
              author="Jennifer Santos"
              role="Gift for her mother"
              imageSrc="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop"
            />
            <TestimonialCard 
              quote="I started using Reminisce to document my life for my newborn son. The weekly prompts make it manageable, even with a busy schedule. I'm creating something that will help him know who I was when he's older."
              author="Daniel Park"
              role="New father"
              imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=987&auto=format&fit=crop"
            />
          </div>
        </div>
      </section>
      
      {/* FAQ */}
      <section className="py-20 px-6 md:px-12 bg-reminisce-tan/30">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600 text-lg">
              Everything you need to know about preserving your stories with Reminisce.
            </p>
          </div>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg p-6 border border-reminisce-tan">
              <h3 className="font-display text-xl mb-3">How much time will this take each week?</h3>
              <p className="text-slate-600">
                Reminisce is designed to fit into your life. Most users spend about 20-30 minutes per week writing their responses, but you can take as much or as little time as you'd like. There's no requirement to respond to every prompt, and you can always come back to them later.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-reminisce-tan">
              <h3 className="font-display text-xl mb-3">What if I'm not a good writer?</h3>
              <p className="text-slate-600">
                You don't need to be a professional writer to use Reminisce. The most meaningful stories are those told in your authentic voice. Our prompts are designed to help guide your writing, and our editor includes helpful tools to make the process easier.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-reminisce-tan">
              <h3 className="font-display text-xl mb-3">How private are my stories?</h3>
              <p className="text-slate-600">
                Your privacy is our priority. By default, your stories are completely private to you. You have full control over who can see each story, whether that's keeping them private, sharing with specific family members, or making them public to the Reminisce community.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-reminisce-tan">
              <h3 className="font-display text-xl mb-3">What does the printed book look like?</h3>
              <p className="text-slate-600">
                Our books are designed to be beautiful keepsakes. They feature hardcover binding, premium paper, and professional typography. Photos are carefully integrated with your text, and you can choose from several design themes. Each book includes approximately 52 stories (one year's worth), though the length depends on how much you write.
              </p>
            </div>
            
            <div className="bg-white rounded-lg p-6 border border-reminisce-tan">
              <h3 className="font-display text-xl mb-3">Can I give Reminisce as a gift?</h3>
              <p className="text-slate-600">
                Yes! Many of our users give Reminisce subscriptions as gifts to parents, grandparents, or other loved ones. We offer gift subscriptions of various lengths, and we can send a beautiful notification card to the recipient.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-reminisce-navy text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-white">Begin Your Story Today</h2>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Start preserving your memories now. Future generations will thank you for the stories only you can tell.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register">
              <Button className="bg-white text-reminisce-navy hover:bg-white/90 text-lg px-8 py-6 w-full sm:w-auto">
                Start Your Free Trial
                <ArrowRight size={16} className="ml-2" />
              </Button>
            </Link>
            <Link to="/pricing">
              <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-8 py-6 w-full sm:w-auto">
                View Pricing
              </Button>
            </Link>
          </div>
          <p className="mt-4 text-white/80 text-sm">No credit card required. 14-day free trial.</p>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default HowItWorks;
