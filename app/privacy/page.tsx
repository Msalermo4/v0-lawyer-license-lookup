import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Privacy Policy - LEXII Puerto Rico Legal Directory",
  description: "Privacy policy for LEXII, Puerto Rico's legal professional directory.",
}

export default function PrivacyPage() {
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
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>LEXII collects and processes the following types of information:</p>
              <ul>
                <li>
                  <strong>Public Attorney Information:</strong> We collect publicly available information about licensed
                  attorneys from official sources including the Puerto Rico Bar Association and court records.
                </li>
                <li>
                  <strong>User Information:</strong> When you contact us or use our services, we may collect your name,
                  email address, and message content.
                </li>
                <li>
                  <strong>Usage Data:</strong> We collect information about how you use our website, including pages
                  visited and search queries.
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>We use the collected information for the following purposes:</p>
              <ul>
                <li>To provide accurate and up-to-date attorney directory services</li>
                <li>To respond to your inquiries and provide customer support</li>
                <li>To improve our website and services</li>
                <li>To ensure the accuracy and reliability of attorney information</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Sharing</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                LEXII does not sell, trade, or rent your personal information to third parties. We may share information
                in the following circumstances:
              </p>
              <ul>
                <li>When required by law or legal process</li>
                <li>To protect our rights, property, or safety</li>
                <li>With service providers who assist in operating our website</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Data Security</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We implement appropriate security measures to protect your information against unauthorized access,
                alteration, disclosure, or destruction. However, no method of transmission over the internet is 100%
                secure.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Your Rights</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>You have the right to:</p>
              <ul>
                <li>Access the personal information we have about you</li>
                <li>Request correction of inaccurate information</li>
                <li>Request deletion of your personal information</li>
                <li>Object to processing of your personal information</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">If you have questions about this Privacy Policy, please contact us at:</p>
              <p className="text-gray-700 mt-2">
                Email: privacy@lexii.pr
                <br />
                Address: San Juan, Puerto Rico
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
