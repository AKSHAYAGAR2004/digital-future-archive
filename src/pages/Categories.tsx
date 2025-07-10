
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Search, FileText, Cpu, Shield, Zap, TrendingUp } from 'lucide-react';
import { Input } from '@/components/ui/input';

const Categories = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    {
      name: 'Technology',
      description: 'Latest advances in AI, quantum computing, and emerging technologies',
      count: 24,
      icon: Cpu,
      color: 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue/50'
    },
    {
      name: 'Research',
      description: 'Academic papers, studies, and scientific breakthroughs',
      count: 18,
      icon: FileText,
      color: 'bg-cyber-purple/20 text-cyber-purple border-cyber-purple/50'
    },
    {
      name: 'Security',
      description: 'Cybersecurity trends, threats, and protection strategies',
      count: 12,
      icon: Shield,
      color: 'bg-cyber-green/20 text-cyber-green border-cyber-green/50'
    },
    {
      name: 'AI/ML',
      description: 'Artificial Intelligence and Machine Learning developments',
      count: 15,
      icon: Zap,
      color: 'bg-cyber-pink/20 text-cyber-pink border-cyber-pink/50'
    },
    {
      name: 'Future Trends',
      description: 'Predictions and analysis of upcoming technological shifts',
      count: 9,
      icon: TrendingUp,
      color: 'bg-cyber-blue/20 text-cyber-blue border-cyber-blue/50'
    }
  ];

  const filteredCategories = categories.filter(category =>
    category.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    category.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text">
            Categories
          </h1>
          <p className="text-xl text-muted-foreground font-exo max-w-2xl mx-auto">
            Explore our content organized by topics and themes
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-input/50 border-cyber-blue/30 focus:border-cyber-blue focus:ring-cyber-blue/20 text-center"
            />
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link key={category.name} to={`/articles?category=${category.name}`}>
                <Card className="cyber-card hover:scale-105 transition-all duration-300 group">
                  <CardHeader>
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-3 rounded-lg ${category.color}`}>
                        <Icon className="w-6 h-6" />
                      </div>
                      <Badge variant="secondary" className="bg-muted/50">
                        {category.count} articles
                      </Badge>
                    </div>
                    <CardTitle className="text-xl font-orbitron group-hover:text-cyber-blue transition-colors">
                      {category.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-muted-foreground font-exo">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* No Results */}
        {filteredCategories.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-orbitron text-cyber-blue mb-2">No Categories Found</h3>
            <p className="text-muted-foreground font-exo">
              Try adjusting your search terms.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Categories;
