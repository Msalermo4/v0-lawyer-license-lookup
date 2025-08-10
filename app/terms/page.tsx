import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export const metadata = {
  title: "Terms of Service - LEXII Puerto Rico Legal Directory",
  description: "Terms of service for LEXII, Puerto Rico's legal professional directory.",
}

export default function TermsPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-gray-600">Last updated: January 2024</p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                By accessing and using LEXII, you accept and agree to be bound by the terms and provision of this
                agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Use of Service</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                LEXII provides a directory service for finding and verifying attorney information in Puerto Rico. You
                agree to use this service only for lawful purposes and in accordance with these terms.
              </p>
              <p>You may not:</p>
              <ul>
                <li>Use the service for any unlawful purpose</li>
                <li>Attempt to gain unauthorized access to our systems</li>
                <li>Interfere with or disrupt the service</li>
                <li>Use automated systems to access the service without permission</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Accuracy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                While we strive to provide accurate and up-to-date information, LEXII makes no warranties about the
                completeness, reliability, or accuracy of the information provided. Users should always verify attorney
                credentials directly with the Puerto Rico Bar Association.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Disclaimer</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                LEXII is an information service only and does not provide legal advice or attorney recommendations. The
                inclusion of an attorney in our directory does not constitute an endorsement of their services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                LEXII shall not be liable for any direct, indirect, incidental, special, or consequential damages
                resulting from the use or inability to use our service.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                We reserve the right to modify these terms at any time. Changes will be effective immediately upon
                posting to the website.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700">Questions about these Terms of Service should be sent to us at:</p>
              <p className="text-gray-700 mt-2">
                Email: legal@lexii.pr
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
