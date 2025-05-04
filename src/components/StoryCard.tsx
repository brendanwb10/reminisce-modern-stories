
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface StoryCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  author?: string;
  imageSrc?: string;
}

const StoryCard = ({ id, title, excerpt, date, author, imageSrc }: StoryCardProps) => {
  return (
    <Link to={`/stories/${id}`} className="block">
      <Card className="story-card border border-reminisce-tan bg-white overflow-hidden h-full">
        {imageSrc && (
          <div className="aspect-[16/9] overflow-hidden">
            <img 
              src={imageSrc} 
              alt={title} 
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}
        <CardContent className={`${imageSrc ? 'pt-4' : 'pt-6'} pb-6`}>
          <p className="text-slate-500 text-sm mb-1">{date}</p>
          <h3 className="font-display text-xl mb-2 line-clamp-2">{title}</h3>
          <p className="text-slate-600 line-clamp-3 mb-2">{excerpt}</p>
          {author && (
            <p className="text-sm text-slate-500">By {author}</p>
          )}
        </CardContent>
      </Card>
    </Link>
  );
};

export default StoryCard;
