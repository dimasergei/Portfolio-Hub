'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Github, ExternalLink, ArrowRight, Star, Users, Code, Zap, Globe } from 'lucide-react'

const projects = [
  {
    title: 'EnterpriseRAG',
    description: 'Production document Q&A with hybrid retrieval',
    category: 'Enterprise AI',
    status: 'Live',
    tech: ['Gemini', 'Supabase', 'Redis'],
    metric: 'P95 Latency',
    metricValue: '184ms',
    githubUrl: 'https://github.com/dimasergei/enterprise-rag',
    demoUrl: 'https://enterprise-rag-ecru.vercel.app',
    gradient: 'from-purple-600 to-blue-600',
    icon: Globe
  },
  {
    title: 'CodeScan AI',
    description: 'Intelligent code analysis with Tree-sitter AST',
    category: 'Developer Tools',
    status: 'Live',
    tech: ['Tree-sitter', 'Claude', 'Monaco'],
    metric: 'Languages',
    metricValue: '4+',
    githubUrl: 'https://github.com/dimasergei/codescan-ai',
    demoUrl: 'https://codescan-ai.vercel.app',
    gradient: 'from-blue-600 to-cyan-600',
    icon: Code
  },
  {
    title: 'StreamPulse',
    description: 'Real-time event streaming with anomaly detection',
    category: 'Data Engineering',
    status: 'Live',
    tech: ['Redis', 'WebSocket', 'Z-score'],
    metric: 'Throughput',
    metricValue: '5K/s',
    githubUrl: 'https://github.com/dimasergei/streampulse',
    demoUrl: 'https://streampulse-bice.vercel.app',
    gradient: 'from-green-600 to-emerald-600',
    icon: Zap
  },
  {
    title: 'AgentIQ',
    description: 'Multi-agent system with visible thought process',
    category: 'AI Systems',
    status: 'Live',
    tech: ['Claude', 'E2B', 'Tavily'],
    metric: 'Agents',
    metricValue: '3+',
    githubUrl: 'https://github.com/dimasergei/agentiq',
    demoUrl: 'https://agentiq-three.vercel.app',
    gradient: 'from-orange-600 to-red-600',
    icon: Users
  },
  {
    title: 'MeetingGPT',
    description: 'AI-powered meeting transcription with action items',
    category: 'Productivity',
    status: 'Live',
    tech: ['Whisper', 'Stripe', 'GitHub'],
    metric: 'Accuracy',
    metricValue: '92%',
    githubUrl: 'https://github.com/dimasergei/meetinggpt',
    demoUrl: 'https://meetinggpt.vercel.app',
    gradient: 'from-pink-600 to-purple-600',
    icon: Star
  }
]

export default function PortfolioHub() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-gradient-to-br from-gray-900 to-gray-700 rounded-lg"></div>
              <div>
                <h1 className="text-xl font-semibold text-gray-900">Portfolio</h1>
                <p className="text-xs text-gray-500">Enterprise AI Solutions</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/dimasergei" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-600 hover:text-gray-900 transition-colors" />
              </a>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-gray-200 text-gray-700 hover:bg-gray-50"
                onClick={() => window.location.href = 'mailto:luminaryllc@protonmail.com'}
              >
                Contact
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-4 py-2 mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-700">All Systems Operational</span>
          </div>
          
          <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Enterprise AI
            <br />
            <span className="bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
              Portfolio
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Production-ready AI applications built with modern architectures, 
            designed for scale and reliability. From document intelligence to 
            real-time streaming systems.
          </p>
          
          <div className="flex items-center justify-center space-x-8 text-sm text-gray-500">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>5 Projects</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>Production Ready</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Enterprise Grade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={project.title}
                className={`relative overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer ${
                  hoveredCard === project.title ? 'transform scale-105' : ''
                }`}
                onMouseEnter={() => setHoveredCard(project.title)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => window.open(project.demoUrl, '_blank')}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-5`}></div>
                
                {/* Content */}
                <CardContent className="relative p-8">
                  {/* Category Badge */}
                  <div className="inline-flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1 mb-4">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-xs font-medium text-gray-600">{project.category}</span>
                  </div>
                  
                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">{project.title}</h3>
                  
                  {/* Description */}
                  <p className="text-gray-600 mb-6 line-clamp-2">{project.description}</p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Status and Metric */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-green-600">{project.status}</span>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-gray-500">{project.metric}</div>
                      <div className="text-lg font-bold text-gray-900">{project.metricValue}</div>
                    </div>
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex items-center space-x-3">
                    <Button
                      variant="outline"
                      size="sm"
                      className="flex-1 border-gray-200 text-gray-700 hover:bg-gray-50"
                      onClick={(e) => {
                        e.stopPropagation()
                        window.open(project.githubUrl, '_blank')
                      }}
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button
                      size="sm"
                      className={`flex-1 bg-gradient-to-r ${project.gradient} text-white border-0 hover:opacity-90`}
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </CardContent>
                
                {/* Hover Overlay */}
                {hoveredCard === project.title && (
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 to-white/95 flex items-center justify-center">
                    <div className="text-center">
                      <ArrowRight className="w-12 h-12 text-gray-900 mb-4" />
                      <p className="text-lg font-semibold text-gray-900">View Live Demo</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="text-sm text-gray-600">© 2024 Enterprise AI Portfolio</p>
              <p className="text-xs text-gray-500 mt-1">Built with Next.js, TypeScript, and Tailwind CSS</p>
            </div>
            <div className="flex items-center space-x-6">
              <a href="https://github.com/dimasergei" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5 text-gray-400 hover:text-gray-600 transition-colors" />
              </a>
              <a href="https://www.linkedin.com/in/dimitri-schiau-0848082ba" target="_blank" rel="noopener noreferrer">
                <div className="w-5 h-5 bg-gray-400 hover:bg-gray-600 rounded transition-colors"></div>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
