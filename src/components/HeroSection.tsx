
import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles, Zap } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Animated Background Grid */}
      <div className="absolute inset-0 cyber-grid opacity-30 animate-grid-move"></div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-cyber-blue/20 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyber-purple/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      <div className="absolute top-40 right-40 w-24 h-24 bg-cyber-green/20 rounded-full blur-xl animate-pulse delay-500"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyber-blue mr-2" />
            <span className="text-cyber-blue font-exo text-sm">Welcome to the Future of Blogging</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-orbitron font-bold mb-6 leading-tight">
            <span className="neon-text animate-neon-flicker">Future</span>
            <span className="text-cyber-purple">Blog</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground font-exo max-w-3xl mx-auto leading-relaxed mb-8">
            Discover cutting-edge insights, research papers, and futuristic content 
            in a cyberpunk-inspired digital environment designed for tomorrow's readers.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button className="cyber-button group">
            Explore Articles
            <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <Button 
            variant="outline" 
            className="border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/10 hover:border-cyber-purple font-orbitron"
          >
            <Zap className="mr-2 w-4 h-4" />
            Browse Research
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-cyber-blue mb-2">500+</div>
            <div className="text-muted-foreground font-exo">Articles Published</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-cyber-purple mb-2">50K+</div>
            <div className="text-muted-foreground font-exo">Readers Engaged</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-orbitron font-bold text-cyber-green mb-2">100+</div>
            <div className="text-muted-foreground font-exo">Research Papers</div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};

export default HeroSection;
