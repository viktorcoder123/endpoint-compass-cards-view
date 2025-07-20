import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Index = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-primary">Maritime API Portal</h1>
        <p className="text-xl text-muted-foreground mb-8">Access comprehensive maritime data through our API endpoints</p>
        <Button 
          onClick={() => navigate('/api-library')}
          size="lg"
          className="px-8 py-4 text-lg"
        >
          View API Library
        </Button>
      </div>
    </div>
  );
};

export default Index;
