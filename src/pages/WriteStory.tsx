
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import StoryEditor from "@/components/StoryEditor";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const WriteStory = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("Family");
  const [isSaving, setIsSaving] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();
  
  // Mock categories
  const categories = ["Family", "Childhood", "Traditions", "Relationships", "Heirlooms", "Life Changes", "History"];
  
  // Auto save timer
  const [autoSaveMessage, setAutoSaveMessage] = useState("");
  
  const handleContentChange = (newContent: string) => {
    setContent(newContent);
    // Setup auto-save message
    setAutoSaveMessage("Saving...");
    setTimeout(() => {
      setAutoSaveMessage("All changes saved");
    }, 1000);
  };
  
  const handleSubmit = () => {
    // Show saving state
    setIsSaving(true);
    
    // Simulate API call
    setTimeout(() => {
      // Mock success - in a real app you'd send to API
      toast({
        title: "Story submitted!",
        description: "Your story has been successfully saved.",
      });
      setIsSaving(false);
      // Navigate to stories page
      navigate("/stories");
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-28 pb-16 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <Link to="/stories" className="inline-flex items-center text-reminisce-navy hover:text-reminisce-coral transition-colors mb-6">
            <ArrowLeft size={16} className="mr-1" />
            Back to Stories
          </Link>
          
          <div className="mb-8">
            <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">Write Your Story</h1>
            <p className="text-slate-600">Share your memories, experiences, or family traditions.</p>
          </div>
          
          <Card className="mb-6 border-reminisce-tan">
            <CardContent className="pt-6">
              <div className="mb-4">
                <Label htmlFor="title" className="block font-medium mb-1">Story Title</Label>
                <Input 
                  id="title" 
                  placeholder="Enter a title for your story"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="border-reminisce-tan"
                />
              </div>
              
              <div className="mb-4">
                <Label htmlFor="category" className="block font-medium mb-1">Category</Label>
                <select 
                  id="category" 
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm border-reminisce-tan"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  {categories.map((cat) => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
            </CardContent>
          </Card>
          
          <Card className="mb-6 border-reminisce-tan">
            <CardContent className="pt-6">
              <Label htmlFor="story-content" className="block font-medium mb-2">Story Content</Label>
              <StoryEditor 
                id="story-content"
                content={content}
                onChange={handleContentChange}
              />
              
              {autoSaveMessage && (
                <p className="text-sm text-slate-500 mt-2">{autoSaveMessage}</p>
              )}
            </CardContent>
          </Card>
          
          <div className="flex justify-end gap-4">
            <Button
              variant="outline"
              className="border-reminisce-tan"
              onClick={() => navigate("/stories")}
            >
              Cancel
            </Button>
            
            <Button 
              disabled={!title || !content || isSaving}
              onClick={handleSubmit}
            >
              {isSaving ? "Saving..." : "Publish Story"}
            </Button>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default WriteStory;
