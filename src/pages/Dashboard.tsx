import { Eye, Heart, Calendar, TrendingUp } from "lucide-react";
import { KPICard } from "@/components/dashboard/KPICard";
import { SchedulePreview } from "@/components/dashboard/SchedulePreview";
import { AgentNotification } from "@/components/dashboard/AgentNotification";

export default function Dashboard() {
  return (
    <div className="space-y-6 p-6">
      {/* Agent Notification Hero */}
      <AgentNotification userName="John" draftsCount={3} />

      {/* KPI Cards */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <KPICard
          title="Total Reach"
          value="24.5K"
          change="+12% from last week"
          changeType="positive"
          icon={Eye}
        />
        <KPICard
          title="Engagement Rate"
          value="4.8%"
          change="+0.3% from last week"
          changeType="positive"
          icon={Heart}
        />
        <KPICard
          title="Scheduled Posts"
          value="12"
          change="Next 7 days"
          changeType="neutral"
          icon={Calendar}
        />
        <KPICard
          title="Growth"
          value="+892"
          change="New followers this month"
          changeType="positive"
          icon={TrendingUp}
        />
      </div>

      {/* Schedule Preview */}
      <SchedulePreview />
    </div>
  );
}
