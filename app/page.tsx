import Link from 'next/link';
import { ArrowRight, Shield, Zap, Target, CheckCircle2, Users, Award, TrendingUp } from 'lucide-react';
export const metadata = {
  title: 'MammoCare AI - Advanced Breast Cancer Detection System',
  description: 'State-of-the-art deep learning technology for early detection of breast calcifications in mammography images.',
};

export default function Home() {
  return (
    
    <div className="min-h-screen bg-gradient-to-b from-teal-50 to-white">
      {/* Navigation */}
      <nav className="bg-white shadow-md sticky top-0 z-50 border-b-2 border-teal-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-teal-600">MammoCare AI</h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <Link href="/" className="text-gray-900 hover:text-teal-600 font-medium transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-gray-700 hover:text-teal-600 transition-colors">
                  About
                </Link>
                <Link href="/upload" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Upload
                </Link>
                <Link href="/term" className="text-gray-700 hover:text-teal-600 transition-colors">
                  Term of Service
                </Link>
                <Link 
                  href="/upload" 
                  className="bg-teal-600 text-white px-6 py-2.5 rounded-full hover:bg-teal-700 transition-colors shadow-md"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-teal-50 via-white to-cyan-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="inline-block mb-4">
              <span className="bg-teal-100 text-teal-700 px-4 py-2 rounded-full text-sm font-semibold">
                AI-Powered Medical Technology
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Advanced Breast Cancer
              <span className="block text-teal-600">Detection System</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              State-of-the-art deep learning technology for early detection of breast calcifications 
              in mammography images, supporting radiologists in providing accurate and timely diagnoses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/upload"
                className="bg-teal-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all shadow-lg hover:shadow-xl flex items-center justify-center transform hover:-translate-y-0.5"
              >
                Start Analysis
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/about"
                className="bg-white text-teal-600 px-8 py-4 rounded-full text-lg font-semibold border-2 border-teal-600 hover:bg-teal-50 transition-all shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="backdrop-blur-sm bg-white/10 p-6 rounded-xl">
              <div className="text-5xl font-bold mb-2">99.9%</div>
              <div className="text-teal-100 font-medium">Accuracy Rate</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-6 rounded-xl">
              <div className="text-5xl font-bold mb-2">&lt;30s</div>
              <div className="text-teal-100 font-medium">Analysis Time</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-6 rounded-xl">
              <div className="text-5xl font-bold mb-2">688+</div>
              <div className="text-teal-100 font-medium">Training Images</div>
            </div>
            <div className="backdrop-blur-sm bg-white/10 p-6 rounded-xl">
              <div className="text-5xl font-bold mb-2">0.999</div>
              <div className="text-teal-100 font-medium">Dice Coefficient</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose MammoCare AI?
            </h2>
            <p className="text-xl text-gray-600">
              State-of-the-art technology designed for medical professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-teal-100">
              <div className="bg-teal-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">High Precision</h3>
              <p className="text-gray-600 mb-4">
                Our U-Net based model achieves 99.9% accuracy in detecting and segmenting 
                breast calcifications, with a Dice coefficient of 0.999.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Advanced CNN architecture</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Patch-based analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-teal-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">5-fold cross-validation</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-amber-100">
              <div className="bg-amber-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Zap className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Fast Results</h3>
              <p className="text-gray-600 mb-4">
                Get comprehensive analysis results in under 30 seconds, enabling quick 
                decision-making and improved patient care.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Instant image processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Real-time visualization</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-amber-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Cloud-based infrastructure</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-rose-50 to-pink-50 p-8 rounded-2xl shadow-md hover:shadow-xl transition-all border border-rose-100">
              <div className="bg-rose-600 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Clinical Support</h3>
              <p className="text-gray-600 mb-4">
                Designed with input from radiologists to provide actionable insights and 
                support clinical decision-making processes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Expert-validated results</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Detailed segmentation masks</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-5 w-5 text-rose-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">Confidence scoring</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-50 to-teal-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Powered by Advanced AI
            </h2>
            <p className="text-xl text-gray-600">
              Multiple deep learning models working together for optimal results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-8 rounded-2xl border-2 border-teal-200 shadow-md hover:shadow-xl transition-all hover:border-teal-400">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">U-Net Architecture</h3>
                <div className="bg-teal-100 px-3 py-1 rounded-full">
                  <span className="text-teal-700 text-xs font-bold">PRIMARY</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Specialized convolutional neural network for precise image segmentation, 
                achieving 99.9% accuracy in calcification detection.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Parameters</span>
                <span className="text-teal-700 font-bold">20.5M</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-amber-200 shadow-md hover:shadow-xl transition-all hover:border-amber-400">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">ResNet50</h3>
                <div className="bg-amber-100 px-3 py-1 rounded-full">
                  <span className="text-amber-700 text-xs font-bold">SUPPORT</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Deep residual network for robust feature extraction and pattern recognition 
                across diverse mammography images.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">Parameters</span>
                <span className="text-amber-700 font-bold">31M</span>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl border-2 border-rose-200 shadow-md hover:shadow-xl transition-all hover:border-rose-400">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-gray-900">YOLOv11</h3>
                <div className="bg-rose-100 px-3 py-1 rounded-full">
                  <span className="text-rose-700 text-xs font-bold">DETECTION</span>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                Real-time object detection for rapid localization of potential calcification 
                regions before detailed analysis.
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <span className="text-sm text-gray-500">F1 Score</span>
                <span className="text-rose-700 font-bold">0.21</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Impact Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="bg-gradient-to-r from-teal-600 via-cyan-600 to-teal-700 rounded-3xl p-12 text-white shadow-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6">Research Impact</h2>
                <p className="text-teal-100 text-lg mb-6 leading-relaxed">
                  This project addresses the global challenge of breast cancer detection, 
                  particularly in resource-limited settings where early detection can 
                  significantly improve patient outcomes.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <Users className="h-6 w-6 flex-shrink-0" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">2.3M Women Affected</div>
                      <div className="text-teal-100 text-sm">
                        Diagnosed with breast cancer globally in 2022
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <Award className="h-6 w-6 flex-shrink-0" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Clinical Validation</div>
                      <div className="text-teal-100 text-sm">
                        Developed with input from practicing radiologists
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <div className="bg-white/20 p-2 rounded-lg mr-4">
                      <TrendingUp className="h-6 w-6 flex-shrink-0" />
                    </div>
                    <div>
                      <div className="font-semibold mb-1">Improved Outcomes</div>
                      <div className="text-teal-100 text-sm">
                        Early detection through accessible AI technology
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold mb-6">Key Performance Metrics</h3>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Dice Coefficient</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">0.999</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-white to-teal-200 rounded-full h-3 shadow-lg" style={{width: '99.9%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">IoU Score</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">0.999</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-white to-cyan-200 rounded-full h-3 shadow-lg" style={{width: '99.9%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Validation Accuracy</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">99.98%</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-amber-200 to-amber-400 rounded-full h-3 shadow-lg" style={{width: '99.98%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">Model Loss</span>
                      <span className="bg-white/20 px-3 py-1 rounded-full text-sm">0.00017</span>
                    </div>
                    <div className="bg-white/20 rounded-full h-3 overflow-hidden">
                      <div className="bg-gradient-to-r from-emerald-300 to-emerald-500 rounded-full h-3 shadow-lg" style={{width: '2%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Upload a mammography image and receive detailed analysis powered by 
            state-of-the-art AI technology in seconds.
          </p>
          <Link 
            href="/upload"
            className="inline-flex items-center bg-teal-600 text-white px-10 py-5 rounded-full text-lg font-semibold hover:bg-teal-700 transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
          >
            Start Your Analysis
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <h3 className="text-2xl font-bold mb-4 text-teal-400">MammoCare AI</h3>
              <p className="text-gray-400 mb-4">
                Senior Project: Breast Calcification Detection Using Mammography Images
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Seksan Jeennamsai (6530613003)<br />
                Digital Engineering, Prince of Songkla University<br />
                Advisor: Asst. Prof. Kittasil Silanon, Ph.D.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-teal-400">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-teal-400 transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/upload" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Upload
                  </Link>
                </li>
                <li>
                  <Link href="/term" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Term of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-teal-400">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://www.rsna.org" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                    RSNA Dataset
                  </a>
                </li>
                <li>
                  <a href="https://www.who.int" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                    WHO Guidelines
                  </a>
                </li>
                <li>
                  <a href="https://qscbc.org/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-teal-400 transition-colors">
                    Queen Sirikit Centre for Breast Cancer
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400 text-sm">
            <p>&copy; 2025 MammoCare AI. All rights reserved. For educational and research purposes.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}