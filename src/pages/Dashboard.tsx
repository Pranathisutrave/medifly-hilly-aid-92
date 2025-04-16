
import { useState } from "react";
import { 
  Clock, 
  MapPin, 
  Thermometer, 
  Package, 
  Send, 
  Navigation, 
  MessageCircle,
  ChevronDown,
  ChevronUp,
  ArrowRight
} from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Sample delivery data
const deliveries = [
  {
    id: "DEL-1234",
    status: "In Transit",
    eta: "12 minutes",
    origin: "MediFly Central Hub",
    destination: "Hillside Community Hospital",
    items: [
      { name: "Emergency Antibiotics", quantity: 2, temperature: "2-8°C" },
      { name: "Insulin Vials", quantity: 3, temperature: "2-8°C" }
    ],
    coldChain: true,
    pilot: "Automated System",
    lastUpdated: "2 minutes ago",
    progress: 65,
    route: [
      { location: "Departure from Central Hub", time: "08:15 AM", completed: true },
      { location: "Checkpoint Alpha", time: "08:22 AM", completed: true },
      { location: "Mountain Pass Navigation", time: "08:30 AM", completed: true },
      { location: "Approaching Destination", time: "08:35 AM", completed: false },
      { location: "Arrival at Hillside Hospital", time: "08:40 AM", completed: false }
    ]
  },
  {
    id: "DEL-1233",
    status: "Delivered",
    eta: "0 minutes",
    origin: "MediFly Central Hub",
    destination: "Riverside Clinic",
    items: [
      { name: "Blood Samples", quantity: 5, temperature: "2-8°C" },
      { name: "Diagnostic Kits", quantity: 2, temperature: "15-25°C" }
    ],
    coldChain: true,
    pilot: "Automated System",
    lastUpdated: "35 minutes ago",
    progress: 100,
    route: [
      { location: "Departure from Central Hub", time: "07:30 AM", completed: true },
      { location: "Checkpoint Beta", time: "07:38 AM", completed: true },
      { location: "Valley Crossing", time: "07:45 AM", completed: true },
      { location: "Approaching Destination", time: "07:55 AM", completed: true },
      { location: "Arrival at Riverside Clinic", time: "08:00 AM", completed: true }
    ]
  },
  {
    id: "DEL-1232",
    status: "Scheduled",
    eta: "45 minutes",
    origin: "MediFly Central Hub",
    destination: "Mountain View Medical Center",
    items: [
      { name: "COVID Vaccines", quantity: 20, temperature: "2-8°C" },
      { name: "Syringes", quantity: 25, temperature: "15-25°C" }
    ],
    coldChain: true,
    pilot: "Automated System",
    lastUpdated: "15 minutes ago",
    progress: 0,
    route: [
      { location: "Departure from Central Hub", time: "09:00 AM", completed: false },
      { location: "Checkpoint Delta", time: "09:15 AM", completed: false },
      { location: "Highland Pass", time: "09:25 AM", completed: false },
      { location: "Approaching Destination", time: "09:35 AM", completed: false },
      { location: "Arrival at Mountain View Medical", time: "09:45 AM", completed: false }
    ]
  }
];

// Sample dashboard stats
const stats = [
  { title: "Active Deliveries", value: "3", icon: Send, color: "bg-blue-100 text-blue-600" },
  { title: "Completed Today", value: "12", icon: Package, color: "bg-green-100 text-green-600" },
  { title: "Average Delivery Time", value: "28 min", icon: Clock, color: "bg-purple-100 text-purple-600" },
  { title: "Cold Chain Success", value: "100%", icon: Thermometer, color: "bg-red-100 text-red-600" }
];

const Dashboard = () => {
  const [expandedDelivery, setExpandedDelivery] = useState<string | null>("DEL-1234");
  
  const toggleDeliveryExpand = (deliveryId: string) => {
    if (expandedDelivery === deliveryId) {
      setExpandedDelivery(null);
    } else {
      setExpandedDelivery(deliveryId);
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        <div className="medfly-container py-8">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
            <div className="flex items-center space-x-4">
              <div className="text-sm text-gray-500">Welcome, John Doe</div>
              <img
                src="https://randomuser.me/api/portraits/men/32.jpg"
                alt="Profile"
                className="w-10 h-10 rounded-full border-2 border-medfly-blue"
              />
            </div>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-start">
                  <div className={`${stat.color} p-3 rounded-lg`}>
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-800">{stat.value}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Delivery Tracking */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold text-gray-800">Delivery Tracking</h2>
              <button className="text-medfly-blue hover:underline text-sm flex items-center">
                View All Deliveries <ArrowRight className="ml-1 h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-4">
              {deliveries.map((delivery) => (
                <div
                  key={delivery.id}
                  className="border rounded-lg overflow-hidden"
                >
                  <div
                    className={`flex items-center justify-between p-4 cursor-pointer hover:bg-gray-50 ${delivery.status === "In Transit" ? "border-l-4 border-medfly-blue" : 
                      delivery.status === "Delivered" ? "border-l-4 border-medfly-green" : 
                      "border-l-4 border-gray-300"}`}
                    onClick={() => toggleDeliveryExpand(delivery.id)}
                  >
                    <div className="flex items-center">
                      <div className={`rounded-full h-3 w-3 flex-shrink-0 ${
                        delivery.status === "In Transit" ? "bg-medfly-blue animate-pulse" : 
                        delivery.status === "Delivered" ? "bg-medfly-green" : 
                        "bg-gray-300"
                      }`}></div>
                      <div className="ml-4">
                        <p className="font-medium text-gray-900">
                          {delivery.id} - {delivery.destination}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 mt-1">
                          <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                            delivery.status === "In Transit" ? "bg-blue-100 text-blue-800" : 
                            delivery.status === "Delivered" ? "bg-green-100 text-green-800" : 
                            "bg-gray-100 text-gray-800"
                          }`}>
                            {delivery.status}
                          </span>
                          <span className="mx-2">•</span>
                          <Clock className="h-3.5 w-3.5 mr-1" />
                          <span>
                            {delivery.status === "Delivered" ? "Delivered" : `ETA: ${delivery.eta}`}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {delivery.coldChain && (
                        <div className="mr-4 bg-blue-50 p-1 rounded-md" title="Cold Chain Maintained">
                          <Thermometer className="h-4 w-4 text-blue-600" />
                        </div>
                      )}
                      {expandedDelivery === delivery.id ? (
                        <ChevronUp className="h-5 w-5 text-gray-400" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  {expandedDelivery === delivery.id && (
                    <div className="p-4 border-t bg-gray-50">
                      <div className="mb-4">
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div
                            className={`${
                              delivery.status === "Delivered" ? "bg-medfly-green" : "bg-medfly-blue"
                            } h-2 rounded-full`}
                            style={{ width: `${delivery.progress}%` }}
                          ></div>
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Delivery Details</h4>
                          <ul className="space-y-3">
                            <li className="flex">
                              <MapPin className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium">From: {delivery.origin}</p>
                                <p className="text-sm">To: {delivery.destination}</p>
                              </div>
                            </li>
                            <li className="flex">
                              <Package className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium">Items:</p>
                                <ul className="text-sm list-disc pl-5">
                                  {delivery.items.map((item, i) => (
                                    <li key={i}>
                                      {item.name} (x{item.quantity}) {item.temperature && `- ${item.temperature}`}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </li>
                            <li className="flex">
                              <Navigation className="h-5 w-5 text-gray-400 mr-2 flex-shrink-0" />
                              <div>
                                <p className="text-sm font-medium">Pilot: {delivery.pilot}</p>
                                <p className="text-sm">Last updated: {delivery.lastUpdated}</p>
                              </div>
                            </li>
                          </ul>
                          
                          <div className="mt-4">
                            <button className="bg-white border border-medfly-blue text-medfly-blue px-3 py-1.5 rounded-md text-sm hover:bg-medfly-blue hover:text-white transition-colors flex items-center">
                              <MessageCircle className="h-4 w-4 mr-2" />
                              Contact Support
                            </button>
                          </div>
                        </div>
                        
                        <div>
                          <h4 className="font-medium text-gray-700 mb-3">Delivery Route</h4>
                          <div className="relative">
                            {delivery.route.map((stop, i) => (
                              <div key={i} className="flex mb-4">
                                <div className="relative mr-3">
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                                    stop.completed 
                                      ? "bg-medfly-blue text-white" 
                                      : "bg-gray-200 text-gray-400"
                                  }`}>
                                    {stop.completed ? (
                                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                      </svg>
                                    ) : i}
                                  </div>
                                  {i < delivery.route.length - 1 && (
                                    <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 w-0.5 h-full ${
                                      stop.completed && delivery.route[i + 1].completed
                                        ? "bg-medfly-blue" 
                                        : "bg-gray-200"
                                    }`}></div>
                                  )}
                                </div>
                                <div>
                                  <p className={`text-sm font-medium ${
                                    stop.completed ? "text-gray-900" : "text-gray-500"
                                  }`}>
                                    {stop.location}
                                  </p>
                                  <p className="text-xs text-gray-500">{stop.time}</p>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Recent Activity Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                <div className="flex items-start pb-4 border-b">
                  <div className="bg-blue-100 p-2 rounded-lg mr-4">
                    <Package className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">New delivery request submitted</p>
                    <p className="text-sm text-gray-500 mt-1">Destination: Riverside Medical Center</p>
                    <p className="text-xs text-gray-400 mt-1">Today, 10:23 AM</p>
                  </div>
                </div>
                <div className="flex items-start pb-4 border-b">
                  <div className="bg-green-100 p-2 rounded-lg mr-4">
                    <Send className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Delivery DEL-1233 completed successfully</p>
                    <p className="text-sm text-gray-500 mt-1">Cold chain maintained throughout delivery</p>
                    <p className="text-xs text-gray-400 mt-1">Today, 08:05 AM</p>
                  </div>
                </div>
                <div className="flex items-start pb-4 border-b">
                  <div className="bg-yellow-100 p-2 rounded-lg mr-4">
                    <Clock className="h-5 w-5 text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">Scheduled maintenance for Drone #15</p>
                    <p className="text-sm text-gray-500 mt-1">Maintenance window: Tomorrow, 2:00 PM - 4:00 PM</p>
                    <p className="text-xs text-gray-400 mt-1">Yesterday, 3:30 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-purple-100 p-2 rounded-lg mr-4">
                    <MessageCircle className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-gray-800 font-medium">New message from Hillside Hospital</p>
                    <p className="text-sm text-gray-500 mt-1">Regarding Emergency Medicine Delivery</p>
                    <p className="text-xs text-gray-400 mt-1">Yesterday, 2:15 PM</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Quick Actions</h2>
              <div className="space-y-3">
                <button className="w-full bg-medfly-blue text-white py-3 px-4 rounded-md hover:bg-opacity-90 transition-colors flex items-center justify-center">
                  <Package className="mr-2 h-5 w-5" />
                  Request New Delivery
                </button>
                <button className="w-full border border-medfly-blue text-medfly-blue py-3 px-4 rounded-md hover:bg-medfly-blue hover:text-white transition-colors flex items-center justify-center">
                  <Thermometer className="mr-2 h-5 w-5" />
                  Check Cold Chain Status
                </button>
                <button className="w-full border border-gray-300 text-gray-600 py-3 px-4 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center">
                  <MessageCircle className="mr-2 h-5 w-5" />
                  Contact Support
                </button>
              </div>
              
              <div className="mt-6 bg-gradient-to-r from-blue-500 to-medfly-blue p-4 rounded-lg text-white">
                <h3 className="font-bold mb-2">Emergency Delivery</h3>
                <p className="text-sm text-blue-100 mb-3">
                  Need urgent medical supplies? Our priority service ensures delivery within 20 minutes.
                </p>
                <button className="bg-white text-medfly-blue py-2 px-4 rounded-md text-sm font-medium hover:bg-opacity-90 transition-colors">
                  Request Emergency Delivery
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
