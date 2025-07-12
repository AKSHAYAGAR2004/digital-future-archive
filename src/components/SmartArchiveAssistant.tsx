
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Bot, Send, Loader2, BookOpen, Lightbulb } from 'lucide-react';
import { ragService, RAGResponse } from '@/services/ragService';
import { useContentStore } from '@/hooks/useContentStore';
import { useToast } from '@/hooks/use-toast';

const SmartArchiveAssistant = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [response, setResponse] = useState<RAGResponse | null>(null);
  const { content } = useContentStore();
  const { toast } = useToast();

  // Sample questions to help users get started
  const sampleQuestions = [
    "What are the latest developments in AI?",
    "How does quantum computing work?",
    "What are the cybersecurity challenges in the metaverse?",
    "Tell me about blockchain applications beyond cryptocurrency"
  ];

  // Default articles data for demo purposes
  const defaultArticles = [
    {
      id: "1",
      title: "The Future of Artificial Intelligence in 2025",
      description: "Exploring the next generation of AI technologies and their impact on society, from quantum computing to neural interfaces.",
      category: "Technology",
      author: "Dr. Sarah Chen",
      content: `Artificial Intelligence is rapidly evolving, and 2025 promises to be a pivotal year for AI development. From quantum-enhanced machine learning to neural interfaces that bridge human cognition with artificial intelligence, we're on the brink of revolutionary breakthroughs. The integration of quantum computing with machine learning algorithms is opening new possibilities for processing complex datasets and solving previously intractable problems. Brain-computer interfaces are becoming more sophisticated, allowing for direct communication between human thoughts and AI systems. As AI becomes more powerful, the development of robust ethical frameworks becomes crucial for responsible deployment.`
    },
    {
      id: "2", 
      title: "Quantum Computing: Breaking the Barriers",
      description: "A deep dive into quantum computing breakthroughs and their potential to revolutionize data processing, cryptography, and scientific research.",
      category: "Research",
      author: "Prof. Alex Kumar",
      content: `Quantum computing represents one of the most significant technological leaps in modern history. Unlike classical computers that use bits, quantum computers harness the power of quantum mechanics through qubits. Qubits can exist in multiple states simultaneously, allowing quantum computers to process vast amounts of information in parallel. Quantum computers could potentially break current encryption methods while enabling unbreakable quantum encryption. They could accelerate pharmaceutical research through molecular simulation and optimize complex financial models.`
    }
  ];

  // Combine uploaded content with default articles
  const allContent = [...content, ...defaultArticles];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    if (allContent.length === 0) {
      toast({
        title: "No Content Available",
        description: "Please upload some articles first or wait for default content to load.",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    try {
      const result = await ragService.generateAnswer(query, allContent);
      setResponse(result);
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to generate answer. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleSampleQuestion = (question: string) => {
    setQuery(question);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <Card className="cyber-card">
        <CardHeader className="text-center">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-cyber-blue/20 p-3 rounded-full">
              <Bot className="w-8 h-8 text-cyber-blue" />
            </div>
          </div>
          <CardTitle className="text-3xl font-orbitron text-cyber-blue">
            Smart Archive Assistant
          </CardTitle>
          <CardDescription className="text-lg font-exo">
            Ask questions about any topic covered in our blog posts and get AI-powered answers sourced from our archives
          </CardDescription>
        </CardHeader>

        <CardContent className="space-y-6">
          {/* Query Input */}
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              type="text"
              placeholder="Ask me anything about our archived posts..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="flex-1 bg-input/50 border-cyber-blue/30 focus:border-cyber-blue focus:ring-cyber-blue/20"
              disabled={isLoading}
            />
            <Button 
              type="submit" 
              disabled={isLoading || !query.trim()}
              className="cyber-button"
            >
              {isLoading ? (
                <Loader2 className="w-4 h-4 animate-spin" />
              ) : (
                <Send className="w-4 h-4" />
              )}
            </Button>
          </form>

          {/* Sample Questions */}
          {!response && (
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Lightbulb className="w-4 h-4" />
                <span>Try these sample questions:</span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {sampleQuestions.map((question, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="text-left h-auto p-3 text-sm border-cyber-purple/30 hover:border-cyber-purple hover:bg-cyber-purple/10"
                    onClick={() => handleSampleQuestion(question)}
                    disabled={isLoading}
                  >
                    {question}
                  </Button>
                ))}
              </div>
            </div>
          )}

          {/* Response */}
          {response && (
            <div className="space-y-4">
              <Separator />
              
              {/* AI Answer */}
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Bot className="w-5 h-5 text-cyber-blue" />
                  <h3 className="font-orbitron text-lg text-cyber-blue">AI Answer</h3>
                  <Badge 
                    variant="outline" 
                    className={`border-0 ${
                      response.confidence > 0.7 ? 'bg-cyber-green/80' :
                      response.confidence > 0.4 ? 'bg-yellow-500/80' : 'bg-red-500/80'
                    } text-white`}
                  >
                    {Math.round(response.confidence * 100)}% relevance
                  </Badge>
                </div>
                
                <div className="bg-muted/30 p-4 rounded-lg border border-cyber-blue/20">
                  <p className="font-exo leading-relaxed whitespace-pre-line">
                    {response.answer}
                  </p>
                </div>
              </div>

              {/* Sources */}
              {response.sources.length > 0 && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-cyber-purple" />
                    <h3 className="font-orbitron text-lg text-cyber-purple">Sources</h3>
                  </div>
                  
                  <div className="grid gap-3">
                    {response.sources.map((source, index) => (
                      <Card key={index} className="bg-muted/20 border-cyber-purple/30">
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between mb-2">
                            <h4 className="font-orbitron text-cyber-blue font-medium">
                              {source.title}
                            </h4>
                            <Badge variant="outline" className="border-cyber-purple/50 text-cyber-purple">
                              {Math.round(source.similarity * 100)}%
                            </Badge>
                          </div>
                          <p className="text-sm text-muted-foreground mb-2">
                            by {source.author} • {source.category}
                          </p>
                          <p className="text-sm font-exo">
                            {source.excerpt}
                          </p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              )}

              {/* Reset Button */}
              <div className="flex justify-center pt-4">
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setResponse(null);
                    setQuery('');
                  }}
                  className="border-cyber-blue/30 text-cyber-blue hover:bg-cyber-blue/10"
                >
                  Ask Another Question
                </Button>
              </div>
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground pt-4 border-t border-cyber-blue/20">
            <span>Archive: {allContent.length} posts</span>
            <span>•</span>
            <span>Powered by AI & Semantic Search</span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SmartArchiveAssistant;
