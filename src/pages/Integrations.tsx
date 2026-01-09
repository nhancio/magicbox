import { Link2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const integrations = [
  {
    id: "instagram",
    name: "Instagram Business",
    description: "Connect your Instagram Business account",
    icon: "📸",
    connected: true,
  },
  {
    id: "facebook",
    name: "Facebook Page",
    description: "Connect your Facebook Page",
    icon: "📘",
    connected: false,
  },
];

export default function Integrations() {
  return (
    <div className="mx-auto max-w-4xl space-y-6 p-6">
      <div>
        <h1 className="text-2xl font-semibold">Integrations</h1>
        <p className="text-muted-foreground">
          Connect your social media accounts and third-party services
        </p>
      </div>

      <div className="space-y-4">
        {integrations.map((integration) => (
          <Card key={integration.id}>
            <CardContent className="flex items-center justify-between p-6">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-muted text-2xl">
                  {integration.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-medium">{integration.name}</h3>
                    {integration.connected && (
                      <Badge variant="secondary" className="gap-1 text-xs">
                        <Check className="h-3 w-3" />
                        Connected
                      </Badge>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {integration.description}
                  </p>
                </div>
              </div>
              <Button variant={integration.connected ? "outline" : "default"}>
                {integration.connected ? "Manage" : "Connect"}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
