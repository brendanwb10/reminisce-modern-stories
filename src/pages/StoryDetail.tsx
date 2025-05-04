
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Heart, Share } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const StoryDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [liked, setLiked] = useState(false);
  const { toast } = useToast();
  
  // Mock story data - in a real app, you'd fetch this based on the ID
  const story = {
    id: id || "1",
    title: "The Summer Cabin by the Lake",
    content: `
      <p>Every summer, from as early as I can remember until I was well into my teens, our family would make the journey to my grandparent's cabin by Lake Willow. The cabin had been in our family for three generations, built by my great-grandfather with his own hands in 1932.</p>
      
      <p>The journey there was always part of the magic. We'd pack up our station wagon the night before, barely able to sleep with the anticipation of the adventure ahead. My father would wake us before dawn, and we'd pile into the car still in our pajamas, pillows and blankets making a nest in the backseat where my brother and I would drift in and out of sleep as the city gave way to countryside.</p>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=1000&auto=format&fit=crop" alt="Lake view" class="rounded-lg max-w-full h-auto" />
        <figcaption class="text-sm text-slate-500 mt-2">Lake Willow at sunset, taken during our last summer visit in 1998.</figcaption>
      </figure>
      
      <p>By mid-morning, we'd arrive. The first sight of the lake through the trees always took my breath away. The cabin itself was nothing fancy – weathered wood exterior, a wide porch with two rocking chairs, and windows that never quite closed properly. But to us, it was paradise.</p>
      
      <p>My grandmother would always be waiting, her apron dusted with flour from the fresh bread she'd bake for our arrival. The smell would hit you the moment you stepped onto the porch – that warm, homey scent that meant we were officially on vacation.</p>
      
      <p>Days at the cabin fell into a comfortable rhythm. Mornings were for swimming in the cool lake waters. My grandfather taught me to swim there, his weathered hands supporting me as I kicked and splashed. "You're a natural," he'd say, though I suspect he said that to all his grandchildren.</p>
      
      <p>Afternoons brought adventures in the surrounding woods, building forts, collecting interesting rocks and leaves, or fishing off the small wooden dock. My grandfather was an expert fisherman, able to predict where the fish would be biting on any given day. He was usually right.</p>
      
      <figure>
        <img src="https://images.unsplash.com/photo-1583522862857-a44e78c6981f?q=80&w=1000&auto=format&fit=crop" alt="Fishing dock" class="rounded-lg max-w-full h-auto" />
        <figcaption class="text-sm text-slate-500 mt-2">The fishing dock where Grandpa taught me patience.</figcaption>
      </figure>
      
      <p>Evenings were my favorite. We'd gather on the porch as the sun set, painting the lake with streaks of orange and pink. Fireflies would begin to dot the darkness, and my grandmother would tell stories – tales of her own childhood, local legends, or sometimes ghost stories that would have us peering nervously into the dark woods.</p>
      
      <p>After dinner, we'd often have a bonfire, roasting marshmallows for s'mores and singing songs. My father would bring out his guitar, and we'd take turns requesting our favorites. I can still hear his voice singing "Country Roads," the tune floating across the still night lake.</p>
      
      <p>The cabin is gone now. A storm damaged it beyond repair in 2003, and the land was sold. But the memories remain vivid. When I close my eyes, I can still smell the pine trees and wood smoke, hear the lapping of the lake against the shore, and feel the simple joy of those summer days.</p>
      
      <p>Those summers shaped me in ways I'm still discovering – teaching me about family, nature, and finding happiness in simple moments. The cabin may be gone, but its legacy lives on in who I've become.</p>
    `,
    date: "April 29, 2025",
    author: "Emma Johnson",
    authorBio: "Emma is a teacher and mother of two from Portland, Oregon. She loves hiking, baking, and preserving family stories.",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=988&auto=format&fit=crop",
    category: "Family",
    readingTime: "6 min read"
  };
  
  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    toast({
      title: "Link copied!",
      description: "Story link copied to clipboard",
    });
  };
  
  const handleLike = () => {
    setLiked(!liked);
    toast({
      title: liked ? "Removed from favorites" : "Added to favorites",
      description: liked ? "Story removed from your favorites" : "Story added to your favorites",
    });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-3xl mx-auto px-6 md:px-12">
          <div className="mb-8">
            <Link to="/stories" className="inline-flex items-center text-reminisce-navy hover:text-reminisce-coral transition-colors mb-4">
              <ArrowLeft size={16} className="mr-1" />
              Back to Stories
            </Link>
            
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-slate-500 text-sm">{story.date} · {story.readingTime} · {story.category}</p>
              </div>
              <div className="flex gap-2">
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className={`rounded-full ${liked ? 'text-reminisce-coral' : 'text-slate-500'}`}
                  onClick={handleLike}
                >
                  <Heart size={18} fill={liked ? 'currentColor' : 'none'} />
                </Button>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="rounded-full text-slate-500"
                  onClick={handleShare}
                >
                  <Share size={18} />
                </Button>
              </div>
            </div>
            
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-6">{story.title}</h1>
            
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={story.authorImage} alt={story.author} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-medium text-reminisce-navy">{story.author}</p>
                <p className="text-sm text-slate-500">{story.authorBio}</p>
              </div>
            </div>
          </div>
          
          <article className="prose prose-lg prose-slate mx-auto font-serif leading-relaxed mb-12">
            <div dangerouslySetInnerHTML={{ __html: story.content }} />
          </article>
          
          <div className="border-t border-reminisce-tan pt-8">
            <h3 className="font-display text-xl mb-4">Share this story</h3>
            <div className="flex gap-3">
              <Button 
                variant="outline" 
                className="border-reminisce-tan text-slate-600 hover:bg-reminisce-tan/20"
                onClick={handleShare}
              >
                <Share size={16} className="mr-2" />
                Copy Link
              </Button>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default StoryDetail;
