
import { useState, useEffect } from 'react';

export interface UploadedContent {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string;
  file?: File;
  fileName?: string;
  fileType?: string;
  fileSize?: number;
  fileUrl?: string;
  date: string;
  readTime: string;
  views: number;
  likes: number;
  comments: number;
  author: string;
  content?: string; // Add optional content property
}

const CONTENT_STORAGE_KEY = 'uploaded_content';

export const useContentStore = () => {
  const [content, setContent] = useState<UploadedContent[]>([]);

  useEffect(() => {
    const storedContent = localStorage.getItem(CONTENT_STORAGE_KEY);
    if (storedContent) {
      try {
        setContent(JSON.parse(storedContent));
      } catch (error) {
        console.error('Error parsing stored content:', error);
      }
    }
  }, []);

  const saveContent = (newContent: UploadedContent[]) => {
    setContent(newContent);
    localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(newContent));
  };

  const addContent = (contentItem: Omit<UploadedContent, 'id' | 'date' | 'views' | 'likes' | 'comments' | 'readTime'>) => {
    const newItem: UploadedContent = {
      ...contentItem,
      id: Date.now().toString(),
      date: new Date().toISOString().split('T')[0],
      readTime: Math.ceil(contentItem.description.length / 200) + ' min read',
      views: 0,
      likes: 0,
      comments: 0,
    };
    
    const updatedContent = [newItem, ...content];
    saveContent(updatedContent);
    return newItem;
  };

  const deleteContent = (id: string) => {
    const updatedContent = content.filter(item => item.id !== id);
    saveContent(updatedContent);
  };

  const getContentById = (id: string) => {
    return content.find(item => item.id === id);
  };

  return {
    content,
    addContent,
    deleteContent,
    getContentById,
  };
};
