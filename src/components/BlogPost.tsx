
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calendar, Clock, Eye, Heart, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

interface BlogPostProps {
  post: {
    id: string | number;
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
    isUploaded?: boolean;
  };
}

const BlogPost = ({ post }: BlogPostProps) => {
  // Ensure ID is always a string for routing
  const postId = typeof post.id === 'number' ? post.id.toString() : post.id;
  
  return (
    <Link to={`/article/${postId}`} className="block group">
      <Card className="cyber-card hover:border-cyber-blue/50 transition-all duration-300 h-full group-hover:scale-[1.02] group-hover:shadow-lg group-hover:shadow-cyber-blue/10">
        <div className="aspect-video overflow-hidden rounded-t-lg">
          <img
            src={post.isUploaded && post.image !== "photo-1487058792275-0ad4aaf24ca7" ? post.image : `https://images.unsplash.com/${post.image}?auto=format&fit=crop&w=800&q=80`}
            alt={post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            onError={(e) => {
              // Fallback to default image if uploaded image fails
              const target = e.target as HTMLImageElement;
              target.src = `https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80`;
            }}
          />
        </div>
        
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between mb-2">
            <Badge className={`border-0 ${
              post.category === 'Technology' ? 'bg-cyber-blue/80' :
              post.category === 'Research' ? 'bg-cyber-purple/80' :
              post.category === 'Security' ? 'bg-cyber-green/80' :
              'bg-cyber-pink/80'
            } text-white`}>
              {post.category}
            </Badge>
            {post.isUploaded && (
              <Badge variant="outline" className="border-cyber-green/50 text-cyber-green text-xs">
                Uploaded
              </Badge>
            )}
          </div>
          
          <CardTitle className="text-xl font-orbitron text-cyber-blue group-hover:text-cyber-purple transition-colors line-clamp-2">
            {post.title}
          </CardTitle>
          
          <CardDescription className="text-muted-foreground font-exo line-clamp-3">
            {post.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="pt-0 flex-1 flex flex-col justify-end">
          <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
            <div className="flex items-center space-x-3">
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {new Date(post.date).toLocaleDateString()}
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-1" />
                {post.readTime}
              </div>
            </div>
          </div>
          
          <div className="flex items-center justify-between text-sm">
            <div className="text-cyber-blue font-exo">
              by {post.author}
            </div>
            <div className="flex items-center space-x-3 text-muted-foreground">
              <div className="flex items-center hover:text-cyber-blue transition-colors">
                <Eye className="w-4 h-4 mr-1" />
                {post.views}
              </div>
              <div className="flex items-center hover:text-cyber-pink transition-colors">
                <Heart className="w-4 h-4 mr-1" />
                {post.likes}
              </div>
              <div className="flex items-center hover:text-cyber-green transition-colors">
                <MessageSquare className="w-4 h-4 mr-1" />
                {post.comments}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogPost;
