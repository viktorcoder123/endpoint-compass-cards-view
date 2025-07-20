import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Database, MapPin, Cog, FileText, Eye, Anchor, Cloud, BarChart3, Map } from "lucide-react";

interface ApiCardProps {
  title: string;
  description: string;
  status?: "stable" | "beta" | "future";
  href?: string;
}

const iconMap = {
  "Vessel Particulars": Database,
  "Vessel Location": MapPin,
  "Engine Data": Cog,
  "Management Data": FileText,
  "Inspection Data": Eye,
  "Port Calls by Vessel": Anchor,
  "Port Calls by Port": Anchor,
  "Weather Data": Cloud,
  "Port Data Report": BarChart3,
  "Vessels by Area": Map,
};

export function ApiCard({ title, description, status = "stable", href }: ApiCardProps) {
  const IconComponent = iconMap[title as keyof typeof iconMap] || Database;
  
  return (
    <Card className="group relative overflow-hidden border-2 border-muted/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <IconComponent className="h-5 w-5" />
            </div>
            <div>
              <CardTitle className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </CardTitle>
              {status !== "stable" && (
                <Badge 
                  variant={status === "beta" ? "secondary" : "outline"}
                  className="mt-1 text-xs"
                >
                  {status === "beta" ? "Beta" : "Coming Soon"}
                </Badge>
              )}
            </div>
          </div>
          <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all" />
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-muted-foreground leading-relaxed">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
  );
}