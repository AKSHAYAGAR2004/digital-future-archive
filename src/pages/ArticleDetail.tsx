
import { useParams, useNavigate } from 'react-router-dom';
import { useContentStore } from '@/hooks/useContentStore';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, Eye, Heart, MessageSquare, Share2 } from 'lucide-react';
import DocumentViewer from '@/components/DocumentViewer';

const ArticleDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { getContentById } = useContentStore();

  // Default articles with full content
  const defaultArticles = [
    {
      id: "1",
      title: "The Future of Artificial Intelligence in 2025",
      description: "Exploring the next generation of AI technologies and their impact on society, from quantum computing to neural interfaces. We dive deep into machine learning algorithms, natural language processing, and the ethical implications of advanced AI systems.",
      category: "Technology",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 1250,
      likes: 89,
      comments: 23,
      author: "Dr. Sarah Chen",
      tags: "AI, Machine Learning, Quantum Computing, Neural Interfaces",
      content: `# The Future of Artificial Intelligence in 2025

Artificial Intelligence is rapidly evolving, and 2025 promises to be a pivotal year for AI development. From quantum-enhanced machine learning to neural interfaces that bridge human cognition with artificial intelligence, we're on the brink of revolutionary breakthroughs.

## Key Developments to Watch

### 1. Quantum-Enhanced AI
The integration of quantum computing with machine learning algorithms is opening new possibilities for processing complex datasets and solving previously intractable problems. Quantum computers can potentially solve optimization problems exponentially faster than classical computers, making them ideal for training large-scale AI models.

### 2. Neural Interfaces
Brain-computer interfaces are becoming more sophisticated, allowing for direct communication between human thoughts and AI systems. Companies like Neuralink are pioneering technologies that could allow paralyzed individuals to control computers with their thoughts, while also opening possibilities for cognitive enhancement.

### 3. Ethical AI Frameworks
As AI becomes more powerful, the development of robust ethical frameworks becomes crucial for responsible deployment. Organizations worldwide are working on guidelines for AI safety, fairness, and transparency to ensure these technologies benefit humanity.

### 4. Autonomous Systems
From self-driving cars to autonomous drones, AI-powered systems are becoming increasingly sophisticated. These systems combine computer vision, natural language processing, and decision-making algorithms to operate independently in complex environments.

## Challenges Ahead

While the potential is enormous, several challenges remain:

- **Data Privacy**: As AI systems become more powerful, protecting user data becomes increasingly critical
- **Job Displacement**: Automation may eliminate certain jobs while creating new opportunities
- **Bias and Fairness**: Ensuring AI systems are fair and unbiased across different populations
- **Energy Consumption**: Large AI models require significant computational resources

## The Human Element

Despite rapid technological advancement, the human element remains crucial. AI systems are tools that amplify human intelligence rather than replace it. The most successful AI implementations will be those that enhance human capabilities while preserving human agency and decision-making.

The future of AI is not just about technological advancement, but about creating systems that enhance human capabilities while maintaining our core values and ethics. As we move toward 2025, the collaboration between humans and AI will define the next chapter of technological evolution.`
    },
    {
      id: "2",
      title: "Quantum Computing: Breaking the Barriers",
      description: "A deep dive into quantum computing breakthroughs and their potential to revolutionize data processing, cryptography, and scientific research across multiple disciplines.",
      category: "Research",
      date: "2024-01-12",
      readTime: "12 min read",
      views: 987,
      likes: 67,
      comments: 15,
      author: "Prof. Alex Kumar",
      tags: "Quantum Computing, Physics, Technology, Research",
      content: `# Quantum Computing: Breaking the Barriers

Quantum computing represents one of the most significant technological leaps in modern history. Unlike classical computers that use bits (0s and 1s), quantum computers harness the power of quantum mechanics through qubits.

## Understanding Quantum Mechanics in Computing

### Superposition
Qubits can exist in multiple states simultaneously, allowing quantum computers to process vast amounts of information in parallel. This is fundamentally different from classical bits, which must be either 0 or 1 at any given time.

### Entanglement
Quantum particles can be entangled, meaning the state of one particle instantly affects another, regardless of distance. This phenomenon allows quantum computers to perform certain calculations exponentially faster than classical computers.

### Quantum Interference
This phenomenon allows quantum computers to amplify correct answers and cancel out wrong ones, leading to more accurate computational results.

## Current State of Technology

### Leading Companies
- **IBM**: Has developed quantum computers accessible through the cloud
- **Google**: Achieved "quantum supremacy" with their Sycamore processor
- **IonQ**: Focuses on trapped-ion quantum computing
- **Rigetti**: Provides quantum cloud services

### Technical Challenges
- **Quantum Decoherence**: Qubits are extremely fragile and lose their quantum properties quickly
- **Error Rates**: Current quantum computers have high error rates
- **Scalability**: Building large-scale quantum computers remains challenging

## Real-World Applications

### Cryptography
Quantum computers could potentially break current encryption methods while enabling unbreakable quantum encryption through quantum key distribution.

### Drug Discovery
Simulating molecular interactions at unprecedented scales could accelerate pharmaceutical research and lead to breakthrough treatments.

### Financial Modeling
Optimizing complex trading algorithms, risk assessment, and portfolio management with quantum advantage.

### Climate Modeling
Processing vast environmental datasets for better climate predictions and understanding complex weather patterns.

### Artificial Intelligence
Quantum machine learning algorithms could dramatically speed up AI training and inference.

## The Road Ahead

The quantum revolution is not just coming—it's already here, transforming how we approach the most complex computational challenges. While we're still in the early stages, the potential impact on science, technology, and society is profound.

As quantum computers become more stable and accessible, we can expect breakthroughs in fields ranging from materials science to artificial intelligence. The key will be developing quantum algorithms that can take advantage of quantum computing's unique capabilities.`
    }
    // Add more default articles as needed...
  ];

  // Try to find content in uploaded content first, then in default articles
  const uploadedContent = id ? getContentById(id) : null;
  const defaultContent = defaultArticles.find(article => article.id === id);
  const content = uploadedContent || defaultContent;

  console.log('ArticleDetail - ID:', id);
  console.log('ArticleDetail - Content:', content);

  if (!content) {
    return (
      <div className="min-h-screen py-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-2xl font-orbitron text-cyber-blue mb-4">Article Not Found</h1>
            <Button onClick={() => navigate('/articles')} className="cyber-button">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Articles
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <div className="mb-8">
          <Button
            onClick={() => navigate('/articles')}
            variant="ghost"
            className="text-cyber-blue hover:bg-cyber-blue/10"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Articles
          </Button>
        </div>

        {/* Article Header */}
        <Card className="cyber-card mb-8">
          <CardHeader>
            <div className="flex items-center justify-between mb-4">
              <Badge className={`border-0 ${
                content.category === 'Technology' ? 'bg-cyber-blue/80' :
                content.category === 'Research' ? 'bg-cyber-purple/80' :
                content.category === 'Security' ? 'bg-cyber-green/80' :
                'bg-cyber-pink/80'
              } text-white`}>
                {content.category}
              </Badge>
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  {new Date(content.date).toLocaleDateString()}
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-1" />
                  {content.readTime}
                </div>
              </div>
            </div>
            
            <CardTitle className="text-3xl md:text-4xl font-orbitron text-cyber-blue mb-4">
              {content.title}
            </CardTitle>
            
            <CardDescription className="text-lg font-exo text-muted-foreground mb-6">
              {content.description}
            </CardDescription>

            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                <div className="flex items-center hover:text-cyber-blue transition-colors cursor-pointer">
                  <Eye className="w-4 h-4 mr-1" />
                  {content.views}
                </div>
                <div className="flex items-center hover:text-cyber-pink transition-colors cursor-pointer">
                  <Heart className="w-4 h-4 mr-1" />
                  {content.likes}
                </div>
                <div className="flex items-center hover:text-cyber-green transition-colors cursor-pointer">
                  <MessageSquare className="w-4 h-4 mr-1" />
                  {content.comments}
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                <div className="text-cyber-blue font-exo text-sm">
                  by {content.author}
                </div>
                <Button variant="ghost" size="sm" className="text-cyber-blue hover:bg-cyber-blue/10 p-2">
                  <Share2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Article Content or Document Viewer */}
        {uploadedContent && uploadedContent.fileUrl && uploadedContent.fileName && uploadedContent.fileType && uploadedContent.fileSize ? (
          <div className="mb-8">
            <DocumentViewer
              fileName={uploadedContent.fileName}
              fileType={uploadedContent.fileType}
              fileUrl={uploadedContent.fileUrl}
              fileSize={uploadedContent.fileSize}
            />
          </div>
        ) : (content.content || (uploadedContent && uploadedContent.content)) ? (
          <Card className="cyber-card mb-8">
            <CardContent className="pt-6">
              <div className="prose prose-invert max-w-none">
                <div 
                  className="text-foreground leading-relaxed"
                  style={{ whiteSpace: 'pre-wrap' }}
                  dangerouslySetInnerHTML={{ 
                    __html: (content.content || uploadedContent?.content || '').replace(/\n/g, '<br/>').replace(/### /g, '<h3 class="text-xl font-orbitron text-cyber-purple mt-6 mb-3">').replace(/<\/h3>/g, '</h3>').replace(/## /g, '<h2 class="text-2xl font-orbitron text-cyber-blue mt-8 mb-4">').replace(/<\/h2>/g, '</h2>').replace(/# /g, '<h1 class="text-3xl font-orbitron text-cyber-green mt-8 mb-6">').replace(/<\/h1>/g, '</h1>')
                  }}
                />
              </div>
            </CardContent>
          </Card>
        ) : null}

        {/* Tags */}
        {content.tags && (
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="text-lg font-orbitron text-cyber-purple">Tags</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {content.tags.split(',').map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-cyber-blue/30 text-cyber-blue">
                    {tag.trim()}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ArticleDetail;
