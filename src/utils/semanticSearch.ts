
import { pipeline } from '@huggingface/transformers';

export interface SearchResult {
  content: string;
  title: string;
  category: string;
  author: string;
  similarity: number;
  excerpt: string;
}

class SemanticSearchEngine {
  private embedder: any = null;
  private isInitialized = false;

  async initialize() {
    if (this.isInitialized) return;
    
    try {
      console.log('Initializing semantic search engine...');
      this.embedder = await pipeline(
        'feature-extraction',
        'mixedbread-ai/mxbai-embed-xsmall-v1',
        { device: 'webgpu' }
      );
      this.isInitialized = true;
      console.log('Semantic search engine initialized successfully');
    } catch (error) {
      console.error('Failed to initialize semantic search:', error);
      throw error;
    }
  }

  async generateEmbedding(text: string): Promise<number[]> {
    if (!this.isInitialized) {
      await this.initialize();
    }

    const embeddings = await this.embedder(text, { 
      pooling: 'mean', 
      normalize: true 
    });
    return embeddings.tolist()[0];
  }

  cosineSimilarity(a: number[], b: number[]): number {
    const dotProduct = a.reduce((sum, val, i) => sum + val * b[i], 0);
    const magnitudeA = Math.sqrt(a.reduce((sum, val) => sum + val * val, 0));
    const magnitudeB = Math.sqrt(b.reduce((sum, val) => sum + val * val, 0));
    return dotProduct / (magnitudeA * magnitudeB);
  }

  async searchContent(query: string, documents: any[], topK: number = 3): Promise<SearchResult[]> {
    const queryEmbedding = await this.generateEmbedding(query);
    const results: SearchResult[] = [];

    for (const doc of documents) {
      const content = `${doc.title} ${doc.description} ${doc.content || ''}`;
      const contentEmbedding = await this.generateEmbedding(content);
      const similarity = this.cosineSimilarity(queryEmbedding, contentEmbedding);

      // Create excerpt from content
      const words = content.split(' ');
      const excerpt = words.length > 50 ? words.slice(0, 50).join(' ') + '...' : content;

      results.push({
        content: doc.content || doc.description,
        title: doc.title,
        category: doc.category,
        author: doc.author,
        similarity,
        excerpt
      });
    }

    return results
      .sort((a, b) => b.similarity - a.similarity)
      .slice(0, topK);
  }
}

export const semanticSearch = new SemanticSearchEngine();
