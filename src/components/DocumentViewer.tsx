
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, FileText, Image, Video, File } from 'lucide-react';

interface DocumentViewerProps {
  fileName: string;
  fileType: string;
  fileUrl: string;
  fileSize: number;
}

const DocumentViewer = ({ fileName, fileType, fileUrl, fileSize }: DocumentViewerProps) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) return <Image className="w-6 h-6" />;
    if (fileType.startsWith('video/')) return <Video className="w-6 h-6" />;
    if (fileType.includes('pdf')) return <FileText className="w-6 h-6" />;
    return <File className="w-6 h-6" />;
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    link.click();
  };

  const renderViewer = () => {
    if (fileType.startsWith('image/')) {
      return (
        <div className="text-center">
          <img
            src={fileUrl}
            alt={fileName}
            className="max-w-full h-auto rounded-lg mx-auto shadow-lg"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setLoadError(true);
            }}
          />
        </div>
      );
    }

    if (fileType.startsWith('video/')) {
      return (
        <div className="text-center">
          <video
            controls
            className="max-w-full h-auto rounded-lg mx-auto shadow-lg"
            onLoadedData={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setLoadError(true);
            }}
          >
            <source src={fileUrl} type={fileType} />
            Your browser does not support the video tag.
          </video>
        </div>
      );
    }

    if (fileType === 'application/pdf') {
      return (
        <div className="space-y-4">
          <div className="w-full h-[600px] rounded-lg overflow-hidden border border-cyber-blue/30">
            <iframe
              src={fileUrl}
              className="w-full h-full"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setLoadError(true);
              }}
              title={fileName}
            />
          </div>
          <div className="text-center">
            <Button
              onClick={handleDownload}
              className="cyber-button"
              variant="outline"
            >
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>
      );
    }

    if (fileType.startsWith('text/') || fileName.endsWith('.txt') || fileName.endsWith('.md')) {
      return (
        <div className="space-y-4">
          <div className="bg-muted/50 rounded-lg p-6 border border-cyber-blue/30">
            <iframe
              src={fileUrl}
              className="w-full h-96 bg-transparent"
              onLoad={() => setIsLoading(false)}
              onError={() => {
                setIsLoading(false);
                setLoadError(true);
              }}
              title={fileName}
            />
          </div>
          <div className="text-center">
            <Button
              onClick={handleDownload}
              className="cyber-button"
              variant="outline"
            >
              <Download className="w-4 h-4 mr-2" />
              Download File
            </Button>
          </div>
        </div>
      );
    }

    // For other file types, show download option
    return (
      <div className="text-center py-8">
        <div className="flex justify-center mb-4 text-cyber-blue">
          {getFileIcon(fileType)}
        </div>
        <p className="text-muted-foreground mb-4">
          Preview not available for this file type
        </p>
        <Button
          onClick={handleDownload}
          className="cyber-button"
        >
          <Download className="w-4 h-4 mr-2" />
          Download File
        </Button>
      </div>
    );
  };

  return (
    <Card className="cyber-card">
      <CardHeader>
        <CardTitle className="text-xl font-orbitron text-cyber-blue flex items-center">
          {getFileIcon(fileType)}
          <span className="ml-2">{fileName}</span>
        </CardTitle>
        <CardDescription className="font-exo">
          {(fileSize / 1024 / 1024).toFixed(2)} MB • {fileType}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {isLoading && !loadError && (
          <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyber-blue"></div>
            <span className="ml-2 text-muted-foreground">Loading document...</span>
          </div>
        )}
        
        {loadError && (
          <div className="text-center py-8">
            <div className="flex justify-center mb-4 text-cyber-blue">
              {getFileIcon(fileType)}
            </div>
            <p className="text-muted-foreground mb-4">
              Unable to preview this document
            </p>
            <Button
              onClick={handleDownload}
              className="cyber-button"
            >
              <Download className="w-4 h-4 mr-2" />
              Download File
            </Button>
          </div>
        )}
        
        {!loadError && renderViewer()}
      </CardContent>
    </Card>
  );
};

export default DocumentViewer;
