
import { useState } from 'react';
import BlogPost from '@/components/BlogPost';
import CategoryFilter from '@/components/CategoryFilter';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { useContentStore } from '@/hooks/useContentStore';

const Articles = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const { content } = useContentStore();

  const defaultPosts = [
    {
      id: 1,
      title: "The Future of Artificial Intelligence in 2025",
      description: "Exploring the next generation of AI technologies and their impact on society, from quantum computing to neural interfaces.",
      category: "Technology",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 1250,
      likes: 89,
      comments: 23,
      image: "photo-1487058792275-0ad4aaf24ca7",
      author: "Dr. Sarah Chen"
    },
    {
      id: 2,
      title: "Quantum Computing: Breaking the Barriers",
      description: "A deep dive into quantum computing breakthroughs and their potential to revolutionize data processing.",
      category: "Research",
      date: "2024-01-12",
      readTime: "12 min read",
      views: 987,
      likes: 67,
      comments: 15,
      image: "photo-1526374965328-7f61d4dc18c5",
      author: "Prof. Alex Kumar"
    },
    {
      id: 3,
      title: "Cybersecurity in the Metaverse Era",
      description: "Understanding the new security challenges as we transition into virtual worlds and digital realities.",
      category: "Security",
      date: "2024-01-10",
      readTime: "6 min read",
      views: 756,
      likes: 45,
      comments: 12,
      image: "photo-1470813740244-df37b8c1edcb",
      author: "Marcus Rodriguez"
    },
    {
      id: 4,
      title: "Neural Interfaces: The Brain-Computer Revolution",
      description: "How brain-computer interfaces are changing the way we interact with technology and enhancing human capabilities.",
      category: "Technology",
      date: "2024-01-08",
      readTime: "10 min read",
      views: 892,
      likes: 78,
      comments: 19,
      image: "photo-1531297484001-80022131f5a1",
      author: "Dr. Emily Watson"
    },
    {
      id: 5,
      title: "Sustainable Tech: Green Computing Solutions",
      description: "Exploring environmentally friendly approaches to computing and data center management in the digital age.",
      category: "Research",
      date: "2024-01-05",
      readTime: "7 min read",
      views: 634,
      likes: 52,
      comments: 8,
      image: "photo-1483058712412-4245e9b90334",
      author: "Dr. James Liu"
    },
    {
      id: 6,
      title: "Blockchain Beyond Cryptocurrency",
      description: "Discovering innovative applications of blockchain technology in healthcare, supply chain, and governance.",
      category: "Technology",
      date: "2024-01-03",
      readTime: "9 min read",
      views: 543,
      likes: 41,
      comments: 14,
      image: "photo-1487058792275-0ad4aaf24ca7",
      author: "Lisa Park"
    }
  ];

  // Convert uploaded content to blog post format
  const uploadedPosts = content.map(item => ({
    id: parseInt(item.id),
    title: item.title,
    description: item.description,
    category: item.category,
    date: item.date,
    readTime: item.readTime,
    views: item.views,
    likes: item.likes,
    comments: item.comments,
    image: item.fileType?.startsWith('image/') ? item.fileUrl : "photo-1487058792275-0ad4aaf24ca7",
    author: item.author,
    isUploaded: true,
    fileUrl: item.fileUrl,
    fileName: item.fileName,
    fileType: item.fileType
  }));

  // Combine uploaded content with default posts
  const allPosts = [...uploadedPosts, ...defaultPosts];

  const categories = [...new Set(allPosts.map(post => post.category))];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text">
            All Articles
          </h1>
          <p className="text-xl text-muted-foreground font-exo max-w-2xl mx-auto">
            Explore our complete collection of futuristic insights and research
          </p>
        </div>

        {/* Search */}
        <div className="mb-8">
          <div className="relative max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            <Input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 bg-input/50 border-cyber-blue/30 focus:border-cyber-blue focus:ring-cyber-blue/20 text-center"
            />
          </div>
        </div>

        {/* Category Filter */}
        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onCategoryChange={setSelectedCategory}
        />

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPosts.map((post) => (
            <BlogPost key={post.id} post={post} />
          ))}
        </div>

        {/* No Results */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-orbitron text-cyber-blue mb-2">No Articles Found</h3>
            <p className="text-muted-foreground font-exo">
              Try adjusting your search terms or category filters.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Articles;
