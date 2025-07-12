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
      id: "1",
      title: "The Future of Artificial Intelligence in 2025",
      description: "Exploring the next generation of AI technologies and their impact on society, from quantum computing to neural interfaces. We dive deep into machine learning algorithms, natural language processing, and the ethical implications of advanced AI systems.",
      category: "Technology",
      date: "2024-01-15",
      readTime: "8 min read",
      views: 1250,
      likes: 89,
      comments: 23,
      image: "photo-1487058792275-0ad4aaf24ca7",
      author: "Dr. Sarah Chen",
      content: `# The Future of Artificial Intelligence in 2025

Artificial Intelligence is rapidly evolving, and 2025 promises to be a pivotal year for AI development. From quantum-enhanced machine learning to neural interfaces that bridge human cognition with artificial intelligence, we're on the brink of revolutionary breakthroughs.

## Key Developments to Watch

### 1. Quantum-Enhanced AI
The integration of quantum computing with machine learning algorithms is opening new possibilities for processing complex datasets and solving previously intractable problems.

### 2. Neural Interfaces
Brain-computer interfaces are becoming more sophisticated, allowing for direct communication between human thoughts and AI systems.

### 3. Ethical AI Frameworks
As AI becomes more powerful, the development of robust ethical frameworks becomes crucial for responsible deployment.

The future of AI is not just about technological advancement, but about creating systems that enhance human capabilities while maintaining our core values and ethics.`
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
      image: "photo-1526374965328-7f61d4dc18c5",
      author: "Prof. Alex Kumar",
      content: `# Quantum Computing: Breaking the Barriers

Quantum computing represents one of the most significant technological leaps in modern history. Unlike classical computers that use bits (0s and 1s), quantum computers harness the power of quantum mechanics through qubits.

## Understanding Quantum Mechanics in Computing

### Superposition
Qubits can exist in multiple states simultaneously, allowing quantum computers to process vast amounts of information in parallel.

### Entanglement
Quantum particles can be entangled, meaning the state of one particle instantly affects another, regardless of distance.

### Quantum Interference
This phenomenon allows quantum computers to amplify correct answers and cancel out wrong ones.

## Real-World Applications

- **Cryptography**: Breaking current encryption methods while creating unbreakable quantum encryption
- **Drug Discovery**: Simulating molecular interactions at unprecedented scales
- **Financial Modeling**: Optimizing complex trading algorithms and risk assessment
- **Climate Modeling**: Processing vast environmental datasets for better predictions

The quantum revolution is not just coming—it's already here, transforming how we approach the most complex computational challenges.`
    },
    {
      id: "3",
      title: "Cybersecurity in the Metaverse Era",
      description: "Understanding the new security challenges as we transition into virtual worlds and digital realities. Exploring privacy, identity protection, and data security in immersive environments.",
      category: "Security",
      date: "2024-01-10",
      readTime: "6 min read",
      views: 756,
      likes: 45,
      comments: 12,
      image: "photo-1470813740244-df37b8c1edcb",
      author: "Marcus Rodriguez",
      content: `# Cybersecurity in the Metaverse Era

As we step into the metaverse, we're not just entering new virtual worlds—we're creating new attack surfaces and security challenges that traditional cybersecurity frameworks weren't designed to handle.

## New Threat Vectors

### Avatar Identity Theft
In virtual worlds, our digital identities become valuable assets that can be stolen, impersonated, or manipulated.

### Virtual Asset Security
Digital assets, NFTs, and virtual real estate require new forms of protection and authentication.

### Immersive Social Engineering
VR environments make social engineering attacks more convincing and harder to detect.

## Security Solutions for Virtual Worlds

1. **Multi-Factor Biometric Authentication**: Using voice patterns, eye tracking, and behavioral biometrics
2. **Blockchain-Based Identity Verification**: Decentralized identity management systems
3. **AI-Powered Threat Detection**: Real-time monitoring of unusual activities in virtual spaces

The metaverse promises incredible opportunities, but only if we can navigate its security challenges successfully.`
    },
    {
      id: "4",
      title: "Neural Interfaces: The Brain-Computer Revolution",
      description: "How brain-computer interfaces are changing the way we interact with technology and enhancing human capabilities. From medical applications to cognitive augmentation.",
      category: "Technology",
      date: "2024-01-08",
      readTime: "10 min read",
      views: 892,
      likes: 78,
      comments: 19,
      image: "photo-1531297484001-80022131f5a1",
      author: "Dr. Emily Watson",
      content: `# Neural Interfaces: The Brain-Computer Revolution

Brain-Computer Interfaces (BCIs) represent the ultimate convergence of neuroscience and technology, promising to unlock human potential in ways previously confined to science fiction.

## Current Applications

### Medical Breakthroughs
- **Paralysis Recovery**: Helping paralyzed patients control robotic limbs and communicate
- **Depression Treatment**: Precision neurostimulation for treatment-resistant depression
- **Memory Enhancement**: Assisting patients with memory disorders

### Consumer Applications
- **Thought-to-Text**: Direct translation of thoughts into digital text
- **Mental Gaming**: Controlling games and applications through thought alone
- **Cognitive Enhancement**: Boosting memory, focus, and learning capabilities

## The Technology Behind BCIs

Neural interfaces work by detecting electrical signals from neurons and translating them into digital commands. Modern systems use:

- **Invasive Electrodes**: Directly implanted into brain tissue
- **Non-Invasive Sensors**: EEG-based systems that read brain signals from the scalp
- **Machine Learning**: AI algorithms that learn to interpret neural patterns

## Ethical Considerations

As we develop more sophisticated neural interfaces, we must consider:
- Privacy of thoughts and mental processes
- Equitable access to cognitive enhancement
- The potential for neural hacking and mental manipulation

The brain-computer revolution is not just about technology—it's about redefining what it means to be human.`
    },
    {
      id: "5",
      title: "Sustainable Tech: Green Computing Solutions",
      description: "Exploring environmentally friendly approaches to computing and data center management in the digital age. Carbon-neutral cloud computing and renewable energy integration.",
      category: "Research",
      date: "2024-01-05",
      readTime: "7 min read",
      views: 634,
      likes: 52,
      comments: 8,
      image: "photo-1483058712412-4245e9b90334",
      author: "Dr. James Liu",
      content: `# Sustainable Tech: Green Computing Solutions

As our digital footprint grows exponentially, the environmental impact of computing becomes a critical concern. The tech industry is now racing to develop sustainable solutions that don't compromise performance.

## The Environmental Challenge

### Energy Consumption
Data centers consume approximately 1% of global electricity, with this figure expected to grow as digital services expand.

### Carbon Footprint
The ICT sector contributes about 4% of global greenhouse gas emissions, equivalent to the aviation industry.

## Green Computing Innovations

### Energy-Efficient Hardware
- **ARM-based Processors**: Lower power consumption without sacrificing performance
- **Optical Computing**: Using light instead of electricity for data processing
- **Quantum Processors**: Potentially reducing energy requirements for complex calculations

### Sustainable Data Centers
- **Renewable Energy**: Solar, wind, and hydroelectric power integration
- **Advanced Cooling**: Liquid cooling and ambient temperature optimization
- **Edge Computing**: Reducing data transmission and central processing needs

### Software Optimization
- **Efficient Algorithms**: Code optimization to reduce computational requirements
- **Green Software Engineering**: Designing applications with energy efficiency in mind
- **Cloud Resource Optimization**: Dynamic scaling and efficient resource allocation

## The Path Forward

Sustainable technology isn't just about environmental responsibility—it's about creating more efficient, cost-effective, and resilient computing systems. The future of tech is green, and the companies that embrace this reality will lead the next technological revolution.`
    },
    {
      id: "6",
      title: "Blockchain Beyond Cryptocurrency",
      description: "Discovering innovative applications of blockchain technology in healthcare, supply chain, governance, and digital identity verification beyond financial applications.",
      category: "Technology",
      date: "2024-01-03",
      readTime: "9 min read",
      views: 543,
      likes: 41,
      comments: 14,
      image: "photo-1487058792275-0ad4aaf24ca7",
      author: "Lisa Park",
      content: `# Blockchain Beyond Cryptocurrency

While cryptocurrency grabbed headlines, blockchain's true potential lies in its ability to create trust, transparency, and immutability across various industries and applications.

## Revolutionary Applications

### Healthcare Records
Blockchain enables secure, interoperable medical records that patients control while maintaining privacy and enabling seamless care coordination.

### Supply Chain Transparency
From farm to table, blockchain provides immutable tracking of products, ensuring authenticity and ethical sourcing.

### Digital Identity
Self-sovereign identity solutions give users control over their personal data while enabling secure verification.

### Voting Systems
Blockchain-based voting could eliminate fraud while maintaining voter privacy and enabling real-time result verification.

## Technical Advantages

### Immutability
Once data is recorded on a blockchain, it cannot be altered without consensus, ensuring data integrity.

### Decentralization
No single point of failure or control, making systems more resilient and democratic.

### Transparency
All participants can verify transactions and system state, building trust without intermediaries.

### Smart Contracts
Self-executing contracts with terms directly written into code, automating complex processes.

## Challenges and Solutions

While blockchain offers significant benefits, challenges include:
- **Scalability**: Layer 2 solutions and new consensus mechanisms
- **Energy Consumption**: Proof-of-stake and other efficient consensus algorithms
- **User Experience**: Better interfaces and simplified interactions

The blockchain revolution extends far beyond digital currency—it's about reimagining trust in the digital age.`
    },
    {
      id: "7",
      title: "The Rise of Edge Computing",
      description: "How edge computing is transforming data processing by bringing computation closer to data sources, reducing latency and improving real-time applications.",
      category: "Technology",
      date: "2024-01-01",
      readTime: "6 min read",
      views: 412,
      likes: 33,
      comments: 7,
      image: "photo-1518709268805-4e9042af2176",
      author: "Dr. Michael Zhang",
      content: `# The Rise of Edge Computing

Edge computing is revolutionizing how we process and analyze data by moving computation from centralized cloud servers to the "edge" of networks, closer to where data is generated and consumed.

## What is Edge Computing?

Edge computing involves processing data near the source of data generation rather than relying on a centralized cloud-based system. This approach significantly reduces latency and bandwidth usage while improving reliability and security.

## Key Benefits

### Reduced Latency
By processing data locally, edge computing can reduce response times from hundreds of milliseconds to just a few milliseconds—critical for real-time applications.

### Bandwidth Optimization
Only relevant processed data is sent to the cloud, reducing bandwidth costs and network congestion.

### Enhanced Privacy
Sensitive data can be processed locally without being transmitted to external servers, improving privacy and compliance.

### Improved Reliability
Local processing continues even when internet connectivity is poor or intermittent.

## Real-World Applications

### Autonomous Vehicles
Self-driving cars require split-second decision-making that can't afford cloud round-trip delays.

### Smart Cities
Traffic management, energy distribution, and public safety systems benefit from local processing.

### Industrial IoT
Manufacturing equipment can process sensor data locally for immediate quality control and predictive maintenance.

### Healthcare
Medical devices can analyze patient data in real-time for immediate alerts and interventions.

The edge computing revolution is making our digital world more responsive, efficient, and intelligent than ever before.`
    }
  ];

  // Convert uploaded content to blog post format with consistent string IDs
  const uploadedPosts = content.map(item => ({
    id: item.id, // Keep as string ID
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
    fileType: item.fileType,
    fileSize: item.fileSize,
    content: item.content || item.description // Use content if available, fallback to description
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

  console.log('Articles - Uploaded content from store:', content);
  console.log('Articles - Converted uploaded posts:', uploadedPosts);
  console.log('Articles - All posts:', allPosts);

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
