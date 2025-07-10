
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, Eye, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeaturedPosts = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in 2025",
      description: "Exploring the next generation of AI technologies and their impact on society, from quantum computing to neural interfaces.",
      category: "Technology",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 1250,
      likes: 89,
      image: "photo-1487058792275-0ad4aaf24ca7",
      featured: true
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking the Barriers",
      description: "A deep dive into quantum computing breakthroughs and their potential to revolutionize data processing.",
      category: "Research",
      date: "2024-01-12",
      readTime: "12 min read",
      views: 987,
      likes: 67,
      image: "photo-1526374965328-7f61d4dc18c5",
      featured: true
    },
    {
      id: 3,
      title: "Cybersecurity in the Metaverse Era",
      description: "Understanding the new security challenges as we transition into virtual worlds and digital realities.",
      category: "Security",
      date: "2024-01-10",
      readTime: "6 min read",
      views: 756,
      likes: 45,
      image: "photo-1470813740244-df37b8c1edcb",
      featured: true
    }
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text">
            Featured Articles
          </h2>
          <p className="text-xl text-muted-foreground font-exo max-w-2xl mx-auto">
            Discover our most impactful content shaping the future of technology
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <Card key={post.id} className={`cyber-card group cursor-pointer ${index === 0 ? 'lg:col-span-2 xl:col-span-1' : ''}`}>
              <div className="relative overflow-hidden rounded-t-xl">
                <img
                  src={`https://images.unsplash.com/${post.image}?w=600&h=300&fit=crop`}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <Badge className="absolute top-4 left-4 bg-cyber-blue/80 text-white border-0">
                  {post.category}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl font-orbitron text-cyber-blue group-hover:text-cyber-purple transition-colors">
                  {post.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground font-exo">
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
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1" />
                      {post.views}
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1" />
                      {post.likes}
                    </div>
                  </div>
                  
                  <Link to={`/article/${post.id}`}>
                    <Button variant="ghost" size="sm" className="text-cyber-blue hover:bg-cyber-blue/10">
                      Read More
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/articles">
            <Button className="cyber-button">
              View All Articles
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedPosts;
