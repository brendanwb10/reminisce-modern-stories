
import { Card, CardContent } from "@/components/ui/card";

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  imageSrc?: string;
}

const TestimonialCard = ({ quote, author, role, imageSrc }: TestimonialCardProps) => {
  return (
    <Card className="border border-reminisce-tan bg-white h-full">
      <CardContent className="pt-6 px-6 pb-6 flex flex-col h-full">
        <div className="mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-reminisce-gold"
          >
            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
          </svg>
        </div>
        <p className="text-slate-700 italic mb-6 flex-grow">{quote}</p>
        <div className="flex items-center gap-3">
          {imageSrc && (
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src={imageSrc} alt={author} className="w-full h-full object-cover" />
            </div>
          )}
          <div>
            <p className="font-medium text-reminisce-navy">{author}</p>
            {role && <p className="text-sm text-slate-500">{role}</p>}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;
