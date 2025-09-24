'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export default function MVPArchitect() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    purpose: '',
    targetAudience: '',
    keyFeatures: '',
    designPreference: '',
    timeline: '',
    budget: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Store form data in localStorage for the results page
    localStorage.setItem('mvpArchitectureRequest', JSON.stringify(formData))

    // Navigate to results page
    router.push('/results')
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-xl font-bold">PRO</Link>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-slate-300">Home</Link>
              <Link href="/architect" className="hover:text-slate-300 text-slate-300">Services</Link>
              <Link href="/results" className="hover:text-slate-300">About</Link>
              <Link href="/" className="hover:text-slate-300">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-slate-800 mb-4">
              MVP Architecture Request
            </h1>
            <p className="text-lg text-slate-600">
              Let's design your 3-page MVP prototype with a focused approach
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-slate-800">Project Requirements</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Purpose */}
                <div>
                  <Label htmlFor="purpose" className="text-base font-medium text-slate-700">
                    What is the primary purpose of your website?
                  </Label>
                  <Textarea
                    id="purpose"
                    placeholder="Describe the main goal and core value proposition of your website..."
                    value={formData.purpose}
                    onChange={(e) => handleInputChange('purpose', e.target.value)}
                    className="mt-2"
                    rows={3}
                    required
                  />
                </div>

                {/* Target Audience */}
                <div>
                  <Label htmlFor="targetAudience" className="text-base font-medium text-slate-700">
                    Who is your target audience?
                  </Label>
                  <Textarea
                    id="targetAudience"
                    placeholder="Describe your ideal users, their demographics, and pain points..."
                    value={formData.targetAudience}
                    onChange={(e) => handleInputChange('targetAudience', e.target.value)}
                    className="mt-2"
                    rows={3}
                    required
                  />
                </div>

                {/* Key Features */}
                <div>
                  <Label htmlFor="keyFeatures" className="text-base font-medium text-slate-700">
                    What are the essential features for your MVP?
                  </Label>
                  <Textarea
                    id="keyFeatures"
                    placeholder="List the must-have features that deliver your core value proposition..."
                    value={formData.keyFeatures}
                    onChange={(e) => handleInputChange('keyFeatures', e.target.value)}
                    className="mt-2"
                    rows={4}
                    required
                  />
                </div>

                {/* Design Preferences */}
                <div>
                  <Label htmlFor="designPreference" className="text-base font-medium text-slate-700">
                    Design Preference
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('designPreference', value)} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your preferred design style" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="modern-minimal">Modern & Minimal</SelectItem>
                      <SelectItem value="professional-corporate">Professional & Corporate</SelectItem>
                      <SelectItem value="creative-bold">Creative & Bold</SelectItem>
                      <SelectItem value="clean-simple">Clean & Simple</SelectItem>
                      <SelectItem value="tech-innovative">Tech & Innovative</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Timeline */}
                <div>
                  <Label htmlFor="timeline" className="text-base font-medium text-slate-700">
                    Project Timeline
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('timeline', value)} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="When do you need this completed?" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="asap">ASAP (Rush)</SelectItem>
                      <SelectItem value="1-week">Within 1 Week</SelectItem>
                      <SelectItem value="2-weeks">Within 2 Weeks</SelectItem>
                      <SelectItem value="1-month">Within 1 Month</SelectItem>
                      <SelectItem value="flexible">Flexible Timeline</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Budget Range */}
                <div>
                  <Label htmlFor="budget" className="text-base font-medium text-slate-700">
                    Budget Range
                  </Label>
                  <Select onValueChange={(value) => handleInputChange('budget', value)} required>
                    <SelectTrigger className="mt-2">
                      <SelectValue placeholder="Select your budget range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="under-5k">Under $5,000</SelectItem>
                      <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                      <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                      <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                      <SelectItem value="50k-plus">$50,000+</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="pt-6">
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-slate-800 hover:bg-slate-700"
                  >
                    Generate MVP Architecture
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          <div className="mt-8 text-center">
            <p className="text-sm text-slate-500">
              Our MVP architecture approach focuses on rapid validation through a structured 3-page prototype that embodies your core value proposition.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}