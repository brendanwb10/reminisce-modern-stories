
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryCard from "@/components/StoryCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Stories = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  // Mock stories data
  const allStories = [
    {
      id: "1",
      title: "The Summer Cabin by the Lake",
      excerpt: "Every summer, our family would gather at my grandparent's cabin. The memories we made there shaped who I am today.",
      date: "April 29, 2025",
      author: "Emma Johnson",
      imageSrc: "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?q=80&w=1000&auto=format&fit=crop",
      category: "Family"
    },
    {
      id: "2",
      title: "My First Day of School",
      excerpt: "I still remember the nervous excitement I felt walking into that classroom for the first time, clutching my lunchbox.",
      date: "April 24, 2025",
      author: "Michael Stevens",
      imageSrc: "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=1016&auto=format&fit=crop",
      category: "Childhood"
    },
    {
      id: "3",
      title: "The Recipe That Brings Us Together",
      excerpt: "My grandmother's pasta sauce recipe has been passed down for generations. Here's the story behind it.",
      date: "April 21, 2025",
      author: "Sophia Rodriguez",
      category: "Traditions"
    },
    {
      id: "4",
      title: "The Day We Met",
      excerpt: "It was a rainy Tuesday afternoon when I first saw her at the bookstore. I had no idea how that chance encounter would change my life forever.",
      date: "April 18, 2025",
      author: "James Wilson",
      imageSrc: "https://images.unsplash.com/photo-1529634806980-85c3a8b84ca0?q=80&w=1069&auto=format&fit=crop",
      category: "Relationships"
    },
    {
      id: "5",
      title: "My Grandfather's Watch",
      excerpt: "This timepiece has witnessed over a century of history. It belonged to my grandfather who carried it through two world wars.",
      date: "April 15, 2025",
      author: "Thomas Brown",
      imageSrc: "https://images.unsplash.com/photo-1509048191080-d2984bad6ae5?q=80&w=1064&auto=format&fit=crop",
      category: "Heirlooms"
    },
    {
      id: "6",
      title: "Moving to a New Country",
      excerpt: "At 22, I packed two suitcases and moved across the world. Here's what I learned about adaptation, courage, and finding home.",
      date: "April 12, 2025",
      author: "Aisha Patel",
      category: "Life Changes"
    },
    {
      id: "7",
      title: "The Family Business",
      excerpt: "For three generations, our family bakery has been the heart of the neighborhood. These are the stories behind our most beloved recipes.",
      date: "April 9, 2025",
      author: "Marco Rossi",
      imageSrc: "https://images.unsplash.com/photo-1568254183919-78a4f43a2877?q=80&w=1069&auto=format&fit=crop",
      category: "Family"
    },
    {
      id: "8",
      title: "Letters from War",
      excerpt: "While cleaning the attic, I discovered a box of letters my father wrote to my mother during the war. They've revealed a side of him I never knew.",
      date: "April 6, 2025",
      author: "Eleanor Hughes",
      category: "History"
    },
    {
      id: "9",
      title: "The Neighborhood Where I Grew Up",
      excerpt: "Our street was filled with characters and adventures. These are the moments that defined my childhood in the 1980s.",
      date: "April 3, 2025",
      author: "Daniel Kim",
      imageSrc: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=1170&auto=format&fit=crop",
      category: "Childhood"
    }
  ];
  
  // Filter stories based on search query
  const filteredStories = allStories.filter(story => 
    story.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
    story.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.author.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  // Extract unique categories
  const categories = [...new Set(allStories.map(story => story.category))];
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="mb-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold mb-4">Community Stories</h1>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto">
              Explore stories shared by our community. These narratives connect us across time and space.
            </p>
          </div>
          
          {/* Search and filters */}
          <div className="mb-12">
            <div className="max-w-md mx-auto mb-8">
              <div className="relative">
                <Input
                  className="pl-10 border-reminisce-tan"
                  placeholder="Search stories..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
              </div>
            </div>
            
            <div className="flex flex-wrap gap-2 justify-center">
              <Button 
                variant={searchQuery === "" ? "default" : "outline"} 
                className="text-sm" 
                onClick={() => setSearchQuery("")}
              >
                All
              </Button>
              {categories.map(category => (
                <Button 
                  key={category} 
                  variant={searchQuery === category ? "default" : "outline"} 
                  className="text-sm" 
                  onClick={() => setSearchQuery(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
          
          {/* Stories grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredStories.map(story => (
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
          
          {filteredStories.length === 0 && (
            <div className="text-center py-12">
              <h3 className="font-display text-xl mb-2">No stories found</h3>
              <p className="text-slate-600">Try adjusting your search query.</p>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Stories;
