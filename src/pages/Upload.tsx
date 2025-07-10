
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Upload as UploadIcon, FileText, Image, Video, File } from 'lucide-react';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Technology');
  const [tags, setTags] = useState('');

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement actual upload functionality
    console.log('Upload submitted:', {
      file: selectedFile,
      title,
      description,
      category,
      tags
    });
  };

  const getFileIcon = (fileType: string) => {
    if (fileType.startsWith('image/')) return <Image className="w-8 h-8" />;
    if (fileType.startsWith('video/')) return <Video className="w-8 h-8" />;
    if (fileType.includes('pdf')) return <FileText className="w-8 h-8" />;
    return <File className="w-8 h-8" />;
  };

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text">
            Upload Content
          </h1>
          <p className="text-xl text-muted-foreground font-exo max-w-2xl mx-auto">
            Share your futuristic insights, research papers, and documents with the community
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Upload Form */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron text-cyber-blue">
                New Upload
              </CardTitle>
              <CardDescription className="font-exo">
                Fill in the details for your content
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* File Upload */}
                <div className="space-y-2">
                  <Label htmlFor="file" className="font-exo font-medium">
                    Select File
                  </Label>
                  <div className="border-2 border-dashed border-cyber-blue/30 rounded-lg p-6 text-center hover:border-cyber-blue/50 transition-colors">
                    <input
                      id="file"
                      type="file"
                      onChange={handleFileChange}
                      className="hidden"
                      accept=".pdf,.doc,.docx,.ppt,.pptx,.jpg,.jpeg,.png,.gif,.mp4,.mov"
                    />
                    <label htmlFor="file" className="cursor-pointer">
                      <UploadIcon className="w-12 h-12 mx-auto mb-4 text-cyber-blue" />
                      <p className="text-lg font-exo text-cyber-blue mb-2">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-sm text-muted-foreground">
                        PDF, DOC, PPT, Images, Videos (Max 50MB)
                      </p>
                    </label>
                  </div>
                  {selectedFile && (
                    <div className="flex items-center space-x-3 p-3 bg-cyber-blue/10 rounded-lg border border-cyber-blue/30">
                      {getFileIcon(selectedFile.type)}
                      <div>
                        <p className="font-exo font-medium">{selectedFile.name}</p>
                        <p className="text-sm text-muted-foreground">
                          {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Title */}
                <div className="space-y-2">
                  <Label htmlFor="title" className="font-exo font-medium">
                    Title
                  </Label>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a compelling title..."
                    className="bg-input/50 border-cyber-blue/30 focus:border-cyber-blue focus:ring-cyber-blue/20"
                    required
                  />
                </div>

                {/* Description */}
                <div className="space-y-2">
                  <Label htmlFor="description" className="font-exo font-medium">
                    Description
                  </Label>
                  <textarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Describe your content..."
                    rows={4}
                    className="w-full px-3 py-2 bg-input/50 border border-cyber-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 focus:border-cyber-blue resize-none"
                    required
                  />
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label htmlFor="category" className="font-exo font-medium">
                    Category
                  </Label>
                  <select
                    id="category"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-3 py-2 bg-input/50 border border-cyber-blue/30 rounded-md focus:outline-none focus:ring-2 focus:ring-cyber-blue/20 focus:border-cyber-blue"
                  >
                    <option value="Technology">Technology</option>
                    <option value="Research">Research</option>
                    <option value="Security">Security</option>
                    <option value="AI/ML">AI/ML</option>
                    <option value="Future Trends">Future Trends</option>
                  </select>
                </div>

                {/* Tags */}
                <div className="space-y-2">
                  <Label htmlFor="tags" className="font-exo font-medium">
                    Tags
                  </Label>
                  <Input
                    id="tags"
                    value={tags}
                    onChange={(e) => setTags(e.target.value)}
                    placeholder="artificial intelligence, quantum computing, cybersecurity..."
                    className="bg-input/50 border-cyber-blue/30 focus:border-cyber-blue focus:ring-cyber-blue/20"
                  />
                  <p className="text-sm text-muted-foreground">
                    Separate tags with commas
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyber-blue to-cyber-purple hover:from-cyber-blue/80 hover:to-cyber-purple/80 text-white font-exo font-medium py-2 px-4 rounded-lg transition-all duration-300"
                  disabled={!selectedFile || !title || !description}
                >
                  <UploadIcon className="w-4 h-4 mr-2" />
                  Upload Content
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Upload Guidelines */}
          <Card className="cyber-card">
            <CardHeader>
              <CardTitle className="text-2xl font-orbitron text-cyber-purple">
                Upload Guidelines
              </CardTitle>
              <CardDescription className="font-exo">
                Best practices for sharing content
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-green rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-exo font-medium text-cyber-green">File Formats</h4>
                    <p className="text-sm text-muted-foreground">
                      PDF, DOC, PPT for documents. JPG, PNG, GIF for images. MP4, MOV for videos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-blue rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-exo font-medium text-cyber-blue">Quality Content</h4>
                    <p className="text-sm text-muted-foreground">
                      Share original research, insights, or curated futuristic content that adds value.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-purple rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-exo font-medium text-cyber-purple">Proper Attribution</h4>
                    <p className="text-sm text-muted-foreground">
                      Always credit original authors and sources. Respect intellectual property rights.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-cyber-pink rounded-full mt-2"></div>
                  <div>
                    <h4 className="font-exo font-medium text-cyber-pink">Descriptive Titles</h4>
                    <p className="text-sm text-muted-foreground">
                      Use clear, engaging titles that accurately describe your content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-cyber-blue/10 rounded-lg border border-cyber-blue/30">
                <h4 className="font-exo font-medium text-cyber-blue mb-2">
                  File Size Limits
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Documents: Up to 25 MB</li>
                  <li>• Images: Up to 10 MB</li>
                  <li>• Videos: Up to 50 MB</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Upload;
