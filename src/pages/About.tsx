
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Brain, Rocket, Users, Globe, Zap, Shield } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Cutting-edge analysis of artificial intelligence and machine learning trends'
    },
    {
      icon: Rocket,
      title: 'Future Technology',
      description: 'Exploring emerging technologies that will shape tomorrow\'s world'
    },
    {
      icon: Users,
      title: 'Expert Community',
      description: 'Connect with researchers, technologists, and industry leaders'
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'International coverage of technological developments and breakthroughs'
    },
    {
      icon: Zap,
      title: 'Real-time Updates',
      description: 'Stay current with the latest developments in science and technology'
    },
    {
      icon: Shield,
      title: 'Verified Research',
      description: 'Peer-reviewed content and fact-checked technological analysis'
    }
  ];

  const stats = [
    { label: 'Articles Published', value: '500+' },
    { label: 'Research Papers', value: '150+' },
    { label: 'Expert Contributors', value: '25+' },
    { label: 'Global Readers', value: '10K+' }
  ];

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text">
            About FutureBlog
          </h1>
          <p className="text-xl text-muted-foreground font-exo max-w-3xl mx-auto mb-8">
            We are a cutting-edge platform dedicated to exploring the frontiers of technology, 
            artificial intelligence, and the future of human innovation.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl md:text-3xl font-orbitron font-bold text-cyber-blue mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-exo">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <Card className="cyber-card mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-orbitron text-cyber-purple text-center">
              Our Mission
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-lg text-muted-foreground font-exo text-center max-w-4xl mx-auto leading-relaxed">
              To bridge the gap between cutting-edge research and practical understanding, 
              making complex technological concepts accessible to innovators, researchers, 
              and curious minds worldwide. We believe in the power of knowledge sharing 
              to accelerate human progress and prepare society for the technological 
              transformations ahead.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-orbitron font-bold text-center mb-8 text-cyber-blue">
            What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title} className="cyber-card hover:scale-105 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="p-2 rounded-lg bg-cyber-blue/20 text-cyber-blue">
                        <Icon className="w-5 h-5" />
                      </div>
                      <CardTitle className="text-lg font-orbitron">
                        {feature.title}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="font-exo">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Team Section */}
        <Card className="cyber-card">
          <CardHeader>
            <CardTitle className="text-2xl font-orbitron text-cyber-green text-center">
              Join Our Community
            </CardTitle>
            <CardDescription className="text-center font-exo">
              Connect with like-minded individuals passionate about the future
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <Badge className="bg-cyber-blue/20 text-cyber-blue border-cyber-blue/50">
                Researchers
              </Badge>
              <Badge className="bg-cyber-purple/20 text-cyber-purple border-cyber-purple/50">
                Technologists
              </Badge>
              <Badge className="bg-cyber-green/20 text-cyber-green border-cyber-green/50">
                Innovators
              </Badge>
              <Badge className="bg-cyber-pink/20 text-cyber-pink border-cyber-pink/50">
                Students
              </Badge>
            </div>
            <p className="text-muted-foreground font-exo max-w-2xl mx-auto">
              Whether you're a seasoned researcher, a tech enthusiast, or someone curious 
              about the future, FutureBlog provides the insights and community you need 
              to stay ahead of the technological curve.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
