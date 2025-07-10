
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Eye, Heart, MessageSquare, Share2 } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  post: {
    id: number;
    title: string;
    description: string;
    category: string;
    date: string;
    readTime: string;
    views: number;
    likes: number;
    comments: number;
    image: string;
    author: string;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <Card className="cyber-card group">
      <div className="relative overflow-hidden rounded-t-xl">
        <img
          src={`https://images.unsplash.com/${post.image}?w=600&h=300&fit=crop`}
          alt={post.title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <Badge className={`absolute top-4 left-4 border-0 ${
          post.category === 'Technology' ? 'bg-cyber-blue/80' :
          post.category === 'Research' ? 'bg-cyber-purple/80' :
          post.category === 'Security' ? 'bg-cyber-green/80' :
          'bg-cyber-pink/80'
        } text-white`}>
          {post.category}
        </Badge>
      </div>
      
      <CardHeader>
        <CardTitle className="text-xl font-orbitron text-cyber-blue group-hover:text-cyber-purple transition-colors line-clamp-2">
          {post.title}
        </CardTitle>
        <CardDescription className="text-muted-foreground font-exo line-clamp-3">
          {post.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <div className="flex items-center justify-between text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              {new Date(post.date).toLocaleDateString()}
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-1" />
              {post.readTime}
            </div>
          </div>
          <div className="text-cyber-blue font-exo text-xs">
            by {post.author}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4 text-sm text-muted-foreground">
            <div className="flex items-center hover:text-cyber-blue transition-colors cursor-pointer">
              <Eye className="w-4 h-4 mr-1" />
              {post.views}
            </div>
            <div className="flex items-center hover:text-cyber-pink transition-colors cursor-pointer">
              <Heart className="w-4 h-4 mr-1" />
              {post.likes}
            </div>
            <div className="flex items-center hover:text-cyber-green transition-colors cursor-pointer">
              <MessageSquare className="w-4 h-4 mr-1" />
              {post.comments}
            </div>
          </div>
          
          <div className="flex items-center space-x-1">
            <Button variant="ghost" size="sm" className="text-cyber-blue hover:bg-cyber-blue/10 p-2">
              <Share2 className="w-4 h-4" />
            </Button>
            <Link to={`/article/${post.id}`}>
              <Button variant="ghost" size="sm" className="text-cyber-purple hover:bg-cyber-purple/10">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default BlogPost;
