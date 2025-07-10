
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Github, Twitter, Linkedin, Mail, Rss } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-cyber-blue/30 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyber-blue to-cyber-purple rounded-lg flex items-center justify-center">
                <span className="text-white font-orbitron font-bold text-lg">F</span>
              </div>
              <span className="font-orbitron font-bold text-xl neon-text">FutureBlog</span>
            </div>
            <p className="text-muted-foreground font-exo mb-6 max-w-md">
              Exploring the future of technology through cutting-edge articles, research papers, 
              and interactive content designed for tomorrow's innovators.
            </p>
            
            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-orbitron text-cyber-blue">Stay Updated</h4>
              <div className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-input/50 border-cyber-blue/30 focus:border-cyber-blue focus:ring-cyber-blue/20"
                />
                <Button className="cyber-button whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-orbitron text-cyber-purple mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'Articles', 'Categories', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <Link
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-muted-foreground hover:text-cyber-blue transition-colors font-exo"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-orbitron text-cyber-green mb-4">Categories</h4>
            <ul className="space-y-2">
              {['Technology', 'Research', 'Security', 'AI & ML', 'Quantum'].map((category) => (
                <li key={category}>
                  <Link
                    to={`/categories/${category.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-muted-foreground hover:text-cyber-green transition-colors font-exo"
                  >
                    {category}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-cyber-blue/30 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground font-exo text-sm mb-4 md:mb-0">
            © 2024 FutureBlog. All rights reserved. Built for the future.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4">
            {[
              { icon: Github, href: '#', color: 'hover:text-cyber-blue' },
              { icon: Twitter, href: '#', color: 'hover:text-cyber-purple' },
              { icon: Linkedin, href: '#', color: 'hover:text-cyber-green' },
              { icon: Mail, href: '#', color: 'hover:text-cyber-pink' },
              { icon: Rss, href: '#', color: 'hover:text-cyber-blue' }
            ].map(({ icon: Icon, href, color }, index) => (
              <a
                key={index}
                href={href}
                className={`text-muted-foreground ${color} transition-colors p-2 rounded-lg hover:bg-white/5`}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
