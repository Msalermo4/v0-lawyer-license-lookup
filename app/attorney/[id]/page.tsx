"use client"

import { useParams } from "next/navigation"
import Link from "next/link"
import {
  ArrowLeft,
  AlertTriangle,
  CheckCircle,
  XCircle,
  Clock,
  Calendar,
  MapPin,
  Phone,
  Mail,
  ExternalLink,
  Globe,
  Award,
  BookOpen,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

const lawyerData = {
  1: {
    id: 1,
    name: "María Elena Rodríguez Santos",
    barNumber: "PR15234",
    state: "Puerto Rico",
    status: "Active",
    licenseDate: "2018-03-15",
    practiceAreas: [
      "Real Estate Law",
      "Property Development",
      "Commercial Real Estate",
      "Zoning Law",
      "Construction Law",
    ],
    firm: "Rodríguez Santos Law Firm",
    address: "1500 Ponce de León Ave, San Juan, PR 00909",
    phone: "(787) 555-0123",
    email: "maria.rodriguez@rslaw.pr",
    website: "www.rslaw.pr",
    disciplinaryActions: 0,
    ethicalComplaints: 0,
    lastUpdated: "2024-01-15",
    municipality: "San Juan",
    languages: ["Spanish", "English"],
    education: [
      { school: "University of Puerto Rico School of Law", degree: "J.D.", year: "2018" },
      { school: "Universidad de Puerto Rico", degree: "B.A. Business Administration", year: "2015" },
    ],
    admissions: [
      { jurisdiction: "Puerto Rico Bar Association", date: "2018-03-15" },
      { jurisdiction: "U.S. District Court for the District of Puerto Rico", date: "2018-06-20" },
    ],
    specializations: [
      "Residential Real Estate Transactions",
      "Commercial Property Development",
      "Real Estate Investment Trusts (REITs)",
      "Property Tax Appeals",
    ],
    awards: [
      "Rising Star in Real Estate Law - Puerto Rico Legal Awards 2023",
      "Outstanding Young Lawyer - San Juan Bar Association 2022",
    ],
    disciplinaryHistory: [],
    ethicalComplaintHistory: [],
    bio: "María Elena Rodríguez Santos is a dedicated real estate attorney with over 6 years of experience in Puerto Rico's dynamic property market. She specializes in complex commercial transactions and has helped facilitate over $50 million in real estate deals across the island.",
  },
  2: {
    id: 2,
    name: "Carlos Alberto Méndez Rivera",
    barNumber: "PR12890",
    state: "Puerto Rico",
    status: "Active",
    licenseDate: "2015-06-22",
    practiceAreas: ["Residential Real Estate", "Title Insurance", "Property Transactions", "Mortgage Law"],
    firm: "Méndez Rivera & Associates",
    address: "250 Calle Fortaleza, Old San Juan, PR 00901",
    phone: "(787) 555-0456",
    email: "carlos.mendez@mrlaw.pr",
    website: "www.mrlaw.pr",
    disciplinaryActions: 0,
    ethicalComplaints: 1,
    lastUpdated: "2024-01-20",
    municipality: "San Juan",
    languages: ["Spanish", "English"],
    education: [
      { school: "Inter American University School of Law", degree: "J.D.", year: "2015" },
      { school: "University of Puerto Rico", degree: "B.B.A. Finance", year: "2012" },
    ],
    admissions: [
      { jurisdiction: "Puerto Rico Bar Association", date: "2015-06-22" },
      { jurisdiction: "U.S. District Court for the District of Puerto Rico", date: "2015-09-15" },
    ],
    specializations: [
      "First-Time Homebuyer Programs",
      "FHA and VA Loan Closings",
      "Title Insurance Claims",
      "Residential Property Disputes",
    ],
    awards: ["Community Service Award - Old San Juan Chamber of Commerce 2021"],
    disciplinaryHistory: [],
    ethicalComplaintHistory: [
      {
        date: "2022-08-15",
        complaint: "Delayed response to client communications",
        status: "Resolved",
        resolution: "Implemented new client communication protocols",
      },
    ],
    bio: "Carlos Alberto Méndez Rivera has been serving Puerto Rico families in their real estate needs for nearly a decade. Based in historic Old San Juan, he has closed over 500 residential transactions and is known for his meticulous attention to detail.",
  },
}

const getStatusIcon = (status: string) => {
  switch (status) {
    case "Active":
      return <CheckCircle className="w-5 h-5 text-green-600" />
    case "Suspended":
      return <Clock className="w-5 h-5 text-yellow-600" />
    case "Revoked":
      return <XCircle className="w-5 h-5 text-red-600" />
    case "Probation":
      return <AlertTriangle className="w-5 h-5 text-orange-600" />
    default:
      return null
  }
}

const getStatusColor = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-800 border-green-200"
    case "Suspended":
      return "bg-yellow-100 text-yellow-800 border-yellow-200"
    case "Revoked":
      return "bg-red-100 text-red-800 border-red-200"
    case "Probation":
      return "bg-orange-100 text-orange-800 border-orange-200"
    default:
      return "bg-gray-100 text-gray-800 border-gray-200"
  }
}

export default function AttorneyProfile() {
  const params = useParams()
  const lawyer = lawyerData[params.id as keyof typeof lawyerData]

  if (!lawyer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Attorney Not Found</h1>
          <p className="text-gray-600 mb-6">The attorney profile you're looking for doesn't exist.</p>
          <Link href="/">
            <Button>Return to Directory</Button>
          </Link>
        </div>
      </div>
    )
  }

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

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Attorney Header */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 mb-8">
          <div className="p-8">
            <div className="flex justify-between items-start mb-6">
              <div className="flex-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{lawyer.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{lawyer.firm}</p>
                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {lawyer.municipality}, Puerto Rico
                  </span>
                  <span>Bar #: {lawyer.barNumber}</span>
                  <span>Licensed: {new Date(lawyer.licenseDate).toLocaleDateString()}</span>
                  <span>Experience: {new Date().getFullYear() - new Date(lawyer.licenseDate).getFullYear()} years</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {lawyer.languages.map((language, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      <Globe className="w-3 h-3 mr-1" />
                      {language}
                    </Badge>
                  ))}
                </div>
              </div>
              <div className="text-right">
                <div className="flex items-center gap-2 mb-2">
                  {getStatusIcon(lawyer.status)}
                  <Badge className={`${getStatusColor(lawyer.status)} text-lg px-3 py-1`}>{lawyer.status}</Badge>
                </div>
                <p className="text-sm text-gray-500">
                  Last Updated: {new Date(lawyer.lastUpdated).toLocaleDateString()}
                </p>
              </div>
            </div>

            {(lawyer.status === "Suspended" || lawyer.status === "Revoked") && (
              <Alert className="mb-6 border-red-200 bg-red-50">
                <AlertTriangle className="h-4 w-4 text-red-600" />
                <AlertDescription className="text-red-800">
                  <strong>Warning:</strong> This attorney is currently {lawyer.status.toLowerCase()} and not authorized
                  to practice law.
                  {lawyer.reason && ` Reason: ${lawyer.reason}`}
                </AlertDescription>
              </Alert>
            )}

            {lawyer.bio && (
              <div className="mb-6">
                <h3 className="font-semibold text-gray-900 mb-2">About</h3>
                <p className="text-gray-700 leading-relaxed">{lawyer.bio}</p>
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Contact Information</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-gray-400" />
                    <span>{lawyer.address}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gray-400" />
                    <a href={`tel:${lawyer.phone}`} className="text-blue-600 hover:underline">
                      {lawyer.phone}
                    </a>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <a href={`mailto:${lawyer.email}`} className="text-blue-600 hover:underline">
                      {lawyer.email}
                    </a>
                  </div>
                  {lawyer.website && (
                    <div className="flex items-center gap-2">
                      <ExternalLink className="w-4 h-4 text-gray-400" />
                      <a
                        href={`https://${lawyer.website}`}
                        className="text-blue-600 hover:underline"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {lawyer.website}
                      </a>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <h3 className="font-semibold text-gray-900 mb-3">Practice Areas</h3>
                <div className="flex flex-wrap gap-2">
                  {lawyer.practiceAreas.map((area, index) => (
                    <Badge key={index} variant="secondary">
                      {area}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Disciplinary Summary */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="w-5 h-5" />
                  Professional Standing
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div
                      className={`text-3xl font-bold mb-2 ${lawyer.disciplinaryActions > 0 ? "text-red-600" : "text-green-600"}`}
                    >
                      {lawyer.disciplinaryActions}
                    </div>
                    <p className="text-sm text-gray-600">Disciplinary Actions</p>
                  </div>
                  <div className="text-center">
                    <div
                      className={`text-3xl font-bold mb-2 ${lawyer.ethicalComplaints > 0 ? "text-orange-600" : "text-green-600"}`}
                    >
                      {lawyer.ethicalComplaints}
                    </div>
                    <p className="text-sm text-gray-600">Ethical Complaints</p>
                  </div>
                </div>
                {lawyer.disciplinaryActions === 0 && lawyer.ethicalComplaints <= 1 && (
                  <div className="mt-4 p-3 bg-green-50 border border-green-200 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">✓ Good Standing</p>
                    <p className="text-xs text-green-700">This attorney maintains good professional standing.</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Specializations */}
            {lawyer.specializations && lawyer.specializations.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Specializations</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3">
                    {lawyer.specializations.map((spec, index) => (
                      <div key={index} className="flex items-center gap-2 p-2 bg-blue-50 rounded-lg">
                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                        <span className="text-sm font-medium text-blue-900">{spec}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Awards & Recognition */}
            {lawyer.awards && lawyer.awards.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    Awards & Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {lawyer.awards.map((award, index) => (
                      <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-yellow-50 border border-yellow-200 rounded-lg"
                      >
                        <Award className="w-5 h-5 text-yellow-600 mt-0.5" />
                        <span className="text-sm font-medium text-yellow-900">{award}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Ethical Complaints */}
            {lawyer.ethicalComplaintHistory && lawyer.ethicalComplaintHistory.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Ethical Complaint History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {lawyer.ethicalComplaintHistory.map((complaint, index) => (
                      <div key={index} className="border-l-4 border-orange-500 pl-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-orange-800">{complaint.complaint}</h4>
                          <Badge variant={complaint.status === "Resolved" ? "secondary" : "destructive"}>
                            {complaint.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          {new Date(complaint.date).toLocaleDateString()}
                        </p>
                        <p className="text-sm text-gray-800">{complaint.resolution}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lawyer.education.map((edu, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900">{edu.degree}</p>
                      <p className="text-sm text-gray-600">{edu.school}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                      {index < lawyer.education.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bar Admissions */}
            <Card>
              <CardHeader>
                <CardTitle>Bar Admissions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {lawyer.admissions.map((admission, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900">{admission.jurisdiction}</p>
                      <p className="text-sm text-gray-600">{new Date(admission.date).toLocaleDateString()}</p>
                      {index < lawyer.admissions.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Years in Practice:</span>
                    <span className="font-medium">
                      {new Date().getFullYear() - new Date(lawyer.licenseDate).getFullYear()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Practice Areas:</span>
                    <span className="font-medium">{lawyer.practiceAreas.length}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Languages:</span>
                    <span className="font-medium">{lawyer.languages.join(", ")}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Disciplinary Actions:</span>
                    <span
                      className={`font-medium ${lawyer.disciplinaryActions > 0 ? "text-red-600" : "text-green-600"}`}
                    >
                      {lawyer.disciplinaryActions}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Ethical Complaints:</span>
                    <span
                      className={`font-medium ${lawyer.ethicalComplaints > 0 ? "text-orange-600" : "text-green-600"}`}
                    >
                      {lawyer.ethicalComplaints}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Card */}
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle className="text-blue-900">Contact This Attorney</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href={`tel:${lawyer.phone}`}>
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <a href={`mailto:${lawyer.email}`}>
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </Button>
                  {lawyer.website && (
                    <Button variant="outline" className="w-full bg-transparent" asChild>
                      <a href={`https://${lawyer.website}`} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Visit Website
                      </a>
                    </Button>
                  )}
                </div>
                <p className="text-xs text-gray-600 mt-4">
                  Always verify attorney credentials before engaging legal services.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}
