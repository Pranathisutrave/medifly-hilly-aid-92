
import { Link } from "react-router-dom";
import { ArrowRight, Shield, Clock, Thermometer, MapPin, HeartPulse, Brain } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import FeatureCard from "../components/FeatureCard";

const Index = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        
        {/* Features Section */}
        <section id="services" className="py-20 bg-white">
          <div className="medfly-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Services</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                MediFly provides innovative solutions for medical deliveries in hard-to-reach areas
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <FeatureCard 
                icon={Clock}
                title="Rapid Response"
                description="Medicine delivery in under 30 minutes to remote and hilly areas, ensuring critical care arrives when needed most."
              />
              <FeatureCard 
                icon={Thermometer}
                title="Cold Chain Maintenance"
                description="Advanced temperature-controlled containers maintain medicine integrity throughout the delivery process."
                color="bg-medfly-green"
              />
              <FeatureCard 
                icon={Shield}
                title="Emergency Services"
                description="Priority delivery of emergency medical supplies to disaster-affected areas with difficult terrain."
                color="bg-medfly-red"
              />
              <FeatureCard 
                icon={MapPin}
                title="Remote Area Access"
                description="Specialized drones designed to navigate challenging terrains like mountains, valleys, and forests."
              />
              <FeatureCard 
                icon={HeartPulse}
                title="Medical Monitoring"
                description="Real-time tracking of critical medical supplies with status updates throughout the delivery journey."
                color="bg-medfly-green"
              />
              <FeatureCard 
                icon={Brain}
                title="AI Diagnosis"
                description="Advanced symptom analysis to help identify potential medical conditions before seeking professional care."
                color="bg-purple-500"
              />
            </div>
          </div>
        </section>
        
        {/* About Section */}
        <section id="about" className="py-20 bg-gray-50">
          <div className="medfly-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">About MediFly</h2>
                <p className="text-lg text-gray-600 mb-6">
                  MediFly was created to solve the critical last-mile problem in healthcare delivery. Throughout the developed and developing world, access to life-saving medications is often hampered by inadequate transportation infrastructure.
                </p>
                <p className="text-lg text-gray-600 mb-6">
                  Our drone delivery system is specifically designed to navigate challenging terrains, maintaining medicine integrity while drastically reducing delivery times in areas where traditional transportation methods struggle.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-medfly-green flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Payload capacity of up to 2.0 kilograms per flight</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-medfly-green flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Average fulfillment time of 30 minutes</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-medfly-green flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Temperature-controlled compartments for cold chain medicines</p>
                  </div>
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-medfly-green flex items-center justify-center mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <p className="ml-3 text-gray-700">Special protocols for emergency and disaster response</p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center lg:justify-end">
                <div className="relative">
                  <div className="absolute -top-6 -left-6 bg-medfly-blue rounded-lg h-full w-full"></div>
                  <img
                    src="https://images.unsplash.com/photo-1507489530388-53288fe200ed?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                    alt="Medical Drone"
                    className="rounded-lg shadow-lg relative z-10 w-full max-w-md"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* AI Diagnosis Section */}
        <section className="py-20 bg-gradient-to-r from-medfly-blue to-purple-600 text-white">
          <div className="medfly-container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-lg shadow-lg overflow-hidden max-w-md mx-auto">
                  <div className="bg-gray-100 px-6 py-4 border-b">
                    <div className="flex items-center">
                      <div className="h-10 w-10 bg-medfly-blue rounded-full flex items-center justify-center">
                        <Brain className="h-5 w-5 text-white" />
                      </div>
                      <h3 className="ml-3 text-lg font-medium text-gray-800">AI Symptom Checker</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="mb-4">
                      <p className="text-gray-800 font-medium mb-2">Selected Symptoms:</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Fever</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Cough</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Fatigue</span>
                        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">Headache</span>
                      </div>
                    </div>
                    <div className="mb-4 pb-4 border-b">
                      <p className="text-gray-800 font-medium mb-2">Possible Conditions:</p>
                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Influenza</span>
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-medfly-blue h-full rounded-full" style={{ width: "85%" }}></div>
                          </div>
                          <span className="text-sm text-gray-600">85%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">Common Cold</span>
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-medfly-blue h-full rounded-full" style={{ width: "65%" }}></div>
                          </div>
                          <span className="text-sm text-gray-600">65%</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">COVID-19</span>
                          <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div className="bg-medfly-blue h-full rounded-full" style={{ width: "40%" }}></div>
                          </div>
                          <span className="text-sm text-gray-600">40%</span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <Link to="/diagnosis" className="medfly-button medfly-button-primary">
                        Try AI Diagnosis
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-bold mb-6">AI-Powered Medical Diagnosis</h2>
                <p className="text-xl text-blue-100 mb-6">
                  Our advanced AI system helps identify potential medical conditions by analyzing your symptoms, providing quick health insights.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-50">Advanced symptom analysis with high accuracy</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-50">Quick assessment to determine the appropriate care level</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-50">Intelligent recommendations based on medical guidelines</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-white bg-opacity-20 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-blue-50">Integration with medicine delivery for seamless healthcare</span>
                  </li>
                </ul>
                <Link to="/diagnosis" className="medfly-button bg-white text-medfly-blue hover:bg-opacity-90 inline-flex items-center justify-center">
                  Try AI Diagnosis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section id="contact" className="py-20 bg-white">
          <div className="medfly-container">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Have questions about MediFly? Get in touch with our team.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="medfly-input"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="medfly-input"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      className="medfly-input"
                      placeholder="How can we help you?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="medfly-input"
                      placeholder="Your message here..."
                    ></textarea>
                  </div>
                  
                  <div>
                    <button
                      type="submit"
                      className="medfly-button medfly-button-primary"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
              
              <div className="flex flex-col justify-between">
                <div className="bg-gray-50 p-8 rounded-lg shadow-sm mb-6">
                  <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-6 w-6 text-medfly-blue mr-3 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Our Location</p>
                        <p className="text-gray-600">123 Medical Drive, Hillside City, HC 12345</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 text-medfly-blue mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-gray-600">contact@medifly.com</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <svg className="h-6 w-6 text-medfly-blue mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-gray-600">+1 (555) 123-4567</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-medfly-blue text-white p-8 rounded-lg">
                  <h3 className="text-xl font-bold mb-4">Ready to start?</h3>
                  <p className="mb-6">
                    Sign up today and experience the future of medical deliveries in hard-to-reach areas.
                  </p>
                  <Link
                    to="/signup"
                    className="medfly-button bg-white text-medfly-blue hover:bg-gray-100 inline-flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* CTA Section */}
        <section className="bg-gray-900 text-white py-16">
          <div className="medfly-container text-center">
            <h2 className="text-3xl font-bold mb-6">Join MediFly Today</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of the revolution in medical deliveries. Sign up now to experience faster, more reliable medicine access in remote areas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                to="/signup"
                className="medfly-button bg-medfly-green text-white hover:bg-opacity-90 inline-flex items-center justify-center"
              >
                Sign Up Now
              </Link>
              <Link
                to="#contact"
                className="medfly-button bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 inline-flex items-center justify-center"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
