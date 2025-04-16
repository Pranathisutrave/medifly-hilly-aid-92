
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DiagnosisForm from "../components/DiagnosisForm";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Activity, Stethoscope, Database } from "lucide-react";

const Diagnosis = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Hero Section */}
        <div className="bg-medfly-blue text-white py-16">
          <div className="medfly-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                AI-Powered Medical Diagnosis Tool
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Get accurate insights about your symptoms using our advanced medical diagnosis system. Quick, reliable, and easy to use.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="#diagnosis-form"
                  className="medfly-button bg-white text-medfly-blue hover:bg-gray-100 inline-flex items-center justify-center"
                >
                  Start Diagnosis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  to="/dashboard"
                  className="medfly-button bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 inline-flex items-center justify-center"
                >
                  View Dashboard
                </Link>
              </div>
            </div>
          </div>
        </div>
        
        {/* Features Section */}
        <div className="py-16 bg-white">
          <div className="medfly-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
              <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
                Our AI-powered diagnosis tool provides quick, accurate insights to help you understand your symptoms.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6">
                <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-8 w-8 text-medfly-blue" />
                </div>
                <h3 className="text-xl font-bold mb-3">Intelligent Analysis</h3>
                <p className="text-gray-600">
                  Our AI system analyzes your symptoms to identify potential medical conditions with high accuracy.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Database className="h-8 w-8 text-medfly-green" />
                </div>
                <h3 className="text-xl font-bold mb-3">Medical Database</h3>
                <p className="text-gray-600">
                  Built on a vast database of medical knowledge and continuously updated with the latest research.
                </p>
              </div>
              
              <div className="text-center p-6">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Stethoscope className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-3">Clinical Validation</h3>
                <p className="text-gray-600">
                  Our system is designed with input from medical professionals to ensure reliable results.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Diagnosis Form Section */}
        <div id="diagnosis-form" className="py-16">
          <div className="medfly-container">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-800">Check Your Symptoms</h2>
                <p className="mt-4 text-gray-600">
                  Select your symptoms below and our AI system will analyze possible conditions.
                </p>
              </div>
              
              <DiagnosisForm />
              
              <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex">
                  <Shield className="h-6 w-6 text-yellow-600 flex-shrink-0" />
                  <div className="ml-3">
                    <h3 className="text-base font-medium text-yellow-800">Important Disclaimer</h3>
                    <p className="mt-2 text-sm text-yellow-700">
                      This tool provides general information only and is not a substitute for professional medical advice, diagnosis, or treatment. Always seek the advice of your physician or other qualified health provider with any questions you may have regarding a medical condition.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="bg-gray-900 text-white py-16">
          <div className="medfly-container">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">Need Medicine Delivered?</h2>
              <p className="text-xl text-gray-300 mb-8">
                MediFly can deliver essential medicines to your location within 30 minutes, even in remote and hilly areas.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/signup"
                  className="medfly-button bg-medfly-blue text-white hover:bg-opacity-90 inline-flex items-center justify-center"
                >
                  Sign Up for Delivery
                </Link>
                <Link
                  to="/dashboard"
                  className="medfly-button bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 inline-flex items-center justify-center"
                >
                  View Coverage Areas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Diagnosis;
