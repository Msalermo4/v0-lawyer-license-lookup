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
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"

const lawyerData = {
  1: {
    id: 1,
    name: "Sarah Johnson",
    barNumber: "CA12345",
    state: "California",
    status: "Active",
    licenseDate: "2015-06-15",
    practiceAreas: ["Corporate Law", "Securities", "Mergers & Acquisitions"],
    firm: "Johnson & Associates",
    address: "123 Financial District, San Francisco, CA 94111",
    phone: "(415) 555-0123",
    email: "sarah.johnson@johnsonlaw.com",
    website: "www.johnsonlaw.com",
    disciplinaryActions: 0,
    ethicalComplaints: 0,
    lastUpdated: "2024-01-15",
    education: [
      { school: "Stanford Law School", degree: "J.D.", year: "2015" },
      { school: "UC Berkeley", degree: "B.A. Economics", year: "2012" },
    ],
    admissions: [
      { jurisdiction: "California State Bar", date: "2015-06-15" },
      { jurisdiction: "U.S. District Court, Northern District of California", date: "2016-01-10" },
    ],
    disciplinaryHistory: [],
    ethicalComplaintHistory: [],
  },
  2: {
    id: 2,
    name: "Michael Chen",
    barNumber: "NY67890",
    state: "New York",
    status: "Suspended",
    licenseDate: "2010-03-22",
    suspensionDate: "2023-08-15",
    practiceAreas: ["Criminal Defense", "DUI", "Traffic Violations"],
    firm: "Chen Legal Group",
    address: "456 Broadway, New York, NY 10013",
    phone: "(212) 555-0456",
    email: "michael.chen@chenlegal.com",
    disciplinaryActions: 2,
    ethicalComplaints: 3,
    lastUpdated: "2024-01-10",
    reason: "Failure to maintain client trust account",
    education: [
      { school: "NYU School of Law", degree: "J.D.", year: "2010" },
      { school: "Columbia University", degree: "B.A. Political Science", year: "2007" },
    ],
    admissions: [
      { jurisdiction: "New York State Bar", date: "2010-03-22" },
      { jurisdiction: "U.S. District Court, Southern District of New York", date: "2011-05-15" },
    ],
    disciplinaryHistory: [
      {
        date: "2023-08-15",
        action: "Suspension",
        duration: "6 months",
        reason: "Failure to maintain client trust account in accordance with professional conduct rules",
        status: "Active",
      },
      {
        date: "2021-11-30",
        action: "Public Censure",
        reason: "Inadequate client communication regarding case status",
        status: "Completed",
      },
    ],
    ethicalComplaintHistory: [
      {
        date: "2023-06-10",
        complaint: "Mishandling of client funds",
        status: "Substantiated",
        resolution: "Led to suspension",
      },
      {
        date: "2022-03-15",
        complaint: "Failure to communicate with client",
        status: "Substantiated",
        resolution: "Written warning",
      },
      {
        date: "2021-09-20",
        complaint: "Missed court appearance",
        status: "Substantiated",
        resolution: "Public censure",
      },
    ],
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

export default function LawyerProfile() {
  const params = useParams()
  const lawyer = lawyerData[params.id as keyof typeof lawyerData]

  if (!lawyer) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Attorney Not Found</h1>
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
      <header className="bg-white border-b border-gray-200">
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
                <h1 className="text-2xl font-bold text-gray-900">LEXII</h1>
                <p className="text-sm text-gray-600">Legal Professional Directory</p>
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
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{lawyer.name}</h1>
                <p className="text-lg text-gray-600 mb-4">{lawyer.firm}</p>
                <div className="flex items-center gap-4 text-sm text-gray-600">
                  <span>Bar #: {lawyer.barNumber}</span>
                  <span>•</span>
                  <span>{lawyer.state}</span>
                  <span>•</span>
                  <span>Licensed: {new Date(lawyer.licenseDate).toLocaleDateString()}</span>
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
                    <span>{lawyer.phone}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-gray-400" />
                    <span>{lawyer.email}</span>
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
                <CardTitle>Disciplinary Summary</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-600 mb-2">{lawyer.disciplinaryActions}</div>
                    <p className="text-sm text-gray-600">Disciplinary Actions</p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-orange-600 mb-2">{lawyer.ethicalComplaints}</div>
                    <p className="text-sm text-gray-600">Ethical Complaints</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Disciplinary History */}
            {lawyer.disciplinaryHistory && lawyer.disciplinaryHistory.length > 0 && (
              <Card>
                <CardHeader>
                  <CardTitle>Disciplinary History</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {lawyer.disciplinaryHistory.map((action, index) => (
                      <div key={index} className="border-l-4 border-red-500 pl-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-semibold text-red-800">{action.action}</h4>
                          <Badge variant={action.status === "Active" ? "destructive" : "secondary"}>
                            {action.status}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-600 mb-1">
                          <Calendar className="w-4 h-4 inline mr-1" />
                          {new Date(action.date).toLocaleDateString()}
                          {action.duration && ` • Duration: ${action.duration}`}
                        </p>
                        <p className="text-sm text-gray-800">{action.reason}</p>
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
                          <Badge variant={complaint.status === "Substantiated" ? "destructive" : "secondary"}>
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
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {lawyer.education.map((edu, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900">{edu.degree}</p>
                      <p className="text-sm text-gray-600">{edu.school}</p>
                      <p className="text-sm text-gray-500">{edu.year}</p>
                      {index < lawyer.education.length - 1 && <Separator className="mt-3" />}
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
                <div className="space-y-3">
                  {lawyer.admissions.map((admission, index) => (
                    <div key={index}>
                      <p className="font-medium text-gray-900">{admission.jurisdiction}</p>
                      <p className="text-sm text-gray-600">{new Date(admission.date).toLocaleDateString()}</p>
                      {index < lawyer.admissions.length - 1 && <Separator className="mt-3" />}
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
          </div>
        </div>
      </main>
    </div>
  )
}
