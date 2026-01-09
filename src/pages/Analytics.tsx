import { TrendingUp, TrendingDown, Eye, Heart, MessageCircle, Share2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";

const reachData = [
  { name: "Mon", value: 2400 },
  { name: "Tue", value: 1398 },
  { name: "Wed", value: 9800 },
  { name: "Thu", value: 3908 },
  { name: "Fri", value: 4800 },
  { name: "Sat", value: 3800 },
  { name: "Sun", value: 4300 },
];

const engagementData = [
  { name: "Likes", instagram: 1200, facebook: 800 },
  { name: "Comments", instagram: 340, facebook: 220 },
  { name: "Shares", instagram: 180, facebook: 420 },
  { name: "Saves", instagram: 560, facebook: 120 },
];

const topPosts = [
  {
    id: 1,
    title: "Morning coffee routine ☕",
    platform: "Instagram",
    reach: "12.4K",
    engagement: "8.2%",
    image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=100&q=80",
  },
  {
    id: 2,
    title: "Behind the roasting process",
    platform: "Facebook",
    reach: "8.9K",
    engagement: "5.6%",
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=100&q=80",
  },
  {
    id: 3,
    title: "New blend announcement",
    platform: "Instagram",
    reach: "7.2K",
    engagement: "6.8%",
    image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=100&q=80",
  },
];

const metrics = [
  { label: "Total Reach", value: "45.2K", change: "+12%", isPositive: true, icon: Eye },
  { label: "Total Engagement", value: "3.8K", change: "+8%", isPositive: true, icon: Heart },
  { label: "Comments", value: "892", change: "-3%", isPositive: false, icon: MessageCircle },
  { label: "Shares", value: "1.2K", change: "+24%", isPositive: true, icon: Share2 },
];

export default function Analytics() {
  return (
    <div className="space-y-6 p-6">
      {/* Metrics row */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric) => (
          <Card key={metric.label} className="border-border/50">
            <CardContent className="p-5">
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <metric.icon className="h-5 w-5 text-primary" />
                </div>
                <div
                  className={`flex items-center gap-1 text-sm font-medium ${
                    metric.isPositive ? "text-emerald-600" : "text-destructive"
                  }`}
                >
                  {metric.isPositive ? (
                    <TrendingUp className="h-4 w-4" />
                  ) : (
                    <TrendingDown className="h-4 w-4" />
                  )}
                  {metric.change}
                </div>
              </div>
              <div className="mt-3">
                <p className="text-2xl font-semibold">{metric.value}</p>
                <p className="text-sm text-muted-foreground">{metric.label}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {/* Reach Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">Reach Over Time</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={reachData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="hsl(var(--primary))"
                    fill="hsl(var(--primary) / 0.2)"
                    strokeWidth={2}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Engagement Chart */}
        <Card>
          <CardHeader>
            <CardTitle className="text-base font-medium">
              Engagement by Platform
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={engagementData}>
                  <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
                  <XAxis dataKey="name" className="text-xs" />
                  <YAxis className="text-xs" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "hsl(var(--card))",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "8px",
                    }}
                  />
                  <Bar
                    dataKey="instagram"
                    fill="hsl(var(--chart-1))"
                    radius={[4, 4, 0, 0]}
                  />
                  <Bar
                    dataKey="facebook"
                    fill="hsl(var(--chart-2))"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Top Posts */}
      <Card>
        <CardHeader>
          <CardTitle className="text-base font-medium">Top Performing Posts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {topPosts.map((post, index) => (
              <div
                key={post.id}
                className="flex items-center gap-4 rounded-lg border border-border p-3"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-muted text-sm font-medium">
                  {index + 1}
                </span>
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-12 w-12 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <p className="font-medium">{post.title}</p>
                  <p className="text-sm text-muted-foreground">{post.platform}</p>
                </div>
                <div className="text-right">
                  <p className="font-medium">{post.reach}</p>
                  <p className="text-sm text-muted-foreground">Reach</p>
                </div>
                <div className="text-right">
                  <p className="font-medium text-primary">{post.engagement}</p>
                  <p className="text-sm text-muted-foreground">Engagement</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
