"use client";

import React, { useState } from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Activity, 
  TrendingUp, 
  Users, 
  FileText,
  Calendar,
  CheckCircle2,
  AlertCircle,
  Clock,
  BarChart3,
  PieChart,
  Download
} from "lucide-react";

export default function DashboardPage() {
  // Mock data - replace with real API calls
  const [stats] = useState({
    totalScans: 1247,
    positiveDetections: 156,
    averageAccuracy: 99.9,
    processingTime: 24.5,
  });

  const [recentScans] = useState([
    {
      id: 1,
      patientId: "P-2025-001",
      date: "2025-02-15",
      time: "14:30",
      result: "Positive",
      confidence: 94.5,
      coverage: 12.3,
    },
    {
      id: 2,
      patientId: "P-2025-002",
      date: "2025-02-15",
      time: "13:15",
      result: "Negative",
      confidence: 98.2,
      coverage: 0.0,
    },
    {
      id: 3,
      patientId: "P-2025-003",
      date: "2025-02-15",
      time: "11:45",
      result: "Positive",
      confidence: 91.7,
      coverage: 8.9,
    },
    {
      id: 4,
      patientId: "P-2025-004",
      date: "2025-02-14",
      time: "16:20",
      result: "Negative",
      confidence: 99.1,
      coverage: 0.0,
    },
    {
      id: 5,
      patientId: "P-2025-005",
      date: "2025-02-14",
      time: "15:00",
      result: "Positive",
      confidence: 96.3,
      coverage: 15.7,
    },
  ]);

  const [monthlyData] = useState([
    { month: "Jan", scans: 98, positive: 12 },
    { month: "Feb", scans: 156, positive: 18 },
    { month: "Mar", scans: 142, positive: 15 },
    { month: "Apr", scans: 178, positive: 22 },
    { month: "May", scans: 165, positive: 19 },
    { month: "Jun", scans: 192, positive: 24 },
  ]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-teal-600">MammoCare AI</h1>
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
                  About
                </Link>
                <Link href="/upload" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Upload
                </Link>
                <Link href="/dashboard" className="text-gray-900 hover:text-teal-600 font-medium transition-colors">
                  Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-8">
          {/* Header */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Back to Home
            </Link>
            
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                  Analytics Dashboard
                </h1>
                <p className="text-lg text-gray-600 mt-2">
                  Monitor system performance and analysis results
                </p>
              </div>
              <button className="hidden md:flex items-center bg-teal-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                <Download className="h-5 w-5 mr-2" />
                Export Report
              </button>
            </div>
          </div>

          {/* About This Dashboard */}
          <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl shadow-xl p-8 text-white">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                  <BarChart3 className="h-8 w-8 text-white" />
                </div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4">About This Dashboard</h2>
                <div className="grid md:grid-cols-2 gap-6 text-teal-50">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <CheckCircle2 className="h-4 w-4 mr-2" />
                        What This Dashboard Shows
                      </h3>
                      <p className="text-sm leading-relaxed">
                        This dashboard provides real-time analytics and performance metrics for the MammoCare AI 
                        breast calcification detection system. It tracks system usage, detection outcomes, model 
                        accuracy, and processing efficiency.
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <Activity className="h-4 w-4 mr-2" />
                        Key Metrics Explained
                      </h3>
                      <ul className="text-sm space-y-1">
                        <li><strong>Total Scans:</strong> Number of mammography images analyzed</li>
                        <li><strong>Positive Detections:</strong> Cases with calcifications identified</li>
                        <li><strong>Average Accuracy:</strong> Model confidence across all predictions</li>
                        <li><strong>Processing Time:</strong> Average time per image analysis</li>
                      </ul>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-white mb-2 flex items-center">
                        <AlertCircle className="h-4 w-4 mr-2" />
                        Important Notes
                      </h3>
                      <ul className="text-sm space-y-2">
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>This data is for <strong>monitoring and research purposes only</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>All positive detections require <strong>professional medical validation</strong></span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>The system is an <strong>educational tool</strong>, not approved for clinical diagnosis</span>
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2">•</span>
                          <span>Patient identifiers are anonymized for privacy protection</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="mt-6 pt-6 border-t border-white/30">
                  <p className="text-sm text-teal-100">
                    <strong>Note:</strong> The statistics shown represent system performance in a controlled research 
                    environment. Clinical validation with certified radiologists is required before any medical application.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Total Scans */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-6 hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Total Scans</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalScans.toLocaleString()}</p>
                  <p className="text-sm text-teal-600 mt-2 flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    +12.5% from last month
                  </p>
                </div>
                <div className="bg-teal-100 p-4 rounded-full">
                  <Activity className="h-8 w-8 text-teal-600" />
                </div>
              </div>
            </div>

            {/* Positive Detections */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-rose-100 p-6 hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Positive Detections</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.positiveDetections}</p>
                  <p className="text-sm text-rose-600 mt-2 flex items-center">
                    <AlertCircle className="h-4 w-4 mr-1" />
                    {((stats.positiveDetections / stats.totalScans) * 100).toFixed(1)}% detection rate
                  </p>
                </div>
                <div className="bg-rose-100 p-4 rounded-full">
                  <FileText className="h-8 w-8 text-rose-600" />
                </div>
              </div>
            </div>

            {/* Average Accuracy */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-amber-100 p-6 hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Average Accuracy</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.averageAccuracy}%</p>
                  <p className="text-sm text-amber-600 mt-2 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-1" />
                    Model confidence high
                  </p>
                </div>
                <div className="bg-amber-100 p-4 rounded-full">
                  <BarChart3 className="h-8 w-8 text-amber-600" />
                </div>
              </div>
            </div>

            {/* Processing Time */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-blue-100 p-6 hover:shadow-2xl transition-shadow">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600 font-medium">Avg. Processing Time</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.processingTime}s</p>
                  <p className="text-sm text-blue-600 mt-2 flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Optimal performance
                  </p>
                </div>
                <div className="bg-blue-100 p-4 rounded-full">
                  <Clock className="h-8 w-8 text-blue-600" />
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Monthly Scans Chart */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <BarChart3 className="h-6 w-6 text-teal-600 mr-2" />
                  Monthly Analysis
                </h2>
                <select className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500">
                  <option>Last 6 months</option>
                  <option>Last 3 months</option>
                  <option>Last year</option>
                </select>
              </div>
              <div className="space-y-4">
                {monthlyData.map((data, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="font-medium text-gray-700">{data.month}</span>
                      <span className="text-gray-600">{data.scans} scans</span>
                    </div>
                    <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                      <div 
                        className="absolute h-full bg-gradient-to-r from-teal-500 to-cyan-500 rounded-full transition-all duration-500"
                        style={{ width: `${(data.scans / 200) * 100}%` }}
                      ></div>
                      <div 
                        className="absolute h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${(data.positive / 200) * 100}%`,
                          left: `${(data.scans / 200) * 100}%`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded mr-2"></div>
                  <span className="text-gray-600">Total Scans</span>
                </div>
                <div className="flex items-center">
                  <div className="w-4 h-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded mr-2"></div>
                  <span className="text-gray-600">Positive Cases</span>
                </div>
              </div>
            </div>

            {/* Detection Distribution */}
            <div className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <PieChart className="h-6 w-6 text-teal-600 mr-2" />
                Detection Distribution
              </h2>
              <div className="flex items-center justify-center mb-6">
                <div className="relative w-48 h-48">
                  <svg className="transform -rotate-90 w-48 h-48">
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="#e5e7eb"
                      strokeWidth="24"
                      fill="none"
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="url(#gradient1)"
                      strokeWidth="24"
                      fill="none"
                      strokeDasharray={`${((stats.totalScans - stats.positiveDetections) / stats.totalScans) * 502} 502`}
                    />
                    <circle
                      cx="96"
                      cy="96"
                      r="80"
                      stroke="url(#gradient2)"
                      strokeWidth="24"
                      fill="none"
                      strokeDasharray={`${(stats.positiveDetections / stats.totalScans) * 502} 502`}
                      strokeDashoffset={-((stats.totalScans - stats.positiveDetections) / stats.totalScans) * 502}
                    />
                    <defs>
                      <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#14b8a6" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                      <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f43f5e" />
                        <stop offset="100%" stopColor="#ec4899" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-3xl font-bold text-gray-900">{stats.totalScans}</span>
                    <span className="text-sm text-gray-600">Total Scans</span>
                  </div>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-teal-50 rounded-lg border border-teal-200">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-teal-500 to-cyan-500 rounded mr-3"></div>
                    <span className="font-medium text-gray-700">Negative</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{stats.totalScans - stats.positiveDetections}</div>
                    <div className="text-sm text-gray-600">
                      {(((stats.totalScans - stats.positiveDetections) / stats.totalScans) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between p-3 bg-rose-50 rounded-lg border border-rose-200">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded mr-3"></div>
                    <span className="font-medium text-gray-700">Positive</span>
                  </div>
                  <div className="text-right">
                    <div className="font-bold text-gray-900">{stats.positiveDetections}</div>
                    <div className="text-sm text-gray-600">
                      {((stats.positiveDetections / stats.totalScans) * 100).toFixed(1)}%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Scans Table */}
          <div className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 overflow-hidden">
            <div className="px-8 py-6 border-b border-gray-200">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                  <Calendar className="h-6 w-6 text-teal-600 mr-2" />
                  Recent Scans
                </h2>
                <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                  View All →
                </button>
              </div>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Patient ID
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Date & Time
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Result
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Confidence
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Coverage
                    </th>
                    <th className="px-6 py-4 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {recentScans.map((scan) => (
                    <tr key={scan.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="font-medium text-gray-900">{scan.patientId}</span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {scan.date} at {scan.time}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {scan.result === "Positive" ? (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-rose-100 text-rose-700 border border-rose-200">
                            <AlertCircle className="h-3 w-3 mr-1" />
                            Positive
                          </span>
                        ) : (
                          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-teal-100 text-teal-700 border border-teal-200">
                            <CheckCircle2 className="h-3 w-3 mr-1" />
                            Negative
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="w-full bg-gray-200 rounded-full h-2 mr-2" style={{ width: '60px' }}>
                            <div 
                              className={`h-2 rounded-full ${
                                scan.confidence > 95 ? 'bg-teal-500' : 
                                scan.confidence > 90 ? 'bg-amber-500' : 'bg-rose-500'
                              }`}
                              style={{ width: `${scan.confidence}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium text-gray-700">{scan.confidence}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {scan.coverage.toFixed(1)}%
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <button className="text-teal-600 hover:text-teal-700 font-medium text-sm">
                          View Details →
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* System Status */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl shadow-lg border-2 border-teal-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Model Status</h3>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-sm text-teal-600 font-medium">Active</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">U-Net v2.0 - Last updated: 2025-01-15</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-amber-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">Server Health</h3>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-sm text-teal-600 font-medium">Healthy</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">CPU: 45% | Memory: 62% | Uptime: 99.8%</p>
            </div>

            <div className="bg-white rounded-2xl shadow-lg border-2 border-blue-100 p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-gray-900">API Status</h3>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse mr-2"></div>
                  <span className="text-sm text-teal-600 font-medium">Online</span>
                </div>
              </div>
              <p className="text-sm text-gray-600">Response time: 245ms | Success rate: 99.9%</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}