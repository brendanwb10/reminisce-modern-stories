
import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: string;
}

const FeatureCard = ({ icon: Icon, title, description, color = "text-reminisce-coral" }: FeatureCardProps) => {
  return (
    <Card className="border border-reminisce-tan bg-white hover:shadow-md transition-shadow duration-300">
      <CardContent className="pt-6">
        <div className={`mb-4 ${color}`}>
          <Icon size={28} strokeWidth={2} />
        </div>
        <h3 className="text-xl font-display font-medium mb-2">{title}</h3>
        <p className="text-slate-600">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
