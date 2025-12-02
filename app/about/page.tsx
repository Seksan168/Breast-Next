"use client";

import React from "react";
import Link from "next/link";
import { 
  ArrowLeft, 
  Target, 
  Users, 
  Award,
  Lightbulb,
  TrendingUp,
  Shield,
  BookOpen,
  Cpu,
  Activity,
  CheckCircle2,
  AlertTriangle,
  Github,
  Mail,
  GraduationCap
} from "lucide-react";

export default function AboutPage() {
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
                <Link href="/about" className="text-gray-900 hover:text-teal-600 font-medium transition-colors">
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
        <div className="space-y-12">
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
                About MammoCare AI
              </h1>
              <p className="text-xl text-gray-600 mt-4 leading-relaxed">
                An AI-powered breast calcification detection system designed to support 
                radiologists in early breast cancer screening through advanced deep learning technology.
              </p>
            </div>
          </div>

          {/* Mission Statement */}
          <section className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl shadow-2xl p-12 text-white">
            <div className="max-w-4xl">
              <div className="flex items-center space-x-3 mb-6">
                <Target className="h-10 w-10" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-xl leading-relaxed text-teal-50">
                To democratize access to advanced breast cancer screening technology by providing an 
                AI-assisted tool that helps detect calcifications in mammography images with high accuracy, 
                particularly benefiting healthcare facilities in resource-limited settings.
              </p>
            </div>
          </section>

          {/* The Problem */}
          <section className="bg-white rounded-3xl shadow-xl border-2 border-rose-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-rose-100 p-3 rounded-full">
                <AlertTriangle className="h-8 w-8 text-rose-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">The Global Challenge</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-gray-700 leading-relaxed">
                  Breast cancer is one of the most significant global health challenges, with 2.3 million 
                  women diagnosed and 670,000 deaths recorded worldwide in 2022.
                </p>
                <div className="bg-rose-50 rounded-xl p-6 border-2 border-rose-200">
                  <h3 className="font-bold text-rose-900 mb-4">Key Statistics:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="bg-rose-600 rounded-full p-1 mt-1 mr-3">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-rose-800"><strong>2.3M</strong> women diagnosed globally in 2022</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-rose-600 rounded-full p-1 mt-1 mr-3">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-rose-800"><strong>670K</strong> deaths recorded worldwide</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-rose-600 rounded-full p-1 mt-1 mr-3">
                        <CheckCircle2 className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-rose-800"><strong>1 in 12</strong> women in high-HDI countries affected</span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <h3 className="font-bold text-gray-900 text-xl">Healthcare Disparities</h3>
                <p className="text-gray-700 leading-relaxed">
                  Profound disparities exist between different regions. In low-HDI countries, while only 
                  1 in 27 women receive a diagnosis, 1 in 48 die from the disease - highlighting the 
                  critical need for improved detection and screening tools.
                </p>
                <div className="bg-amber-50 rounded-xl p-6 border-2 border-amber-200">
                  <h4 className="font-semibold text-amber-900 mb-2">⚠️ The Challenge:</h4>
                  <p className="text-sm text-amber-800 leading-relaxed">
                    Limited access to radiologists, expensive screening equipment, and lack of AI-assisted 
                    diagnostic tools in resource-limited settings contribute to late-stage diagnoses and 
                    higher mortality rates.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Our Solution */}
          <section className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-teal-100 p-3 rounded-full">
                <Lightbulb className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Our Solution</h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 text-lg leading-relaxed">
                MammoCare AI leverages state-of-the-art deep learning technology to detect and segment 
                breast calcifications in mammography images, providing radiologists with a powerful 
                second-opinion tool for early cancer detection.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-6 border-2 border-teal-200">
                  <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Cpu className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Advanced AI Models</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    U-Net architecture achieving 99.9% accuracy with Dice coefficient of 0.999, 
                    trained on 688+ annotated mammography images from RSNA dataset.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 border-2 border-amber-200">
                  <div className="bg-amber-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Activity className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Real-Time Analysis</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Fast processing in under 30 seconds per image, enabling efficient screening 
                    workflows and immediate feedback for clinical decision support.
                  </p>
                </div>

                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 border-2 border-blue-200">
                  <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-gray-900 mb-2">Clinical Support</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Developed with input from practicing radiologists to ensure clinical relevance 
                    and provide actionable insights for healthcare professionals.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Technology Stack */}
          <section className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-teal-100 p-3 rounded-full">
                <Cpu className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Technology & Methodology</h2>
            </div>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Deep Learning Models</h3>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-teal-900">U-Net</h4>
                      <span className="bg-teal-600 text-white text-xs px-3 py-1 rounded-full font-semibold">PRIMARY</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Convolutional neural network specialized for precise image segmentation, achieving 
                      exceptional accuracy in detecting calcification regions.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Parameters:</span>
                        <span className="font-semibold text-teal-700">20.5M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Accuracy:</span>
                        <span className="font-semibold text-teal-700">99.9%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Dice Coeff:</span>
                        <span className="font-semibold text-teal-700">0.999</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-amber-50 rounded-xl p-6 border border-amber-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-amber-900">ResNet50</h4>
                      <span className="bg-amber-600 text-white text-xs px-3 py-1 rounded-full font-semibold">SUPPORT</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Deep residual network for robust feature extraction and pattern recognition 
                      across diverse mammography images.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Parameters:</span>
                        <span className="font-semibold text-amber-700">31M</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Accuracy:</span>
                        <span className="font-semibold text-amber-700">96.3%</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">IoU:</span>
                        <span className="font-semibold text-amber-700">0.0036</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-rose-50 rounded-xl p-6 border border-rose-200">
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-bold text-rose-900">YOLOv11</h4>
                      <span className="bg-rose-600 text-white text-xs px-3 py-1 rounded-full font-semibold">DETECTION</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Real-time object detection for rapid localization of potential calcification 
                      regions before detailed analysis.
                    </p>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Speed:</span>
                        <span className="font-semibold text-rose-700">Real-time</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">F1 Score:</span>
                        <span className="font-semibold text-rose-700">0.21</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Purpose:</span>
                        <span className="font-semibold text-rose-700">Localization</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Training Methodology</h3>
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-xl p-6 border border-gray-200">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Dataset & Preparation</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>688+ annotated mammography images from RSNA dataset</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Patch-based approach: 1,260 image patches for enhanced sensitivity</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Manual annotation using Figma for precise labeling</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Data augmentation to improve model generalization</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Training Strategy</h4>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>5-fold cross-validation for robust evaluation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Multiple training iterations: 25, 50, 75, and 100 epochs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Adam optimizer with cosine annealing decay</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-4 w-4 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                          <span>Combined Binary Cross-Entropy and Dice Loss</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Metrics</h3>
                <div className="grid md:grid-cols-4 gap-4">
                  <div className="bg-white rounded-xl p-6 border-2 border-teal-200 text-center">
                    <div className="text-4xl font-bold text-teal-600 mb-2">0.999</div>
                    <div className="text-sm text-gray-600 font-medium">Dice Coefficient</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-cyan-200 text-center">
                    <div className="text-4xl font-bold text-cyan-600 mb-2">0.999</div>
                    <div className="text-sm text-gray-600 font-medium">IoU Score</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-blue-200 text-center">
                    <div className="text-4xl font-bold text-blue-600 mb-2">99.98%</div>
                    <div className="text-sm text-gray-600 font-medium">Val Accuracy</div>
                  </div>
                  <div className="bg-white rounded-xl p-6 border-2 border-emerald-200 text-center">
                    <div className="text-4xl font-bold text-emerald-600 mb-2">0.00017</div>
                    <div className="text-sm text-gray-600 font-medium">Model Loss</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Research Impact */}
          <section className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-teal-100 p-3 rounded-full">
                <TrendingUp className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Research Contributions</h2>
            </div>
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                This project contributes to the growing body of research on AI-assisted medical diagnosis, 
                particularly in resource-limited settings where access to specialized radiologists is limited.
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-teal-50 rounded-xl p-6 border border-teal-200">
                  <h3 className="font-bold text-teal-900 mb-3 flex items-center">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Key Findings
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="bg-teal-600 rounded-full p-0.5 mt-1 mr-2">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span>Patch-based training significantly improved sensitivity to microcalcifications</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-600 rounded-full p-0.5 mt-1 mr-2">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span>U-Net architecture outperformed other models in segmentation tasks</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-600 rounded-full p-0.5 mt-1 mr-2">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span>5-fold cross-validation ensured robust model evaluation</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-teal-600 rounded-full p-0.5 mt-1 mr-2">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span>Real-time processing enables practical clinical deployment</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-blue-50 rounded-xl p-6 border border-blue-200">
                  <h3 className="font-bold text-blue-900 mb-3 flex items-center">
                    <Award className="h-5 w-5 mr-2" />
                    Future Directions
                  </h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-0.5 mt-1 mr-2">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span>Clinical validation studies with practicing radiologists</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-0.5 mt-1 mr-2">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span>Expansion to larger, more diverse datasets</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-0.5 mt-1 mr-2">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span>Integration with existing PACS systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-blue-600 rounded-full p-0.5 mt-1 mr-2">
                        <CheckCircle2 className="h-3 w-3 text-white" />
                      </div>
                      <span>Multi-center validation and deployment</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="bg-white rounded-3xl shadow-xl border-2 border-teal-100 p-8">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-teal-100 p-3 rounded-full">
                <Users className="h-8 w-8 text-teal-600" />
              </div>
              <h2 className="text-3xl font-bold text-gray-900">Project Team</h2>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Student */}
              <div className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-2xl p-8 border-2 border-teal-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-teal-600 rounded-full p-4">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Seksan Jeennamsai</h3>
                    <p className="text-teal-700 font-medium">Student Developer</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Student ID:</strong> 6530613003</p>
                  <p><strong>Program:</strong> Digital Engineering</p>
                  <p><strong>Institution:</strong> Prince of Songkla University, Phuket Campus</p>
                  <p><strong>Academic Year:</strong> 2025</p>
                </div>
                <div className="mt-6 flex space-x-3">
                  <a 
                    href="mailto:seksanjeen@gmail.com" 
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm"
                  >
                    <Mail className="h-4 w-4 mr-1" />
                    Email
                  </a>
                  <a 
                    href="https://github.com/seksan168" 
                    className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm"
                  >
                    <Github className="h-4 w-4 mr-1" />
                    GitHub
                  </a>
                </div>
              </div>

              {/* Advisor */}
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border-2 border-blue-200">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="bg-blue-600 rounded-full p-4">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Asst. Prof. Kittasil Silanon, Ph.D.</h3>
                    <p className="text-blue-700 font-medium">Project Advisor</p>
                  </div>
                </div>
                <div className="space-y-2 text-sm text-gray-700">
                  <p><strong>Position:</strong> Assistant Professor</p>
                  <p><strong>Department:</strong> Digital Engineering</p>
                  <p><strong>Institution:</strong> Prince of Songkla University, Phuket Campus</p>
                  <p><strong>Specialization:</strong> Artificial Intelligence & Machine Learning</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-200">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center">
                <Award className="h-5 w-5 text-teal-600 mr-2" />
                Acknowledgments
              </h3>
              <p className="text-sm text-gray-700 leading-relaxed">
                Special thanks to the practicing radiologists who provided valuable clinical insights and validation 
                for this project. We also acknowledge the Radiological Society of North America (RSNA) for providing 
                the publicly available dataset used in training our models, and Prince of Songkla University for 
                supporting this research initiative.
              </p>
            </div>
          </section>

          {/* Limitations & Disclaimer */}
          <section className="bg-gradient-to-r from-amber-50 to-orange-50 rounded-3xl shadow-xl border-2 border-amber-200 p-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0">
                <AlertTriangle className="h-10 w-10 text-amber-600" />
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Important Limitations</h2>
                <div className="space-y-4 text-gray-700">
                  <p className="leading-relaxed">
                    While our system achieves high accuracy in research settings, it is important to understand 
                    its limitations:
                  </p>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <div className="bg-amber-600 rounded-full p-0.5 mt-1 mr-2">
                        <AlertTriangle className="h-3 w-3 text-white" />
                      </div>
                      <span><strong>Educational Purpose:</strong> This is a senior project for academic research, not approved for clinical use</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-600 rounded-full p-0.5 mt-1 mr-2">
                        <AlertTriangle className="h-3 w-3 text-white" />
                      </div>
                      <span><strong>Limited Dataset:</strong> Trained on 688 images, which may not represent all populations equally</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-600 rounded-full p-0.5 mt-1 mr-2">
                        <AlertTriangle className="h-3 w-3 text-white" />
                      </div>
                      <span><strong>False Positives/Negatives:</strong> AI systems can produce errors; professional validation is essential</span>
                    </li>
                    <li className="flex items-start">
                      <div className="bg-amber-600 rounded-full p-0.5 mt-1 mr-2">
                        <AlertTriangle className="h-3 w-3 text-white" />
                      </div>
                      <span><strong>Not FDA/Medical Approved:</strong> No regulatory clearance for clinical diagnostic use</span>
                    </li>
                  </ul>
                  <div className="bg-white rounded-xl p-4 border-2 border-amber-300 mt-4">
                    <p className="font-semibold text-amber-900 mb-2">⚠️ Always Consult Healthcare Professionals</p>
                    <p className="text-sm text-amber-800">
                      All findings must be reviewed by licensed radiologists and medical doctors. Never use this 
                      system as the sole basis for medical decisions. Always seek professional medical advice for 
                      diagnosis and treatment.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Call to Action */}
          <section className="bg-gradient-to-r from-teal-600 to-cyan-600 rounded-3xl shadow-2xl p-12 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Try MammoCare AI?</h2>
            <p className="text-xl text-teal-50 mb-8 max-w-2xl mx-auto">
              Upload a mammography image and experience our AI-powered calcification detection system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/upload"
                className="inline-flex items-center justify-center bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Start Analysis
                <ArrowLeft className="ml-2 h-5 w-5 rotate-180" />
              </Link>
              <Link 
                href="/dashboard"
                className="inline-flex items-center justify-center bg-teal-700 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-800 transition-all border-2 border-white"
              >
                View Dashboard
              </Link>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}