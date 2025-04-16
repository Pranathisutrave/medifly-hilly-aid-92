
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="hero-gradient text-white">
      <div className="medfly-container py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Delivering Lifesaving Medicines to Remote Areas
            </h1>
            <p className="mt-6 text-lg text-blue-100">
              MediFly uses advanced drone technology to deliver essential medical supplies to hilly and inaccessible regions, maintaining critical cold chains and ensuring rapid response times.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Link 
                to="/signup" 
                className="medfly-button bg-white text-medfly-blue hover:bg-gray-100 inline-flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
              <Link 
                to="/diagnosis" 
                className="medfly-button bg-transparent border border-white text-white hover:bg-white hover:bg-opacity-10 inline-flex items-center justify-center"
              >
                Try AI Diagnosis
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="bg-white p-4 rounded-lg shadow-lg w-64 md:w-80 animate-float">
                <div className="flex items-center mb-3">
                  <div className="h-3 w-3 bg-medfly-red rounded-full mr-2"></div>
                  <div className="h-3 w-3 bg-medfly-lightgreen rounded-full mr-2"></div>
                  <div className="h-3 w-3 bg-medfly-blue rounded-full"></div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-xs text-gray-500">Delivery Status</div>
                      <div className="font-medium text-black">In Transit</div>
                    </div>
                    <div className="h-10 w-10 bg-medfly-blue bg-opacity-10 rounded-full flex items-center justify-center">
                      <div className="h-3 w-3 bg-medfly-blue rounded-full animate-pulse"></div>
                    </div>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full">
                    <div className="h-full w-3/4 bg-medfly-blue rounded-full"></div>
                  </div>
                  <div className="text-xs text-gray-500">Estimated arrival in <span className="font-medium text-medfly-blue">12 minutes</span></div>
                  <div className="border-t pt-3">
                    <div className="flex items-center">
                      <div className="h-8 w-8 bg-medfly-lightblue bg-opacity-20 rounded-full flex items-center justify-center text-xs font-medium text-medfly-blue">RX</div>
                      <div className="ml-3">
                        <div className="text-sm font-medium">Emergency Medicine</div>
                        <div className="text-xs text-gray-500">2 items • Cold Chain Maintained</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-3 rounded-full shadow-lg animate-float" style={{ animationDelay: '1s' }}>
                <div className="h-12 w-12 bg-medfly-blue bg-opacity-10 rounded-full flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-medfly-blue" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L19 9H15V19H9V9H5L12 2Z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        <div className="medfly-container py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-medfly-blue font-bold text-3xl">30+</div>
              <div className="text-gray-600 mt-1">Delivery Drones</div>
            </div>
            <div>
              <div className="text-medfly-blue font-bold text-3xl">5000+</div>
              <div className="text-gray-600 mt-1">Deliveries Made</div>
            </div>
            <div>
              <div className="text-medfly-blue font-bold text-3xl">98%</div>
              <div className="text-gray-600 mt-1">On-Time Rate</div>
            </div>
            <div>
              <div className="text-medfly-blue font-bold text-3xl">25+</div>
              <div className="text-gray-600 mt-1">Remote Areas Served</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
