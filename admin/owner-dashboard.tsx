"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import {
  Crown,
  Shield,
  Database,
  Users,
  Settings,
  Download,
  Eye,
  Lock,
  Key,
  DollarSign,
  Globe,
  Smartphone,
  AlertTriangle,
} from "lucide-react"

export default function OwnerDashboard() {
  const [stats, setStats] = useState({
    revenue: 0,
    users: 0,
    lawyers: 1247,
    uptime: 99.9,
    dailyVisits: 2456,
    monthlyGrowth: 23.5,
  })

  const [showSensitiveData, setShowSensitiveData] = useState(false)

  useEffect(() => {
    // Simulate real-time data updates
    const interval = setInterval(() => {
      setStats((prev) => ({
        ...prev,
        revenue: prev.revenue + Math.random() * 10,
        users: prev.users + Math.floor(Math.random() * 5),
        dailyVisits: prev.dailyVisits + Math.floor(Math.random() * 20),
      }))
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Owner Header */}
        <div className="mb-8 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-6 text-white">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <Crown className="w-8 h-8" />
              <div>
                <h1 className="text-3xl font-bold">HeyLEXII Owner Dashboard</h1>
                <p className="text-purple-100">Welcome back, Alvaro! Your platform is performing excellently.</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-sm text-purple-100">Domain</div>
              <div className="text-xl font-bold">heylexii.com</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">${stats.revenue.toFixed(0)}</div>
              <div className="text-sm text-purple-100">Monthly Revenue</div>
              <div className="text-xs text-green-200">+{stats.monthlyGrowth}% this month</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">{stats.users.toLocaleString()}</div>
              <div className="text-sm text-purple-100">Active Users</div>
              <div className="text-xs text-green-200">+156 today</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">{stats.uptime}%</div>
              <div className="text-sm text-purple-100">Uptime</div>
              <div className="text-xs text-green-200">99.9% SLA met</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">{stats.lawyers}</div>
              <div className="text-sm text-purple-100">Lawyers Listed</div>
              <div className="text-xs text-blue-200">+23 this week</div>
            </div>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Control Panel */}
          <div className="lg:col-span-2 space-y-6">
            {/* System Status */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Shield className="w-5 h-5 text-green-600" />
                  System Status & Control
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-green-600" />
                      <span className="font-medium">Website Status</span>
                    </div>
                    <Badge className="bg-green-100 text-green-800">Online</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Database className="w-4 h-4 text-blue-600" />
                      <span className="font-medium">Data Sync</span>
                    </div>
                    <Badge className="bg-blue-100 text-blue-800">Active</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-purple-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Smartphone className="w-4 h-4 text-purple-600" />
                      <span className="font-medium">Mobile App</span>
                    </div>
                    <Badge className="bg-purple-100 text-purple-800">Live</Badge>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-orange-600" />
                      <span className="font-medium">Security</span>
                    </div>
                    <Badge className="bg-orange-100 text-orange-800">Protected</Badge>
                  </div>
                </div>

                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 mb-4">
                  <div className="flex items-center gap-2 text-yellow-800">
                    <AlertTriangle className="w-4 h-4" />
                    <span className="font-medium">Platform Launch Status</span>
                  </div>
                  <div className="text-sm text-yellow-700 mt-1">
                    Your platform is being deployed. Estimated completion: 7-14 days
                  </div>
                  <div className="w-full bg-yellow-200 rounded-full h-2 mt-2">
                    <div className="bg-yellow-600 h-2 rounded-full" style={{ width: "15%" }}></div>
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button className="bg-red-600 hover:bg-red-700">
                    <Lock className="w-4 h-4 mr-2" />
                    Emergency Stop
                  </Button>
                  <Button variant="outline">
                    <Settings className="w-4 h-4 mr-2" />
                    System Settings
                  </Button>
                  <Button variant="outline">
                    <Download className="w-4 h-4 mr-2" />
                    Export All Data
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Financial Overview */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-green-600" />
                  Financial Performance
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">${stats.revenue.toFixed(0)}</div>
                    <div className="text-sm text-gray-600">This Month</div>
                    <div className="text-xs text-green-600">+23.5%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">$8,234</div>
                    <div className="text-sm text-gray-600">Last 3 Months</div>
                    <div className="text-xs text-blue-600">+45.2%</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">$28,456</div>
                    <div className="text-sm text-gray-600">Year to Date</div>
                    <div className="text-xs text-purple-600">+67.8%</div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>Premium Lawyer Listings</span>
                    <span className="font-semibold">$1,890</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>Featured Placements</span>
                    <span className="font-semibold">$657</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>Review Verification</span>
                    <span className="font-semibold">$200</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                    <span>API Licensing</span>
                    <span className="font-semibold">$100</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-green-50 rounded-lg">
                  <div className="text-sm text-green-700">
                    <strong>Revenue Projection:</strong> Based on current growth, you're on track for
                    $15,000-25,000/month by month 12.
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Data Management */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="w-5 h-5 text-blue-600" />
                  Data Management & Quality
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <div className="text-xl font-bold text-blue-600">{stats.lawyers}</div>
                    <div className="text-sm text-gray-600">Total Lawyers</div>
                    <div className="text-xs text-blue-600">+23 this week</div>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="text-xl font-bold text-green-600">98.5%</div>
                    <div className="text-sm text-gray-600">Data Accuracy</div>
                    <div className="text-xs text-green-600">+0.3% improved</div>
                  </div>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between text-sm">
                    <span>Last Poder Judicial Sync</span>
                    <span className="text-green-600">2 hours ago</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>New Disciplinary Cases Found</span>
                    <span className="text-blue-600">3 today</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Data Quality Score</span>
                    <span className="text-green-600">98.5%</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>Colegio de Abogados Sync</span>
                    <span className="text-green-600">6 hours ago</span>
                  </div>
                </div>

                <Button variant="outline" className="w-full bg-transparent">
                  <Eye className="w-4 h-4 mr-2" />
                  View Data Quality Report
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Owner Controls */}
          <div className="space-y-6">
            {/* Owner Info */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Crown className="w-5 h-5 text-purple-600" />
                  Owner Information
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div>
                    <Label className="text-sm font-medium">Email</Label>
                    <div className="text-sm text-gray-600">alvardito92@gmail.com</div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Phone</Label>
                    <div className="text-sm text-gray-600">787-406-0601</div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Domain</Label>
                    <div className="text-sm text-gray-600">heylexii.com</div>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Platform Status</Label>
                    <Badge className="bg-yellow-100 text-yellow-800">Deploying</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Access Control */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Key className="w-5 h-5 text-purple-600" />
                  Security & Access
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-3 bg-purple-50 rounded-lg">
                    <div className="font-medium text-purple-900">Master Password</div>
                    <div className="text-sm text-purple-700">Will be set during deployment</div>
                    <Button size="sm" className="mt-2 bg-purple-600 hover:bg-purple-700" disabled>
                      Set Password (Coming Soon)
                    </Button>
                  </div>

                  <div className="p-3 bg-green-50 rounded-lg">
                    <div className="font-medium text-green-900">2FA Authentication</div>
                    <div className="text-sm text-green-700">Phone: 787-406-0601</div>
                    <Button size="sm" variant="outline" className="mt-2 bg-transparent" disabled>
                      Configure 2FA (Coming Soon)
                    </Button>
                  </div>

                  <div className="p-3 bg-blue-50 rounded-lg">
                    <div className="font-medium text-blue-900">API Access Keys</div>
                    <div className="text-sm text-blue-700">Will be generated</div>
                    <Button size="sm" variant="outline" className="mt-2 bg-transparent" disabled>
                      Generate Keys (Coming Soon)
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* User Activity */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Users className="w-5 h-5 text-orange-600" />
                  User Activity (Projected)
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Daily Visitors</span>
                    <span className="font-semibold">{stats.dailyVisits.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Lawyer Searches</span>
                    <span className="font-semibold">1,834</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Reviews Submitted</span>
                    <span className="font-semibold">23</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Mobile App Installs</span>
                    <span className="font-semibold">156</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Premium Signups</span>
                    <span className="font-semibold">12</span>
                  </div>
                </div>

                <div className="mt-4 p-3 bg-orange-50 rounded-lg">
                  <div className="text-sm text-orange-700">
                    <strong>Growth Trend:</strong> +23.5% monthly user growth expected
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start bg-transparent" disabled>
                    <Download className="w-4 h-4 mr-2" />
                    Download Setup Report
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" disabled>
                    <Settings className="w-4 h-4 mr-2" />
                    Platform Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" disabled>
                    <Shield className="w-4 h-4 mr-2" />
                    Security Configuration
                  </Button>
                  <Button variant="outline" className="w-full justify-start bg-transparent" disabled>
                    <Users className="w-4 h-4 mr-2" />
                    User Management
                  </Button>
                </div>
                <div className="mt-3 text-xs text-gray-500">Actions will be enabled after deployment completion</div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Deployment Progress */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-blue-600" />
              Deployment Progress
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">Domain Registration (heylexii.com)</span>
                <Badge className="bg-green-100 text-green-800">Complete</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Vercel Pro Hosting Setup</span>
                <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Supabase Database Configuration</span>
                <Badge className="bg-yellow-100 text-yellow-800">In Progress</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Puerto Rico Lawyer Data Population</span>
                <Badge className="bg-gray-100 text-gray-800">Pending</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Mobile App (PWA) Configuration</span>
                <Badge className="bg-gray-100 text-gray-800">Pending</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">SSL Certificate & Security</span>
                <Badge className="bg-gray-100 text-gray-800">Pending</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Data Scraping Pipeline</span>
                <Badge className="bg-gray-100 text-gray-800">Pending</Badge>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">Owner Dashboard & Credentials</span>
                <Badge className="bg-gray-100 text-gray-800">Pending</Badge>
              </div>
            </div>

            <div className="mt-6">
              <div className="flex justify-between text-sm mb-2">
                <span>Overall Progress</span>
                <span>15%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div className="bg-blue-600 h-3 rounded-full" style={{ width: "15%" }}></div>
              </div>
            </div>

            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <div className="text-sm text-blue-800">
                <strong>Next Steps:</strong> I'm configuring your hosting infrastructure and will email you at
                alvardito92@gmail.com with updates every 24 hours. Expected completion: January 16, 2024.
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
