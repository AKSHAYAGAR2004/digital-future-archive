
import { useState } from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Filter } from 'lucide-react';

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string | null;
  onCategoryChange: (category: string | null) => void;
}

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mb-8">
      <div className="flex flex-wrap items-center gap-3">
        <div className="flex items-center">
          <Filter className="w-4 h-4 text-cyber-blue mr-2" />
          <span className="font-orbitron text-sm text-cyber-blue">Filter by:</span>
        </div>
        
        <Badge
          variant={selectedCategory === null ? "default" : "outline"}
          className={`cursor-pointer transition-all duration-300 ${
            selectedCategory === null 
              ? 'bg-cyber-blue text-white border-cyber-blue' 
              : 'border-cyber-blue/50 text-cyber-blue hover:bg-cyber-blue/10'
          }`}
          onClick={() => onCategoryChange(null)}
        >
          All Articles
        </Badge>

        {categories.slice(0, isExpanded ? categories.length : 5).map((category) => (
          <Badge
            key={category}
            variant={selectedCategory === category ? "default" : "outline"}
            className={`cursor-pointer transition-all duration-300 ${
              selectedCategory === category 
                ? 'bg-cyber-purple text-white border-cyber-purple' 
                : 'border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/10'
            }`}
            onClick={() => onCategoryChange(category)}
          >
            {category}
          </Badge>
        ))}

        {categories.length > 5 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-cyber-green hover:bg-cyber-green/10 text-xs"
          >
            {isExpanded ? 'Show Less' : `+${categories.length - 5} More`}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CategoryFilter;
