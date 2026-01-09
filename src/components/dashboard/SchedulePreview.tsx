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
    <Card className="border-border/50">
      <CardHeader className="pb-4">
        <CardTitle className="text-base font-medium">
          Upcoming Schedule
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {days.map((day, index) => {
            const postsForDay = scheduledPosts.filter((p) => p.day === index);
            const isToday = index === 0;

            return (
              <div
                key={index}
                className="flex min-w-[120px] flex-col rounded-lg border border-border p-3"
              >
                <div className="mb-2 flex items-center justify-between">
                  <span
                    className={`text-xs font-medium ${
                      isToday ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {isToday ? "Today" : format(day, "EEE")}
                  </span>
                  <span className="text-sm font-semibold">
                    {format(day, "d")}
                  </span>
                </div>
                <div className="space-y-1.5">
                  {postsForDay.length > 0 ? (
                    postsForDay.map((post) => (
                      <div
                        key={post.id}
                        className="rounded-md bg-primary/10 px-2 py-1.5"
                      >
                        <p className="text-xs font-medium text-primary line-clamp-1">
                          {post.title}
                        </p>
                        <p className="mt-0.5 text-[10px] text-muted-foreground">
                          {post.time}
                        </p>
                      </div>
                    ))
                  ) : (
                    <div className="rounded-md border border-dashed border-border px-2 py-1.5">
                      <p className="text-xs text-muted-foreground">No posts</p>
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
