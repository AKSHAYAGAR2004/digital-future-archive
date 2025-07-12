
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
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const loadStoredContent = () => {
      try {
        const storedContent = localStorage.getItem(CONTENT_STORAGE_KEY);
        console.log('Loading stored content:', storedContent);
        
        if (storedContent) {
          const parsedContent = JSON.parse(storedContent);
          console.log('Parsed stored content:', parsedContent);
          setContent(parsedContent);
        }
      } catch (error) {
        console.error('Error parsing stored content:', error);
        // Clear corrupted data
        localStorage.removeItem(CONTENT_STORAGE_KEY);
      } finally {
        setIsLoaded(true);
      }
    };

    loadStoredContent();
  }, []);

  const saveContent = (newContent: UploadedContent[]) => {
    console.log('Saving content to localStorage:', newContent);
    setContent(newContent);
    try {
      localStorage.setItem(CONTENT_STORAGE_KEY, JSON.stringify(newContent));
      console.log('Content saved successfully');
    } catch (error) {
      console.error('Error saving content to localStorage:', error);
    }
  };

  const addContent = (contentItem: Omit<UploadedContent, 'id' | 'date' | 'views' | 'likes' | 'comments' | 'readTime'>) => {
    const newItem: UploadedContent = {
      ...contentItem,
      id: Date.now().toString(), // Ensure string ID
      date: new Date().toISOString().split('T')[0],
      readTime: Math.ceil(contentItem.description.length / 200) + ' min read',
      views: 0,
      likes: 0,
      comments: 0,
    };
    
    console.log('Adding new content item:', newItem);
    const updatedContent = [newItem, ...content];
    saveContent(updatedContent);
    return newItem;
  };

  const deleteContent = (id: string) => {
    console.log('Deleting content with ID:', id);
    const updatedContent = content.filter(item => item.id !== id);
    saveContent(updatedContent);
  };

  const getContentById = (id: string) => {
    console.log('Getting content by ID:', id);
    console.log('Available content:', content);
    const foundContent = content.find(item => item.id === id);
    console.log('Found content:', foundContent);
    return foundContent;
  };

  return {
    content,
    addContent,
    deleteContent,
    getContentById,
    isLoaded,
  };
};
