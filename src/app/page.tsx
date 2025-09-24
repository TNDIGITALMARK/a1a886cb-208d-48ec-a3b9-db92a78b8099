import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const dynamic = 'force-dynamic'

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-slate-800 text-white">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="text-xl font-bold">PRO</div>
            <div className="hidden md:flex space-x-6">
              <Link href="/" className="hover:text-slate-300">Home</Link>
              <Link href="/architect" className="hover:text-slate-300">Services</Link>
              <Link href="/results" className="hover:text-slate-300">About</Link>
              <Link href="/" className="hover:text-slate-300">Contact</Link>
            </div>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-slate-50 py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="lg:w-1/2 mb-8 lg:mb-0">
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-800 mb-6">
                ELEVATE YOUR<br />
                DIGITAL PRESENCE
              </h1>
              <p className="text-lg text-slate-600 mb-8 max-w-md">
                Professional solutions for a connected world
              </p>
              <Button asChild size="lg" className="bg-slate-800 hover:bg-slate-700">
                <Link href="/architect">GET STARTED</Link>
              </Button>
            </div>
            <div className="lg:w-1/2 flex justify-center">
              <div className="w-80 h-48 bg-slate-200 rounded-lg flex items-center justify-center">
                <div className="w-64 h-32 bg-slate-800 rounded-lg flex items-center justify-center">
                  <div className="w-16 h-16 border-2 border-slate-400 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-slate-800 mb-8">OUR APPROACH</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-slate-300 rounded"></div>
              </div>
              <h3 className="font-semibold text-slate-800">STRATEGY</h3>
              <p className="text-sm text-slate-600">Custom architecture planning</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="w-8 h-8 bg-slate-300 rounded"></div>
              </div>
              <h3 className="font-semibold text-slate-800">LAUNCH</h3>
              <p className="text-sm text-slate-600">Rapid MVP deployment</p>
            </div>
          </div>

          {/* Featured Services */}
          <h2 className="text-2xl font-bold text-slate-800 mb-8">FEATURED SERVICES</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-slate-300 rounded"></div>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">WEB DESIGN</h3>
              <p className="text-sm text-slate-600 mb-4">Create professional web presence</p>
              <Button variant="outline" size="sm">LEARN MORE</Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-slate-300 rounded"></div>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">MOBILE APPS</h3>
              <p className="text-sm text-slate-600 mb-4">Native and cross-platform solutions</p>
              <Button variant="outline" size="sm">LEARN MORE</Button>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <div className="w-12 h-12 mb-4 bg-slate-100 rounded-lg flex items-center justify-center">
                <div className="w-6 h-6 bg-slate-300 rounded"></div>
              </div>
              <h3 className="font-semibold text-slate-800 mb-2">SEO OPTIMIZATION</h3>
              <p className="text-sm text-slate-600 mb-4">Improve search visibility</p>
              <Button variant="outline" size="sm">LEARN MORE</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-slate-800 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-4">READY TO TRANSFORM AN BUSINESS?</h2>
          <p className="mb-8">SPEAK WITH AN EXPERT</p>
          <div className="flex flex-wrap justify-center gap-8 text-sm">
            <div>
              <h4 className="font-semibold">Company</h4>
              <p className="text-slate-300">About</p>
            </div>
            <div>
              <h4 className="font-semibold">Blog</h4>
              <p className="text-slate-300">Updates</p>
            </div>
            <div>
              <h4 className="font-semibold">Resources</h4>
              <p className="text-slate-300">FAQ</p>
            </div>
            <div>
              <h4 className="font-semibold">FAQ</h4>
              <p className="text-slate-300">Support</p>
            </div>
            <div>
              <h4 className="font-semibold">Contact Us</h4>
              <p className="text-slate-300">Get in touch</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}