import { ApiCard } from "@/components/ApiCard";

const apiEndpoints = [
  {
    title: "Vessel Particulars",
    description: "Real-time access to comprehensive vessel particular data including dimensions, build details, tonnage, and technical specifications.",
    status: "stable" as const,
  },
  {
    title: "Vessel Location",
    description: "Track vessel positions and movements with real-time location data, course, speed, and destination information.",
    status: "stable" as const,
  },
  {
    title: "Engine Data",
    description: "Monitor engine performance metrics, fuel consumption, maintenance schedules, and operational parameters.",
    status: "stable" as const,
  },
  {
    title: "Management Data",
    description: "Access vessel management information including ownership, operator details, certification, and compliance records.",
    status: "stable" as const,
  },
  {
    title: "Inspection Data",
    description: "Retrieve inspection reports, survey results, deficiency records, and compliance status from various authorities.",
    status: "beta" as const,
  },
  {
    title: "Port Calls by Vessel",
    description: "Historical and current port call data for specific vessels including arrival/departure times and cargo operations.",
    status: "stable" as const,
  },
  {
    title: "Port Calls by Port",
    description: "Comprehensive port traffic data showing all vessel arrivals, departures, and current port occupancy.",
    status: "stable" as const,
  },
  {
    title: "Weather Data",
    description: "Marine weather conditions, forecasts, sea state information, and meteorological data for maritime operations.",
    status: "stable" as const,
  },
  {
    title: "Port Data Report",
    description: "Detailed port facility information, services, restrictions, and operational capabilities for planning purposes.",
    status: "stable" as const,
  },
  {
    title: "Vessels by Area",
    description: "Geographic vessel density and distribution data for specific maritime regions and traffic analysis.",
    status: "future" as const,
  },
];

const ApiLibrary = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            API Library
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive maritime data APIs providing real-time access to vessel information, 
            port operations, and maritime intelligence for smarter shipping decisions.
          </p>
        </div>

        {/* API Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {apiEndpoints.map((endpoint, index) => (
            <ApiCard
              key={index}
              title={endpoint.title}
              description={endpoint.description}
              status={endpoint.status}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center bg-card rounded-2xl p-8 border border-muted/50">
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Access our comprehensive API documentation and implementation guides to integrate 
            maritime data into your applications quickly and efficiently.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              View API Documentation
            </button>
            <button className="px-6 py-3 border border-muted text-foreground rounded-lg font-medium hover:bg-muted/50 transition-colors">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApiLibrary;