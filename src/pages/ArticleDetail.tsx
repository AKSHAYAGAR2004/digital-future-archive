
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

  const content = id ? getContentById(id) : null;

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

        {/* Document Viewer */}
        {content.fileUrl && content.fileName && content.fileType && content.fileSize && (
          <div className="mb-8">
            <DocumentViewer
              fileName={content.fileName}
              fileType={content.fileType}
              fileUrl={content.fileUrl}
              fileSize={content.fileSize}
            />
          </div>
        )}

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
