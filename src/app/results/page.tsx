'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'

interface MVPArchitectureRequest {
  purpose: string
  targetAudience: string
  keyFeatures: string
  designPreference: string
  timeline: string
  budget: string
}

export default function MVPResults() {
  const [requestData, setRequestData] = useState<MVPArchitectureRequest | null>(null)

  useEffect(() => {
    const data = localStorage.getItem('mvpArchitectureRequest')
    if (data) {
      setRequestData(JSON.parse(data))
    }
  }, [])

  const getRecommendations = (data: MVPArchitectureRequest) => {
    const recommendations = {
      pageStructure: [
        {
          page: 'Landing/Hero Page',
          purpose: 'First impression & value proposition',
          elements: ['Hero section', 'Key benefits', 'Call-to-action', 'Social proof']
        },
        {
          page: 'Features/Services Page',
          purpose: 'Detailed feature presentation',
          elements: ['Feature grid', 'Use cases', 'Pricing/Plans', 'FAQ section']
        },
        {
          page: 'Contact/Conversion Page',
          purpose: 'Lead capture & conversion',
          elements: ['Contact form', 'About section', 'Testimonials', 'Next steps']
        }
      ],
      technicalStack: getStackRecommendations(data),
      designDirection: getDesignRecommendations(data),
      timeline: getTimelineBreakdown(data),
      nextSteps: getNextSteps(data)
    }
    return recommendations
  }

  const getStackRecommendations = (data: MVPArchitectureRequest) => {
    const budgetLevel = data.budget
    const timelineUrgent = ['asap', '1-week'].includes(data.timeline)

    if (budgetLevel === 'under-5k' || timelineUrgent) {
      return {
        frontend: 'React + Next.js',
        hosting: 'Vercel',
        cms: 'Contentful or Strapi',
        database: 'Supabase',
        rationale: 'Fast deployment, cost-effective, scalable'
      }
    } else if (['10k-25k', '25k-50k', '50k-plus'].includes(budgetLevel)) {
      return {
        frontend: 'Next.js + TypeScript',
        backend: 'Node.js + Express',
        database: 'PostgreSQL',
        hosting: 'AWS or Digital Ocean',
        rationale: 'Robust, scalable, enterprise-ready'
      }
    } else {
      return {
        frontend: 'React + Next.js',
        hosting: 'Netlify/Vercel',
        database: 'Firebase',
        cms: 'Sanity or Prismic',
        rationale: 'Balanced approach for growth'
      }
    }
  }

  const getDesignRecommendations = (data: MVPArchitectureRequest) => {
    const style = data.designPreference
    const designMap: Record<string, any> = {
      'modern-minimal': {
        colors: 'Monochrome with accent color',
        typography: 'Sans-serif, clean fonts',
        layout: 'Plenty of whitespace, grid-based'
      },
      'professional-corporate': {
        colors: 'Blue/gray palette, trustworthy',
        typography: 'Professional serif/sans mix',
        layout: 'Structured, formal sections'
      },
      'creative-bold': {
        colors: 'Vibrant, contrasting colors',
        typography: 'Custom fonts, varied sizes',
        layout: 'Asymmetrical, dynamic'
      },
      'clean-simple': {
        colors: 'Soft, muted palette',
        typography: 'Readable, friendly fonts',
        layout: 'Clear hierarchy, centered'
      },
      'tech-innovative': {
        colors: 'Dark theme with neon accents',
        typography: 'Modern, tech-inspired fonts',
        layout: 'Futuristic, interactive elements'
      }
    }
    return designMap[style] || designMap['clean-simple']
  }

  const getTimelineBreakdown = (data: MVPArchitectureRequest) => {
    const timeline = data.timeline
    const phases = {
      'asap': ['Design: 2-3 days', 'Development: 3-4 days', 'Testing: 1 day'],
      '1-week': ['Design: 2 days', 'Development: 4 days', 'Testing: 1 day'],
      '2-weeks': ['Design: 3-4 days', 'Development: 7-8 days', 'Testing: 2-3 days'],
      '1-month': ['Discovery: 3-5 days', 'Design: 7-10 days', 'Development: 14-18 days', 'Testing: 3-5 days'],
      'flexible': ['Discovery: 1 week', 'Design: 2 weeks', 'Development: 3-4 weeks', 'Testing: 1 week']
    }
    return phases[timeline as keyof typeof phases] || phases['flexible']
  }

  const getNextSteps = (data: MVPArchitectureRequest) => {
    return [
      'Review and approve the proposed architecture',
      'Finalize design mockups and wireframes',
      'Set up development environment and repositories',
      'Begin with landing page development',
      'Implement core features iteratively',
      'Conduct user testing and feedback collection',
      'Deploy MVP and monitor performance'
    ]
  }

  if (!requestData) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <Card className="max-w-md">
          <CardContent className="pt-6">
            <p className="text-center text-slate-600 mb-4">
              No architecture request found. Please complete the form first.
            </p>
            <Button asChild className="w-full">
              <Link href="/architect">Start Architecture Request</Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    )
  }

  const recommendations = getRecommendations(requestData)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">PRO</Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-slate-300">Home</Link>
              <Link href="/architect" className="hover:text-slate-300">Services</Link>
              <Link href="/results" className="hover:text-slate-300 text-slate-300">About</Link>
              <Link href="/" className="hover:text-slate-300">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              Your MVP Architecture Plan
            </h1>
            <p className="text-lg text-slate-600">
              Based on your requirements, here's your customized 3-page MVP prototype architecture
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Project Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">Project Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Purpose</h4>
                  <p className="text-slate-600 text-sm">{requestData.purpose}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Target Audience</h4>
                  <p className="text-slate-600 text-sm">{requestData.targetAudience}</p>
                </div>
                <div>
                  <h4 className="font-semibold text-slate-700 mb-2">Key Features</h4>
                  <p className="text-slate-600 text-sm">{requestData.keyFeatures}</p>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">{requestData.designPreference}</Badge>
                  <Badge variant="outline">{requestData.timeline}</Badge>
                  <Badge variant="outline">{requestData.budget}</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Technical Stack */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">Recommended Tech Stack</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(recommendations.technicalStack).map(([key, value]) => (
                  key !== 'rationale' && (
                    <div key={key} className="flex justify-between">
                      <span className="font-medium text-slate-700 capitalize">
                        {key.replace(/([A-Z])/g, ' $1')}:
                      </span>
                      <span className="text-slate-600">{value}</span>
                    </div>
                  )
                ))}
                <Separator />
                <p className="text-sm text-slate-500 italic">
                  {recommendations.technicalStack.rationale}
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Page Structure */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-slate-800">3-Page MVP Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {recommendations.pageStructure.map((page, index) => (
                  <div key={index} className="border rounded-lg p-4">
                    <h4 className="font-semibold text-slate-800 mb-2">
                      {index + 1}. {page.page}
                    </h4>
                    <p className="text-sm text-slate-600 mb-3">{page.purpose}</p>
                    <ul className="space-y-1">
                      {page.elements.map((element, idx) => (
                        <li key={idx} className="text-sm text-slate-500 flex items-center">
                          <span className="w-1 h-1 bg-slate-400 rounded-full mr-2"></span>
                          {element}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8">
            {/* Design Direction */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">Design Direction</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {Object.entries(recommendations.designDirection).map(([key, value]) => (
                  <div key={key}>
                    <h4 className="font-medium text-slate-700 capitalize mb-1">
                      {key}:
                    </h4>
                    <p className="text-slate-600 text-sm">{value}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Timeline Breakdown */}
            <Card>
              <CardHeader>
                <CardTitle className="text-slate-800">Development Timeline</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {recommendations.timeline.map((phase, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <span className="w-6 h-6 bg-slate-100 rounded-full flex items-center justify-center text-xs font-medium mr-3">
                        {index + 1}
                      </span>
                      <span className="text-slate-600">{phase}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Next Steps */}
          <Card className="mt-8">
            <CardHeader>
              <CardTitle className="text-slate-800">Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {recommendations.nextSteps.map((step, index) => (
                  <li key={index} className="flex items-start">
                    <span className="w-6 h-6 bg-slate-800 text-white rounded-full flex items-center justify-center text-xs font-medium mr-3 mt-0.5">
                      {index + 1}
                    </span>
                    <span className="text-slate-600">{step}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          {/* Actions */}
          <div className="text-center mt-8 space-x-4">
            <Button asChild variant="outline">
              <Link href="/architect">Modify Request</Link>
            </Button>
            <Button className="bg-slate-800 hover:bg-slate-700">
              Download Architecture Plan
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}