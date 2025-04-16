
import { useState } from "react";
import { 
  Thermometer, 
  Droplets, 
  Lungs, 
  HeartPulse, 
  Pill, 
  Loader2,
  ChevronDown,
  ChevronUp
} from "lucide-react";

// Disease database for symptom matching
const diseasesDatabase = [
  {
    name: "Common Cold",
    symptoms: ["cough", "runny nose", "sore throat", "sneezing", "mild fever", "headache"],
    treatment: "Rest, fluids, over-the-counter cold medications.",
    severity: "Mild"
  },
  {
    name: "Influenza (Flu)",
    symptoms: ["high fever", "body aches", "fatigue", "cough", "sore throat", "headache", "chills"],
    treatment: "Rest, fluids, antiviral medications if diagnosed early.",
    severity: "Moderate"
  },
  {
    name: "COVID-19",
    symptoms: ["fever", "dry cough", "fatigue", "loss of taste", "loss of smell", "shortness of breath", "body aches"],
    treatment: "Rest, fluids, isolation, monitor symptoms. Seek medical care if breathing difficulties occur.",
    severity: "Moderate to Severe"
  },
  {
    name: "Pneumonia",
    symptoms: ["high fever", "cough with phlegm", "shortness of breath", "rapid breathing", "chest pain", "fatigue"],
    treatment: "Antibiotics (for bacterial pneumonia), rest, fluids, oxygen therapy if needed.",
    severity: "Moderate to Severe"
  },
  {
    name: "Bronchitis",
    symptoms: ["persistent cough", "cough with mucus", "wheezing", "chest discomfort", "fatigue", "mild fever"],
    treatment: "Rest, increased fluid intake, bronchodilators, avoiding irritants.",
    severity: "Moderate"
  },
  {
    name: "Asthma",
    symptoms: ["wheezing", "shortness of breath", "chest tightness", "coughing", "trouble sleeping"],
    treatment: "Inhalers, bronchodilators, avoiding triggers, long-term control medications.",
    severity: "Mild to Severe"
  },
  {
    name: "Hypertension",
    symptoms: ["headache", "shortness of breath", "nosebleeds", "dizziness", "chest pain"],
    treatment: "Medication, lifestyle changes, regular monitoring.",
    severity: "Chronic"
  },
  {
    name: "Diabetes",
    symptoms: ["increased thirst", "frequent urination", "extreme hunger", "unexplained weight loss", "fatigue", "blurred vision"],
    treatment: "Insulin therapy, blood sugar monitoring, diet management, exercise.",
    severity: "Chronic"
  },
  {
    name: "Migraine",
    symptoms: ["severe headache", "throbbing pain", "nausea", "vomiting", "light sensitivity", "sound sensitivity"],
    treatment: "Pain relievers, rest in dark quiet room, preventive medications.",
    severity: "Moderate"
  },
  {
    name: "Gastroenteritis",
    symptoms: ["diarrhea", "nausea", "vomiting", "abdominal cramps", "mild fever", "headache"],
    treatment: "Fluid replacement, rest, gradual reintroduction of food.",
    severity: "Mild to Moderate"
  },
  {
    name: "Urinary Tract Infection",
    symptoms: ["burning urination", "frequent urination", "cloudy urine", "strong-smelling urine", "pelvic pain"],
    treatment: "Antibiotics, increased fluid intake.",
    severity: "Mild to Moderate"
  },
  {
    name: "Arthritis",
    symptoms: ["joint pain", "stiffness", "swelling", "decreased range of motion", "redness around joints"],
    treatment: "Pain relievers, physical therapy, lifestyle adjustments, anti-inflammatory medications.",
    severity: "Chronic"
  }
];

// Symptom categories for the form
const symptomCategories = [
  {
    name: "General",
    icon: <Thermometer className="h-5 w-5" />,
    symptoms: ["fever", "fatigue", "body aches", "chills", "weakness", "sweating", "weight loss", "weight gain"]
  },
  {
    name: "Respiratory",
    icon: <Lungs className="h-5 w-5" />,
    symptoms: ["cough", "shortness of breath", "sore throat", "runny nose", "sneezing", "wheezing", "chest pain", "congestion"]
  },
  {
    name: "Cardiovascular",
    icon: <HeartPulse className="h-5 w-5" />,
    symptoms: ["chest pain", "rapid heartbeat", "irregular heartbeat", "high blood pressure", "dizziness", "fainting"]
  },
  {
    name: "Digestive",
    icon: <Pill className="h-5 w-5" />,
    symptoms: ["nausea", "vomiting", "diarrhea", "constipation", "abdominal pain", "bloating", "loss of appetite"]
  },
  {
    name: "Neurological",
    icon: <Droplets className="h-5 w-5" />,
    symptoms: ["headache", "dizziness", "confusion", "memory problems", "seizures", "tingling", "numbness", "loss of taste", "loss of smell"]
  }
];

const DiagnosisForm = () => {
  const [selectedSymptoms, setSelectedSymptoms] = useState<string[]>([]);
  const [duration, setDuration] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [diagnosisResult, setDiagnosisResult] = useState<any>(null);
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryName: string) => {
    if (expandedCategories.includes(categoryName)) {
      setExpandedCategories(expandedCategories.filter(name => name !== categoryName));
    } else {
      setExpandedCategories([...expandedCategories, categoryName]);
    }
  };

  const handleSymptomToggle = (symptom: string) => {
    if (selectedSymptoms.includes(symptom)) {
      setSelectedSymptoms(selectedSymptoms.filter(s => s !== symptom));
    } else {
      setSelectedSymptoms([...selectedSymptoms, symptom]);
    }
  };

  const analyzeDiagnosis = () => {
    setIsAnalyzing(true);
    
    // Simulate API call with setTimeout
    setTimeout(() => {
      // Algorithm to find the best matching disease based on symptoms
      const results = diseasesDatabase.map(disease => {
        const matchedSymptoms = disease.symptoms.filter(symptom => 
          selectedSymptoms.includes(symptom)
        );
        
        const matchScore = matchedSymptoms.length / disease.symptoms.length;
        const symptomCoverage = matchedSymptoms.length / selectedSymptoms.length;
        
        // Combined score gives weight to both matches
        const combinedScore = matchScore * 0.7 + symptomCoverage * 0.3;
        
        return {
          ...disease,
          matchedSymptoms,
          matchScore: combinedScore
        };
      });
      
      // Sort by match score, highest first
      results.sort((a, b) => b.matchScore - a.matchScore);
      
      // Only consider results with at least some symptom matches
      const filteredResults = results.filter(r => r.matchScore > 0);
      
      if (filteredResults.length > 0) {
        const topResult = filteredResults[0];
        
        // Only provide a confident diagnosis if the match is strong
        if (topResult.matchScore > 0.5) {
          setDiagnosisResult({
            disease: topResult.name,
            confidence: Math.round(topResult.matchScore * 100),
            description: `Based on your symptoms, especially ${topResult.matchedSymptoms.join(", ")}.`,
            treatment: topResult.treatment,
            severity: topResult.severity,
            alternatives: filteredResults.slice(1, 3).map(r => ({
              name: r.name,
              confidence: Math.round(r.matchScore * 100)
            }))
          });
        } else {
          // If match is weak, show possible conditions but not a definitive diagnosis
          setDiagnosisResult({
            disease: "Multiple possibilities",
            confidence: null,
            description: "Your symptoms could match several conditions. Please consult a healthcare professional.",
            possibilities: filteredResults.slice(0, 3).map(r => ({
              name: r.name,
              confidence: Math.round(r.matchScore * 100),
              matchingSymptoms: r.matchedSymptoms
            }))
          });
        }
      } else {
        setDiagnosisResult({
          disease: "No match found",
          confidence: null,
          description: "Your combination of symptoms doesn't clearly match our database. Please consult a healthcare professional for proper diagnosis.",
        });
      }
      
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedSymptoms.length > 0) {
      analyzeDiagnosis();
    }
  };

  const resetForm = () => {
    setSelectedSymptoms([]);
    setDuration("");
    setAdditionalInfo("");
    setDiagnosisResult(null);
  };

  return (
    <div className="bg-white rounded-lg shadow-md">
      {!diagnosisResult ? (
        <form onSubmit={handleSubmit} className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Please Select Your Symptoms</h2>
          
          <div className="space-y-6">
            {symptomCategories.map((category) => (
              <div key={category.name} className="border rounded-lg overflow-hidden">
                <button
                  type="button"
                  className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 border-b focus:outline-none"
                  onClick={() => toggleCategory(category.name)}
                >
                  <div className="flex items-center">
                    <div className="bg-medfly-blue bg-opacity-10 p-2 rounded-md mr-3">
                      {category.icon}
                    </div>
                    <span className="font-medium text-gray-800">{category.name}</span>
                  </div>
                  {expandedCategories.includes(category.name) ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                
                {expandedCategories.includes(category.name) && (
                  <div className="p-4 grid grid-cols-2 gap-3">
                    {category.symptoms.map((symptom) => (
                      <div key={symptom} className="flex items-center">
                        <input
                          type="checkbox"
                          id={symptom}
                          checked={selectedSymptoms.includes(symptom)}
                          onChange={() => handleSymptomToggle(symptom)}
                          className="rounded text-medfly-blue focus:ring-medfly-blue h-4 w-4"
                        />
                        <label htmlFor={symptom} className="ml-2 text-gray-700 capitalize">
                          {symptom}
                        </label>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          <div className="mt-6">
            <label htmlFor="duration" className="block font-medium text-gray-700 mb-2">
              How long have you been experiencing these symptoms?
            </label>
            <select
              id="duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="medfly-input"
            >
              <option value="">Select duration</option>
              <option value="1-3 days">1-3 days</option>
              <option value="4-7 days">4-7 days</option>
              <option value="1-2 weeks">1-2 weeks</option>
              <option value="2-4 weeks">2-4 weeks</option>
              <option value="1-3 months">1-3 months</option>
              <option value="3+ months">3+ months</option>
            </select>
          </div>
          
          <div className="mt-6">
            <label htmlFor="additional" className="block font-medium text-gray-700 mb-2">
              Additional information (optional)
            </label>
            <textarea
              id="additional"
              value={additionalInfo}
              onChange={(e) => setAdditionalInfo(e.target.value)}
              rows={3}
              className="medfly-input"
              placeholder="Any other details about your symptoms or medical history..."
            ></textarea>
          </div>
          
          <div className="mt-8 text-center">
            <button
              type="submit"
              disabled={selectedSymptoms.length === 0 || isAnalyzing}
              className={`px-6 py-3 rounded-md font-medium text-white ${
                selectedSymptoms.length === 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-medfly-blue hover:bg-opacity-90"
              } transition-colors inline-flex items-center justify-center`}
            >
              {isAnalyzing ? (
                <>
                  <Loader2 className="animate-spin mr-2 h-5 w-5" />
                  Analyzing Symptoms...
                </>
              ) : (
                "Analyze Symptoms"
              )}
            </button>
            
            {selectedSymptoms.length > 0 && (
              <div className="mt-4">
                <button
                  type="button"
                  onClick={resetForm}
                  className="text-medfly-blue hover:underline"
                >
                  Reset Form
                </button>
              </div>
            )}
          </div>
          
          <div className="mt-6 text-sm text-gray-500 text-center">
            <p>
              This tool provides general information and is not a substitute for professional medical advice. 
              Always consult with a healthcare provider for proper diagnosis and treatment.
            </p>
          </div>
        </form>
      ) : (
        <div className="p-6">
          <h2 className="text-2xl font-bold mb-6 text-gray-800">Diagnosis Result</h2>
          
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-6">
            <div className="flex items-center mb-4">
              <div className="bg-medfly-blue bg-opacity-10 p-2 rounded-full">
                <HeartPulse className="h-6 w-6 text-medfly-blue" />
              </div>
              <h3 className="ml-3 text-xl font-semibold text-gray-800">
                {diagnosisResult.disease}
              </h3>
              {diagnosisResult.confidence && (
                <span className="ml-auto bg-medfly-blue text-white text-sm py-1 px-3 rounded-full">
                  {diagnosisResult.confidence}% match
                </span>
              )}
            </div>
            
            <p className="text-gray-700 mb-4">{diagnosisResult.description}</p>
            
            {diagnosisResult.treatment && (
              <div className="mt-4">
                <h4 className="font-medium text-gray-800 mb-1">Recommended Treatment:</h4>
                <p className="text-gray-700">{diagnosisResult.treatment}</p>
              </div>
            )}
            
            {diagnosisResult.severity && (
              <div className="mt-4">
                <h4 className="font-medium text-gray-800 mb-1">Severity:</h4>
                <p className="text-gray-700">{diagnosisResult.severity}</p>
              </div>
            )}
            
            {diagnosisResult.alternatives && diagnosisResult.alternatives.length > 0 && (
              <div className="mt-6">
                <h4 className="font-medium text-gray-800 mb-2">Other Possibilities:</h4>
                <ul className="space-y-2">
                  {diagnosisResult.alternatives.map((alt: any, index: number) => (
                    <li key={index} className="flex items-center justify-between">
                      <span className="text-gray-700">{alt.name}</span>
                      <span className="text-sm text-gray-500">{alt.confidence}% match</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {diagnosisResult.possibilities && (
              <div className="mt-6">
                <h4 className="font-medium text-gray-800 mb-2">Possible Conditions:</h4>
                <div className="space-y-4">
                  {diagnosisResult.possibilities.map((possibility: any, index: number) => (
                    <div key={index} className="border-t pt-3">
                      <div className="flex items-center justify-between">
                        <span className="font-medium text-gray-800">{possibility.name}</span>
                        <span className="text-sm text-gray-500">{possibility.confidence}% match</span>
                      </div>
                      <p className="text-sm text-gray-600 mt-1">
                        Matching symptoms: {possibility.matchingSymptoms.join(", ")}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
          
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-yellow-800 mb-6">
            <div className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
              </svg>
              <p className="ml-3">This is an AI-powered preliminary analysis. For accurate diagnosis, please consult with a healthcare professional.</p>
            </div>
          </div>
          
          <div className="mt-8 flex justify-center space-x-4">
            <button
              type="button"
              onClick={resetForm}
              className="px-5 py-2 bg-white border border-medfly-blue text-medfly-blue rounded-md hover:bg-medfly-blue hover:text-white transition-colors"
            >
              Start Over
            </button>
            
            <button
              type="button"
              className="px-5 py-2 bg-medfly-green text-white rounded-md hover:bg-opacity-90 transition-colors"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DiagnosisForm;
