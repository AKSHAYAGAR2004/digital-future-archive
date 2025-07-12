
import SmartArchiveAssistant from '@/components/SmartArchiveAssistant';

const Assistant = () => {
  return (
    <div className="min-h-screen py-8 bg-gradient-to-br from-background via-background to-cyber-blue/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 neon-text">
            AI Archive Assistant
          </h1>
          <p className="text-xl text-muted-foreground font-exo max-w-3xl mx-auto">
            Discover insights from our entire blog archive using advanced AI and semantic search. 
            Ask any question and get intelligent answers sourced directly from our posts.
          </p>
        </div>

        {/* Assistant Component */}
        <SmartArchiveAssistant />

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center space-y-4">
            <div className="bg-cyber-blue/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-cyber-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h3 className="font-orbitron text-xl text-cyber-blue">Semantic Search</h3>
            <p className="text-muted-foreground font-exo">
              Advanced AI understands the meaning behind your questions, not just keywords.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-cyber-purple/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-cyber-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="font-orbitron text-xl text-cyber-purple">Smart Answers</h3>
            <p className="text-muted-foreground font-exo">
              Get comprehensive answers synthesized from multiple relevant sources.
            </p>
          </div>

          <div className="text-center space-y-4">
            <div className="bg-cyber-green/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto">
              <svg className="w-8 h-8 text-cyber-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h3 className="font-orbitron text-xl text-cyber-green">Source Attribution</h3>
            <p className="text-muted-foreground font-exo">
              Every answer includes references to the original posts with relevance scores.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assistant;
