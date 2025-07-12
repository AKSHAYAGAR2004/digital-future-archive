
import { semanticSearch, SearchResult } from '@/utils/semanticSearch';

export interface RAGResponse {
  answer: string;
  sources: SearchResult[];
  confidence: number;
}

export class RAGService {
  async generateAnswer(query: string, documents: any[]): Promise<RAGResponse> {
    try {
      // Get relevant documents using semantic search
      const relevantDocs = await semanticSearch.searchContent(query, documents, 5);
      
      if (relevantDocs.length === 0) {
        return {
          answer: "I couldn't find any relevant information in the archived posts to answer your question.",
          sources: [],
          confidence: 0
        };
      }

      // Create context from relevant documents
      const context = relevantDocs
        .map((doc, index) => `[${index + 1}] ${doc.title}: ${doc.excerpt}`)
        .join('\n\n');

      // Generate answer using a simple template approach
      const answer = this.generateTemplateAnswer(query, relevantDocs);

      return {
        answer,
        sources: relevantDocs,
        confidence: relevantDocs[0]?.similarity || 0
      };
    } catch (error) {
      console.error('Error in RAG generation:', error);
      return {
        answer: "I'm currently experiencing technical difficulties. Please try again later.",
        sources: [],
        confidence: 0
      };
    }
  }

  private generateTemplateAnswer(query: string, sources: SearchResult[]): string {
    const topSource = sources[0];
    const additionalSources = sources.slice(1, 3);

    let answer = `Based on the archived posts, here's what I found:\n\n`;
    
    // Main answer from top source
    answer += `According to "${topSource.title}" by ${topSource.author}, `;
    
    // Extract key information from the content
    const sentences = topSource.content.split('. ').filter(s => s.length > 20);
    const relevantSentences = sentences.slice(0, 2);
    answer += relevantSentences.join('. ') + '.\n\n';

    // Add information from additional sources if available
    if (additionalSources.length > 0) {
      answer += `Additional insights from other posts:\n\n`;
      additionalSources.forEach((source, index) => {
        const sentences = source.content.split('. ').filter(s => s.length > 20);
        if (sentences.length > 0) {
          answer += `• From "${source.title}": ${sentences[0]}.\n`;
        }
      });
    }

    answer += `\n*This answer is generated from ${sources.length} archived post${sources.length > 1 ? 's' : ''} with ${Math.round(topSource.similarity * 100)}% relevance.*`;

    return answer;
  }
}

export const ragService = new RAGService();
