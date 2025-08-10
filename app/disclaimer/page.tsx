import Link from "next/link"
import { ArrowLeft, AlertTriangle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"

export const metadata = {
  title: "Disclaimer - LEXII Puerto Rico Legal Directory",
  description: "Important disclaimer and legal notices for LEXII Puerto Rico legal directory.",
}

export default function DisclaimerPage() {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Disclaimer</h1>
          <p className="text-gray-600">Important legal notices and disclaimers</p>
        </div>

        <Alert className="mb-8 border-yellow-200 bg-yellow-50">
          <AlertTriangle className="h-4 w-4 text-yellow-600" />
          <AlertDescription className="text-yellow-800">
            <strong>Important:</strong> Please read this disclaimer carefully before using LEXII services.
          </AlertDescription>
        </Alert>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>No Legal Advice</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                LEXII is an information directory service only. We do not provide legal advice, legal opinions, or legal
                services of any kind. The information provided on this website is for informational purposes only and
                should not be construed as legal advice.
              </p>
              <p>
                If you need legal advice, please consult with a qualified attorney licensed to practice law in Puerto
                Rico.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>No Attorney-Client Relationship</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Use of this website does not create an attorney-client relationship between you and LEXII or any
                attorney listed in our directory. An attorney-client relationship is only formed when you formally
                engage an attorney's services through a written agreement.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Information Accuracy</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                While we make every effort to ensure the accuracy and timeliness of the information in our directory, we
                cannot guarantee that all information is current, complete, or error-free. Attorney information,
                including license status and disciplinary records, can change frequently.
              </p>
              <p>
                <strong>
                  Always verify attorney credentials directly with the Puerto Rico Bar Association before engaging legal
                  services.
                </strong>
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>No Endorsement</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                The inclusion of an attorney in our directory does not constitute an endorsement, recommendation, or
                guarantee of their services, qualifications, or competence. LEXII does not evaluate the quality of legal
                services provided by listed attorneys.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Information</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                Our directory contains information obtained from third-party sources, including government agencies and
                professional organizations. We are not responsible for the accuracy of information provided by these
                sources.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>
                LEXII, its owners, employees, and affiliates shall not be liable for any damages arising from the use of
                this website or reliance on the information contained herein. This includes, but is not limited to,
                direct, indirect, incidental, punitive, and consequential damages.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Professional Responsibility</CardTitle>
            </CardHeader>
            <CardContent className="prose prose-gray max-w-none">
              <p>It is your responsibility to:</p>
              <ul>
                <li>Verify attorney credentials and license status</li>
                <li>Research attorney qualifications and experience</li>
                <li>Check references and reviews</li>
                <li>Ensure the attorney is authorized to practice in your jurisdiction</li>
                <li>Understand fee structures and engagement terms</li>
              </ul>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Reporting Errors</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 mb-4">
                If you find incorrect or outdated information in our directory, please contact us immediately so we can
                investigate and make necessary corrections.
              </p>
              <Link href="/contact">
                <Button variant="outline">Report an Error</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
