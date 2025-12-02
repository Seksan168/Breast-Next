"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowLeft, Shield, Lock, FileText, AlertTriangle, CheckCircle2, Eye, Database, UserCheck } from "lucide-react";

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState("overview");

  const sections = [
    { id: "overview", title: "Overview", icon: FileText },
    { id: "acceptance", title: "Acceptance of Terms", icon: CheckCircle2 },
    { id: "medical", title: "Medical Disclaimer", icon: AlertTriangle },
    { id: "pdpa", title: "PDPA Compliance", icon: Shield },
    { id: "data-collection", title: "Data Collection", icon: Database },
    { id: "data-usage", title: "Data Usage", icon: Eye },
    { id: "data-protection", title: "Data Protection", icon: Lock },
    { id: "user-rights", title: "Your Rights", icon: UserCheck },
  ];

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
                <Link href="/dashboard" className="text-gray-700 hover:text-teal-600 transition-colors">
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
            
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                Terms of Service & Privacy Policy
              </h1>
              <p className="text-lg text-gray-600 mt-2">
                Last Updated: November 25, 2025
              </p>
            </div>
          </div>

          {/* Important Notice Banner */}
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl shadow-xl border-2 border-amber-200 p-6">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-8 w-8 text-amber-600" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Important Notice</h3>
                <p className="text-gray-700">
                  By using MammoCare AI, you acknowledge that this is an <strong>educational and research tool</strong> developed 
                  as a senior project at Prince of Songkla University. This system has <strong>not been approved by medical 
                  regulatory authorities</strong> for clinical use. All results must be validated by licensed healthcare professionals.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-6 sticky top-24">
                <h3 className="font-bold text-gray-900 mb-4">Quick Navigation</h3>
                <nav className="space-y-2">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id);
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                        }}
                        className={`w-full flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${
                          activeSection === section.id
                            ? 'bg-teal-100 text-teal-700 font-semibold'
                            : 'text-gray-600 hover:bg-gray-50'
                        }`}
                      >
                        <Icon className="h-5 w-5" />
                        <span className="text-sm">{section.title}</span>
                      </button>
                    );
                  })}
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Overview Section */}
              <section id="overview" className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8 scroll-mt-24">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <FileText className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">1. Overview</h2>
                </div>
                <div className="prose max-w-none space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Welcome to MammoCare AI (&quot;the Service&quot;), a breast calcification detection system using artificial 
                    intelligence and deep learning technology. This Service is provided by Prince of Songkla University, 
                    Phuket Campus, as part of an academic research project.
                  </p>
                  <p className="leading-relaxed">
                    These Terms of Service (&quot;Terms&quot;) govern your access to and use of the Service. By accessing or using 
                    the Service, you agree to be bound by these Terms and our Privacy Policy.
                  </p>
                  <div className="bg-teal-50 border-l-4 border-teal-500 p-4 rounded-r-lg">
                    <p className="font-semibold text-teal-900 mb-2">Project Information:</p>
                    <ul className="list-disc list-inside space-y-1 text-teal-800 text-sm">
                      <li>Project: Breast Calcification Detection Using Mammography Images</li>
                      <li>Student: Seksan Jeennamsai (6530613003)</li>
                      <li>Advisor: Asst. Prof. Kittasil Silanon, Ph.D.</li>
                      <li>Institution: Prince of Songkla University, Phuket Campus</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Acceptance of Terms */}
              <section id="acceptance" className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8 scroll-mt-24">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <CheckCircle2 className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">2. Acceptance of Terms</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    By using this Service, you confirm that:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>You are at least 18 years of age or have parental/guardian consent</li>
                    <li>You have read, understood, and agree to these Terms</li>
                    <li>You understand this is an educational research tool, not a medical device</li>
                    <li>You will not use the Service for clinical diagnosis or treatment decisions</li>
                    <li>You acknowledge that all results must be verified by licensed medical professionals</li>
                  </ul>
                  <div className="bg-rose-50 border-2 border-rose-200 rounded-xl p-4 mt-4">
                    <p className="font-semibold text-rose-900 mb-2">⚠️ Important Restrictions:</p>
                    <ul className="list-disc list-inside space-y-1 text-rose-800 text-sm">
                      <li>Do NOT use for emergency medical situations</li>
                      <li>Do NOT rely solely on AI results for medical decisions</li>
                      <li>Do NOT substitute professional medical consultation</li>
                      <li>Do NOT use for commercial clinical practice</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Medical Disclaimer */}
              <section id="medical" className="bg-white rounded-3xl shadow-xl border-2 border-amber-100 p-8 scroll-mt-24">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-amber-100 p-3 rounded-full">
                    <AlertTriangle className="h-6 w-6 text-amber-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">3. Medical Disclaimer</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4 rounded-r-lg">
                    <p className="font-bold text-amber-900 text-lg mb-2">
                      THIS SERVICE IS NOT A MEDICAL DEVICE OR DIAGNOSTIC TOOL
                    </p>
                    <p className="text-amber-800">
                      The AI analysis provided is for educational and research purposes only and should NOT be used 
                      for medical diagnosis, treatment, or clinical decision-making.
                    </p>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mt-6 mb-3">3.1 Limitations of Service</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>The Service uses AI models that may produce false positives or false negatives</li>
                    <li>Results are predictions based on training data and may not be accurate</li>
                    <li>The Service cannot replace professional radiological examination</li>
                    <li>No warranty or guarantee of accuracy is provided</li>
                  </ul>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">3.2 Professional Medical Care Required</h3>
                  <p className="leading-relaxed">
                    All suspicious findings MUST be evaluated by:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Certified radiologists with expertise in breast imaging</li>
                    <li>Licensed medical doctors or specialists</li>
                    <li>Appropriate diagnostic imaging facilities</li>
                    <li>Pathology services for biopsy confirmation when indicated</li>
                  </ul>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">3.3 No Physician-Patient Relationship</h3>
                  <p className="leading-relaxed">
                    Use of this Service does not create a physician-patient relationship. The Service does not provide 
                    medical advice, diagnosis, or treatment. Always seek the advice of qualified healthcare providers 
                    with any questions regarding medical conditions.
                  </p>
                </div>
              </section>

              {/* PDPA Compliance */}
              <section id="pdpa" className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8 scroll-mt-24">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Shield className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">4. PDPA Compliance (Personal Data Protection Act)</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    We are committed to protecting your personal data in accordance with Thailand&apos;s Personal Data 
                    Protection Act B.E. 2562 (2019) and international data protection standards.
                  </p>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">4.1 Data Controller</h3>
                  <div className="bg-gray-50 rounded-lg p-4">
                    <p className="font-semibold mb-2">Prince of Songkla University, Phuket Campus</p>
                    <p className="text-sm">Address: 21/21 Moo 7, Vichit, Muang, Phuket 83000, Thailand</p>
                    <p className="text-sm">Email: info@phuket.psu.ac.th</p>
                    <p className="text-sm">Phone: +66 (0) 76 27 6300</p>
                  </div>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">4.2 Legal Basis for Processing</h3>
                  <p className="leading-relaxed">We process your personal data based on:</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Consent:</strong> You have given explicit consent for processing your data</li>
                    <li><strong>Legitimate Interests:</strong> Academic research and educational purposes</li>
                    <li><strong>Legal Obligations:</strong> Compliance with applicable laws and regulations</li>
                  </ul>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">4.3 Sensitive Personal Data</h3>
                  <div className="bg-rose-50 border-2 border-rose-200 rounded-xl p-4">
                    <p className="font-semibold text-rose-900 mb-2">⚠️ Health Data Classification:</p>
                    <p className="text-rose-800 text-sm leading-relaxed">
                      Mammography images and related medical data are classified as <strong>sensitive personal data</strong> under 
                      PDPA. We obtain explicit consent before collecting, using, or disclosing such information. You have the 
                      right to withdraw consent at any time.
                    </p>
                  </div>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">4.4 Cross-Border Data Transfer</h3>
                  <p className="leading-relaxed">
                    Your data may be processed on servers located outside Thailand. We ensure adequate protection through:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Encryption during transmission and storage</li>
                    <li>Contracts with service providers ensuring PDPA-equivalent protection</li>
                    <li>Compliance with international data protection standards</li>
                  </ul>
                </div>
              </section>

              {/* Data Collection */}
              <section id="data-collection" className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8 scroll-mt-24">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Database className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">5. Data Collection</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <h3 className="font-bold text-gray-900 mb-3">5.1 Information We Collect</h3>
                  
                  <div className="space-y-4">
                    <div className="border-l-4 border-teal-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Medical Images:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Mammography images (PNG, JPG, DICOM formats)</li>
                        <li>Image metadata (resolution, acquisition parameters)</li>
                        <li>Analysis results and segmentation masks</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-blue-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Technical Data:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>IP address and device information</li>
                        <li>Browser type and version</li>
                        <li>Upload timestamps and session data</li>
                        <li>System performance metrics</li>
                      </ul>
                    </div>

                    <div className="border-l-4 border-amber-500 pl-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Optional Information:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>User feedback and comments</li>
                        <li>Research survey responses (if participated)</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">5.2 Information We DO NOT Collect</h3>
                  <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-4">
                    <ul className="list-disc list-inside space-y-2 text-teal-800">
                      <li>Patient names or personal identifiers</li>
                      <li>National ID numbers or passport information</li>
                      <li>Contact information (unless voluntarily provided for research)</li>
                      <li>Medical history or clinical records</li>
                      <li>Insurance or billing information</li>
                    </ul>
                  </div>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">5.3 Data Minimization</h3>
                  <p className="leading-relaxed">
                    We practice data minimization by collecting only the information necessary for the Service to function 
                    and for our research objectives. We encourage users to remove all personal identifiers from images 
                    before uploading.
                  </p>
                </div>
              </section>

              {/* Data Usage */}
              <section id="data-usage" className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8 scroll-mt-24">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Eye className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">6. How We Use Your Data</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">We use your data for the following purposes:</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-teal-50 rounded-xl p-4 border border-teal-200">
                      <h4 className="font-semibold text-teal-900 mb-2">✓ Service Operation</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-teal-800">
                        <li>Process and analyze uploaded images</li>
                        <li>Generate segmentation results</li>
                        <li>Provide AI-powered predictions</li>
                        <li>Display analysis results to users</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-200">
                      <h4 className="font-semibold text-blue-900 mb-2">✓ Research & Development</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-blue-800">
                        <li>Improve AI model accuracy</li>
                        <li>Train and validate algorithms</li>
                        <li>Academic research and publications</li>
                        <li>System performance optimization</li>
                      </ul>
                    </div>

                    <div className="bg-amber-50 rounded-xl p-4 border border-amber-200">
                      <h4 className="font-semibold text-amber-900 mb-2">✓ Quality Assurance</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-amber-800">
                        <li>Monitor system performance</li>
                        <li>Identify and fix technical issues</li>
                        <li>Ensure service reliability</li>
                        <li>Security and fraud prevention</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-4 border border-purple-200">
                      <h4 className="font-semibold text-purple-900 mb-2">✓ Statistical Analysis</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-purple-800">
                        <li>Generate aggregate statistics</li>
                        <li>Create anonymized datasets</li>
                        <li>Analyze usage patterns</li>
                        <li>Prepare research reports</li>
                      </ul>
                    </div>
                  </div>

                  <div className="bg-rose-50 border-2 border-rose-200 rounded-xl p-4 mt-6">
                    <h4 className="font-semibold text-rose-900 mb-2">✗ We Will NOT Use Your Data For:</h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-rose-800">
                      <li>Selling or renting to third parties</li>
                      <li>Marketing or advertising purposes</li>
                      <li>Sharing with insurance companies</li>
                      <li>Clinical diagnosis or patient management</li>
                      <li>Any purpose outside the scope stated above without explicit consent</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Data Protection */}
              <section id="data-protection" className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8 scroll-mt-24">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <Lock className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">7. Data Protection & Security</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    We implement comprehensive security measures to protect your data:
                  </p>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">7.1 Technical Safeguards</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Lock className="h-4 w-4 mr-2 text-teal-600" />
                        Encryption
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>HTTPS/TLS for data transmission</li>
                        <li>AES-256 encryption at rest</li>
                        <li>Encrypted database storage</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Shield className="h-4 w-4 mr-2 text-teal-600" />
                        Access Control
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Role-based access restrictions</li>
                        <li>Multi-factor authentication</li>
                        <li>Regular access audits</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <Database className="h-4 w-4 mr-2 text-teal-600" />
                        Data Backup
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>Regular automated backups</li>
                        <li>Disaster recovery procedures</li>
                        <li>Redundant storage systems</li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center">
                        <AlertTriangle className="h-4 w-4 mr-2 text-teal-600" />
                        Monitoring
                      </h4>
                      <ul className="list-disc list-inside space-y-1 text-sm">
                        <li>24/7 security monitoring</li>
                        <li>Intrusion detection systems</li>
                        <li>Regular security assessments</li>
                      </ul>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">7.2 Organizational Measures</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Limited access to authorized personnel only</li>
                    <li>Confidentiality agreements with all staff and researchers</li>
                    <li>Regular security training and awareness programs</li>
                    <li>Incident response and breach notification procedures</li>
                  </ul>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">7.3 Data Retention</h3>
                  <p className="leading-relaxed">
                    We retain your data for the following periods:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li><strong>Uploaded Images:</strong> Automatically deleted after 30 days unless consent given for research</li>
                    <li><strong>Analysis Results:</strong> Retained for 90 days for quality assurance</li>
                    <li><strong>Anonymized Research Data:</strong> Retained indefinitely for academic purposes</li>
                    <li><strong>System Logs:</strong> Retained for 12 months for security purposes</li>
                  </ul>

                  <div className="bg-teal-50 border-2 border-teal-200 rounded-xl p-4 mt-4">
                    <p className="font-semibold text-teal-900 mb-2">🔒 Your Control:</p>
                    <p className="text-sm text-teal-800">
                      You can request immediate deletion of your data at any time by contacting us. We will comply 
                      within 30 days unless legal obligations require retention.
                    </p>
                  </div>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">7.4 Data Breach Response</h3>
                  <p className="leading-relaxed">
                    In the unlikely event of a data breach affecting sensitive personal data, we will:
                  </p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>Notify affected users within 72 hours</li>
                    <li>Report to relevant authorities as required by PDPA</li>
                    <li>Take immediate steps to contain and remediate the breach</li>
                    <li>Provide guidance on protective measures users can take</li>
                  </ul>
                </div>
              </section>

              {/* User Rights */}
              <section id="user-rights" className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8 scroll-mt-24">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-teal-100 p-3 rounded-full">
                    <UserCheck className="h-6 w-6 text-teal-600" />
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">8. Your Rights Under PDPA</h2>
                </div>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    Under Thailand&apos;s Personal Data Protection Act, you have the following rights:
                  </p>

                  <div className="space-y-4">
                    <div className="bg-teal-50 rounded-xl p-4 border-l-4 border-teal-500">
                      <h4 className="font-semibold text-teal-900 mb-2">✓ Right to Access</h4>
                      <p className="text-sm text-teal-800">
                        Request a copy of your personal data we hold and information about how we process it.
                      </p>
                    </div>

                    <div className="bg-blue-50 rounded-xl p-4 border-l-4 border-blue-500">
                      <h4 className="font-semibold text-blue-900 mb-2">✓ Right to Rectification</h4>
                      <p className="text-sm text-blue-800">
                        Request correction of inaccurate or incomplete personal data.
                      </p>
                    </div>

                    <div className="bg-purple-50 rounded-xl p-4 border-l-4 border-purple-500">
                      <h4 className="font-semibold text-purple-900 mb-2">✓ Right to Erasure</h4>
                      <p className="text-sm text-purple-800">
                        Request deletion of your personal data when it is no longer necessary or if you withdraw consent.
                      </p>
                    </div>

                    <div className="bg-amber-50 rounded-xl p-4 border-l-4 border-amber-500">
                      <h4 className="font-semibold text-amber-900 mb-2">✓ Right to Data Portability</h4>
                      <p className="text-sm text-amber-800">
                        Receive your data in a structured, machine-readable format and transfer it to another controller.
                      </p>
                    </div>

                    <div className="bg-rose-50 rounded-xl p-4 border-l-4 border-rose-500">
                      <h4 className="font-semibold text-rose-900 mb-2">✓ Right to Object</h4>
                      <p className="text-sm text-rose-800">
                        Object to processing of your data for certain purposes, including research and direct marketing.
                      </p>
                    </div>

                    <div className="bg-gray-50 rounded-xl p-4 border-l-4 border-gray-500">
                      <h4 className="font-semibold text-gray-900 mb-2">✓ Right to Restrict Processing</h4>
                      <p className="text-sm text-gray-700">
                        Request limitation of processing in certain circumstances while issues are resolved.
                      </p>
                    </div>

                    <div className="bg-indigo-50 rounded-xl p-4 border-l-4 border-indigo-500">
                      <h4 className="font-semibold text-indigo-900 mb-2">✓ Right to Withdraw Consent</h4>
                      <p className="text-sm text-indigo-800">
                        Withdraw your consent at any time for processing based on consent, without affecting lawfulness of previous processing.
                      </p>
                    </div>

                    <div className="bg-pink-50 rounded-xl p-4 border-l-4 border-pink-500">
                      <h4 className="font-semibold text-pink-900 mb-2">✓ Right to Lodge a Complaint</h4>
                      <p className="text-sm text-pink-800">
                        File a complaint with the Personal Data Protection Committee if you believe your rights have been violated.
                      </p>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">8.1 How to Exercise Your Rights</h3>
                  <p className="leading-relaxed">
                    To exercise any of these rights, please contact us at:
                  </p>
                  <div className="bg-white rounded-xl border-2 border-teal-200 p-6 mt-4">
                    <h4 className="font-semibold text-gray-900 mb-4">Contact Information:</h4>
                    <div className="space-y-2 text-sm">
                      <p><strong>Email:</strong> privacy@mammocare-ai.psu.ac.th</p>
                      <p><strong>Address:</strong> Prince of Songkla University, Phuket Campus<br />
                      21/21 Moo 7, Vichit, Muang, Phuket 83000, Thailand</p>
                      <p><strong>Phone:</strong> +66 (0) 76 27 6300</p>
                    </div>
                    <div className="mt-4 bg-teal-50 rounded-lg p-3">
                      <p className="text-sm text-teal-800">
                        <strong>Response Time:</strong> We will respond to your request within 30 days. 
                        If we need more time, we will inform you and provide the reasons for the delay.
                      </p>
                    </div>
                  </div>

                  <h3 className="font-bold text-gray-900 mt-6 mb-3">8.2 Verification Process</h3>
                  <p className="leading-relaxed">
                    To protect your privacy, we may need to verify your identity before processing requests. 
                    We may ask for:
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4 text-sm">
                    <li>Session ID or upload timestamp</li>
                    <li>Image hash or file information</li>
                    <li>Other information to confirm you are the data subject</li>
                  </ul>
                </div>
              </section>

              {/* Additional Sections */}
              <section className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">9. Additional Terms</h2>
                <div className="space-y-6 text-gray-700">
                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">9.1 Cookies and Tracking</h3>
                    <p className="leading-relaxed">
                      We use session cookies for service functionality. We do not use third-party tracking cookies 
                      or analytics that identify individuals.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">9.2 Third-Party Services</h3>
                    <p className="leading-relaxed">
                      Our Service may use cloud infrastructure providers. We ensure all third parties comply with 
                      PDPA-equivalent data protection standards through contractual obligations.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">9.3 Children&apos;s Privacy</h3>
                    <p className="leading-relaxed">
                      This Service is not intended for users under 18 years of age. We do not knowingly collect 
                      data from children. If we become aware of such collection, we will delete it immediately.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">9.4 Changes to Terms</h3>
                    <p className="leading-relaxed">
                      We may update these Terms periodically. Material changes will be notified through the Service 
                      or via email (if provided). Continued use after changes constitutes acceptance.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">9.5 Governing Law</h3>
                    <p className="leading-relaxed">
                      These Terms are governed by the laws of Thailand. Any disputes will be subject to the 
                      exclusive jurisdiction of Thai courts.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-bold text-gray-900 mb-3">9.6 Contact Information</h3>
                    <p className="leading-relaxed">
                      For questions about these Terms or our privacy practices:
                    </p>
                    <div className="bg-gray-50 rounded-lg p-4 mt-2">
                      <p className="text-sm"><strong>Data Protection Officer:</strong></p>
                      <p className="text-sm">Email: dpo@psu.ac.th</p>
                      <p className="text-sm">Phone: +66 (0) 76 27 6300</p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Acknowledgment */}
              <div className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">Acknowledgment</h3>
                <p className="leading-relaxed mb-4">
                  By using MammoCare AI, you acknowledge that you have read, understood, and agree to be bound by 
                  these Terms of Service and Privacy Policy. You confirm that you understand the limitations of 
                  this educational tool and will seek professional medical advice for all health concerns.
                </p>
                <p className="text-teal-100 text-sm">
                  Last Updated: November 25, 2025 | Version 1.0
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}