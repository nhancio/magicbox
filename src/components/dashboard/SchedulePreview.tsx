import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { format, addDays } from "date-fns";

const scheduledPosts = [
  {
    id: 1,
    day: 0,
    platform: "Instagram",
    title: "New coffee blend launch",
    time: "9:00 AM",
  },
  {
    id: 2,
    day: 1,
    platform: "Facebook",
    title: "Behind the scenes",
    time: "2:00 PM",
  },
  {
    id: 3,
    day: 3,
    platform: "Instagram",
    title: "Customer spotlight",
    time: "11:00 AM",
  },
  {
    id: 4,
    day: 5,
    platform: "Instagram",
    title: "Weekend vibes",
    time: "10:00 AM",
  },
  {
    id: 5,
    day: 6,
    platform: "Facebook",
    title: "Weekly recap",
    time: "6:00 PM",
  },
];

export function SchedulePreview() {
  const today = new Date();
  const days = Array.from({ length: 7 }, (_, i) => addDays(today, i));

  return (
    <Card className="border-border/50 bg-card/80 backdrop-blur-sm overflow-hidden">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-medium flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-primary animate-pulse" />
          Upcoming Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-3 overflow-x-auto pb-2">
          {days.map((day, index) => {
            const postsForDay = scheduledPosts.filter((p) => p.day === index);
            const isToday = index === 0;

            return (
              <div
                key={index}
                className={`flex min-w-[130px] flex-col rounded-xl border p-3 transition-all duration-200 hover:shadow-md ${
                  isToday 
                    ? "border-primary/30 bg-gradient-to-br from-primary/10 to-accent/5" 
                    : "border-border/50 hover:border-primary/20"
                }`}
              >
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className={`text-xs font-semibold ${
                      isToday ? "text-gradient-primary" : "text-muted-foreground"
                    }`}
                  >
                    {isToday ? "Today" : format(day, "EEE")}
                  </span>
                  <span className={`text-sm font-bold ${isToday ? "text-primary" : ""}`}>
                    {format(day, "d")}
                  </span>
                </div>
                <div className="space-y-2">
                  {postsForDay.length > 0 ? (
                    postsForDay.map((post) => (
                      <div
                        key={post.id}
                        className="rounded-lg bg-gradient-primary px-2.5 py-2"
                      >
                        <p className="text-xs font-medium text-primary-foreground line-clamp-1">
                          {post.title}
                        </p>
                        <p className="mt-0.5 text-[10px] text-primary-foreground/70">
                          {post.time}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-lg border border-dashed border-border/50 px-2.5 py-2">
                      <p className="text-xs text-muted-foreground/70">No posts</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
