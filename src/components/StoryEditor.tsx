
import { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { 
  Bold, 
  Italic, 
  Underline, 
  Image as ImageIcon,
  Save,
  Preview
} from "lucide-react";

interface StoryEditorProps {
  id: string;
  content: string;
  onChange: (content: string) => void;
}

const StoryEditor = ({ id, content, onChange }: StoryEditorProps) => {
  const [isPreview, setIsPreview] = useState(false);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imagePreviewUrl, setImagePreviewUrl] = useState<string>("");
  const fileInputRef = useRef<HTMLInputElement>(null);
  
  const handleBoldClick = () => {
    const textArea = document.getElementById(id) as HTMLTextAreaElement;
    if (!textArea) return;
    
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    const newContent = content.substring(0, start) + 
      `<strong>${selectedText}</strong>` + 
      content.substring(end);
      
    onChange(newContent);
    
    // Reset focus
    setTimeout(() => {
      textArea.focus();
      textArea.setSelectionRange(start, end + 17); // 17 is the length of <strong></strong>
    }, 0);
  };
  
  const handleItalicClick = () => {
    const textArea = document.getElementById(id) as HTMLTextAreaElement;
    if (!textArea) return;
    
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    const newContent = content.substring(0, start) + 
      `<em>${selectedText}</em>` + 
      content.substring(end);
      
    onChange(newContent);
    
    // Reset focus
    setTimeout(() => {
      textArea.focus();
      textArea.setSelectionRange(start, end + 9); // 9 is the length of <em></em>
    }, 0);
  };
  
  const handleUnderlineClick = () => {
    const textArea = document.getElementById(id) as HTMLTextAreaElement;
    if (!textArea) return;
    
    const start = textArea.selectionStart;
    const end = textArea.selectionEnd;
    const selectedText = content.substring(start, end);
    
    const newContent = content.substring(0, start) + 
      `<u>${selectedText}</u>` + 
      content.substring(end);
      
    onChange(newContent);
    
    // Reset focus
    setTimeout(() => {
      textArea.focus();
      textArea.setSelectionRange(start, end + 7); // 7 is the length of <u></u>
    }, 0);
  };
  
  const handleImageClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    
    const files = e.target.files;
    if (!files || files.length === 0) return;
    
    const file = files[0];
    setSelectedImage(file);
    
    // Create preview URL
    const reader = new FileReader();
    reader.onloadend = () => {
      const imageUrl = reader.result as string;
      setImagePreviewUrl(imageUrl);
      
      // Insert image HTML at cursor position
      const textArea = document.getElementById(id) as HTMLTextAreaElement;
      if (!textArea) return;
      
      const start = textArea.selectionStart;
      const imageHtml = `
<figure>
  <img src="${imageUrl}" alt="User uploaded image" class="rounded-lg max-w-full h-auto" />
  <figcaption class="text-sm text-slate-500 mt-2">Add a caption here</figcaption>
</figure>
`;
      
      const newContent = content.substring(0, start) + imageHtml + content.substring(start);
      onChange(newContent);
    };
    
    reader.readAsDataURL(file);
  };
  
  const togglePreview = () => {
    setIsPreview(!isPreview);
  };
  
  return (
    <div>
      <div className="bg-reminisce-cream/50 border border-reminisce-tan rounded-md p-2 mb-4 flex flex-wrap gap-2">
        <Button 
          type="button" 
          variant="ghost" 
          size="icon" 
          onClick={handleBoldClick}
          className="h-9 w-9 rounded-md"
          title="Bold"
        >
          <Bold size={18} />
        </Button>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="icon" 
          onClick={handleItalicClick}
          className="h-9 w-9 rounded-md"
          title="Italic"
        >
          <Italic size={18} />
        </Button>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="icon" 
          onClick={handleUnderlineClick}
          className="h-9 w-9 rounded-md"
          title="Underline"
        >
          <Underline size={18} />
        </Button>
        
        <div className="w-[1px] h-9 bg-reminisce-tan/50 mx-1"></div>
        
        <Button 
          type="button" 
          variant="ghost" 
          size="icon" 
          onClick={handleImageClick}
          className="h-9 w-9 rounded-md"
          title="Insert Image"
        >
          <ImageIcon size={18} />
        </Button>
        
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          className="hidden"
        />
        
        <div className="flex-grow"></div>
        
        <Button 
          type="button" 
          variant="ghost"
          size="sm"
          onClick={togglePreview}
          className="text-xs"
        >
          <Preview size={16} className="mr-1" />
          {isPreview ? "Edit" : "Preview"}
        </Button>
      </div>
      
      {isPreview ? (
        <Card className="border border-reminisce-tan min-h-[300px] p-4 overflow-auto">
          <div className="prose prose-lg prose-slate mx-auto font-serif leading-relaxed">
            <div dangerouslySetInnerHTML={{ __html: content }} />
          </div>
        </Card>
      ) : (
        <Textarea
          id={id}
          value={content}
          onChange={(e) => onChange(e.target.value)}
          className="min-h-[300px] border-reminisce-tan font-serif text-base leading-relaxed"
          placeholder="Once upon a time..."
        />
      )}
    </div>
  );
};

export default StoryEditor;
