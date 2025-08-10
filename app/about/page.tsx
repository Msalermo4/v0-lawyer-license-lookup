import Link from "next/link"
import { ArrowLeft, Shield, Search, Database, Users, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "About LEXII - Puerto Rico Legal Directory",
  description:
    "Learn about LEXII, Puerto Rico's comprehensive legal professional directory for real estate attorneys and lawyers.",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center gap-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  Back to Directory
                </Button>
              </Link>
              <div>
                <Link href="/">
                  <h1 className="text-2xl font-bold text-blue-900">LEXII</h1>
                  <p className="text-sm text-gray-600">Puerto Rico Legal Directory</p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About LEXII</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Puerto Rico's most comprehensive and trusted legal professional directory, specializing in real estate
            attorneys and legal services.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Our Mission</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              LEXII was created to bridge the information gap in Puerto Rico's legal market. We believe that finding
              qualified, trustworthy legal representation should be transparent, accessible, and informed by
              comprehensive professional data.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Our platform empowers individuals, businesses, and organizations to make informed decisions when selecting
              legal counsel by providing detailed information about attorney credentials, disciplinary history, and
              professional standing.
            </p>
          </CardContent>
        </Card>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Database className="w-5 h-5 text-blue-600" />
                Comprehensive Database
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Our database includes detailed profiles of licensed attorneys across Puerto Rico, with real-time updates
                on license status, disciplinary actions, and professional credentials.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Verified Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                All attorney information is cross-referenced with official Puerto Rico Bar Association records and other
                authoritative sources to ensure accuracy and reliability.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Search className="w-5 h-5 text-purple-600" />
                Advanced Search
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                Find attorneys by name, practice area, location, or specialization. Our advanced filtering system helps
                you locate the right legal professional for your needs.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="w-5 h-5 text-orange-600" />
                Public Service
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">
                LEXII is committed to serving the Puerto Rico community by promoting transparency in the legal
                profession and helping citizens access quality legal representation.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* What We Cover */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">What We Cover</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Attorney Information</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    License status and bar numbers
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Practice areas and specializations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Contact information and firm details
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Education and bar admissions
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Professional Standing</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Disciplinary action history
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Ethical complaint records
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Professional awards and recognition
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    Years of experience
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Data Sources */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl">Our Data Sources</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 leading-relaxed mb-4">
              LEXII aggregates information from multiple authoritative sources to provide the most comprehensive and
              up-to-date attorney profiles available:
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>• Puerto Rico Bar Association (Colegio de Abogados de Puerto Rico)</li>
              <li>• U.S. District Court for the District of Puerto Rico</li>
              <li>• Puerto Rico Supreme Court Attorney Registration</li>
              <li>• Professional licensing boards and regulatory agencies</li>
              <li>• Public disciplinary records and court filings</li>
            </ul>
          </CardContent>
        </Card>

        {/* Disclaimer */}
        <Card className="bg-yellow-50 border-yellow-200">
          <CardHeader>
            <CardTitle className="text-yellow-800">Important Disclaimer</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-yellow-800 text-sm leading-relaxed">
              LEXII provides information for research and reference purposes only. While we strive for accuracy, users
              should always verify attorney credentials and standing directly with the Puerto Rico Bar Association
              before engaging legal services. The information provided does not constitute legal advice or attorney
              recommendations.
            </p>
          </CardContent>
        </Card>

        {/* CTA */}
        <div className="text-center mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Find Your Attorney?</h2>
          <p className="text-gray-600 mb-6">Search our comprehensive directory of Puerto Rico real estate attorneys.</p>
          <Link href="/">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Search Directory
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}
