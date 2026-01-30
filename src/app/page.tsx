'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Github, Linkedin, ExternalLink, Database, Zap, Cloud } from 'lucide-react'

const projects = [
  {
    title: 'EnterpriseRAG',
    description: 'Production document Q&A with hybrid retrieval',
    status: 'Live',
    tech: ['Gemini', 'Supabase', 'Redis'],
    metric: 'P95 Latency',
    metricValue: '184ms',
    githubUrl: 'https://github.com/dimasergei/enterprise-rag',
    demoUrl: 'https://enterprise-rag.vercel.app',
  },
  {
    title: 'CodeScan AI',
    description: 'Intelligent code analysis with Tree-sitter AST',
    status: 'Live',
    tech: ['Tree-sitter', 'Claude', 'Monaco'],
    metric: 'Languages',
    metricValue: '4+',
    githubUrl: 'https://github.com/dimasergei/codescan-ai',
    demoUrl: 'https://frontend-extqczlwz-dimasergeis-projects.vercel.app',
  },
  {
    title: 'StreamPulse',
    description: 'Real-time event streaming with anomaly detection',
    status: 'Live',
    tech: ['Redis', 'WebSocket', 'Z-score'],
    metric: 'Throughput',
    metricValue: '5K/s',
    githubUrl: 'https://github.com/dimasergei/streampulse',
    demoUrl: 'https://frontend-la64lhwj3-dimasergeis-projects.vercel.app',
  },
  {
    title: 'AgentIQ',
    description: 'Multi-agent system with visible thought process',
    status: 'Live',
    tech: ['Claude', 'E2B', 'Tavily'],
    metric: 'Agents',
    metricValue: '3+',
    githubUrl: 'https://github.com/dimasergei/agentiq',
    demoUrl: 'https://frontend-89ci8rpho-dimasergeis-projects.vercel.app',
  },
  {
    title: 'MeetingGPT',
    description: 'AI-powered meeting transcription with action items',
    status: 'Live',
    tech: ['Whisper', 'Stripe', 'GitHub'],
    metric: 'Accuracy',
    metricValue: '92%',
    githubUrl: 'https://github.com/dimasergei/meetinggpt',
    demoUrl: 'https://frontend-31mi0p1qm-dimasergeis-projects.vercel.app',
  }
]

export default function PortfolioHub() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-200 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg"></div>
              <span className="font-semibold text-slate-900">Portfolio Hub</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" asChild>
                <a href="https://github.com/dimasergei" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
              </Button>
              
              <Button variant="ghost" size="sm" asChild>
                <a href="https://linkedin.com/in/dimitris-chiau" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-4 h-4 mr-2" />
                  LinkedIn
                </a>
              </Button>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            <span className="gradient-text">AI Systems Engineer</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-slate-600 mb-8 leading-relaxed">
            I build high-performance AI systems and automation pipelines...
            <br />
            <span className="text-slate-500 font-medium">
              (ML sitting at the intersection of Systems Engineering)
            </span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Badge variant="secondary" className="px-4 py-2">
              Production-Ready
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              $0 Operational Cost
            </Badge>
            <Badge variant="secondary" className="px-4 py-2">
              Enterprise Standards
            </Badge>
          </div>
        </div>
      </section>

      {/* System Health Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              System Health
            </h2>
            <p className="text-slate-600">
              5 production systems deployed with real-time monitoring
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card key={project.title} className="h-full transition-all duration-300 hover:shadow-xl hover:scale-105">
                <CardHeader className="pb-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg text-white">
                        <Database className="w-5 h-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{project.title}</CardTitle>
                        <div className="flex items-center space-x-2 mt-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full pulse-dot"></div>
                          <span className="text-sm text-green-600 font-medium">
                            {project.status}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <p className="text-slate-600 text-sm">
                    {project.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {/* Performance Metric */}
                  <div className="bg-slate-50 rounded-lg p-3">
                    <div className="text-sm text-slate-500">{project.metric}</div>
                    <div className="text-2xl font-bold text-slate-900">
                      {project.metricValue}
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm" className="flex-1" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </a>
                    </Button>
                    
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Infrastructure Section */}
      <section className="py-16 px-6 bg-slate-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            $0 Production Stack
          </h2>
          <p className="text-slate-300 mb-8">
            Enterprise-grade infrastructure built on free-tier services
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
                <Database className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Supabase</h3>
              <p className="text-slate-400 text-sm">
                PostgreSQL database with pgvector for vector search
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
                <Zap className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Upstash Redis</h3>
              <p className="text-slate-400 text-sm">
                100K requests/day free tier for caching and streaming
              </p>
            </div>
            
            <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center text-white mb-4 mx-auto">
                <Cloud className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Vercel/Railway</h3>
              <p className="text-slate-400 text-sm">
                Free hosting with automatic wake-up on requests
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-800 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-slate-400">
            Built with Next.js, Tailwind CSS, and shadcn/ui
          </p>
          <div className="flex justify-center space-x-4 mt-4">
            <Button variant="ghost" size="sm" asChild>
              <a href="https://github.com/dimasergei" target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="https://linkedin.com/in/dimitris-chiau" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-4 h-4 mr-2" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}
