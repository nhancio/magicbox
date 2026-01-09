import { useState } from "react";
import { format, startOfMonth, endOfMonth, eachDayOfInterval, isSameMonth, isToday, addMonths, subMonths } from "date-fns";
import { ChevronLeft, ChevronRight, Plus, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const scheduledPosts = [
  { id: 1, date: "2026-01-10", platform: "instagram", title: "New coffee blend", time: "9:00 AM" },
  { id: 2, date: "2026-01-10", platform: "facebook", title: "Behind the scenes", time: "2:00 PM" },
  { id: 3, date: "2026-01-12", platform: "instagram", title: "Customer spotlight", time: "11:00 AM" },
  { id: 4, date: "2026-01-15", platform: "instagram", title: "Weekend vibes", time: "10:00 AM" },
  { id: 5, date: "2026-01-15", platform: "facebook", title: "Weekly recap", time: "6:00 PM" },
  { id: 6, date: "2026-01-18", platform: "instagram", title: "Product launch", time: "9:00 AM" },
  { id: 7, date: "2026-01-20", platform: "facebook", title: "Team feature", time: "3:00 PM" },
];

export default function Schedule() {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const monthStart = startOfMonth(currentMonth);
  const monthEnd = endOfMonth(currentMonth);
  const days = eachDayOfInterval({ start: monthStart, end: monthEnd });

  // Pad to start on Sunday
  const startDayOfWeek = monthStart.getDay();
  const paddedDays = Array(startDayOfWeek).fill(null).concat(days);

  const getPostsForDate = (date: Date) => {
    const dateStr = format(date, "yyyy-MM-dd");
    return scheduledPosts.filter((post) => post.date === dateStr);
  };

  return (
    <div className="h-full p-6">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-2xl font-semibold">Schedule</h1>
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentMonth(subMonths(currentMonth, 1))}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <span className="min-w-[140px] text-center font-medium">
              {format(currentMonth, "MMMM yyyy")}
            </span>
            <Button
              variant="outline"
              size="icon"
              onClick={() => setCurrentMonth(addMonths(currentMonth, 1))}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <Button className="gap-2">
          <Plus className="h-4 w-4" />
          New Post
        </Button>
      </div>

      {/* Calendar Grid */}
      <Card className="overflow-hidden">
        <CardContent className="p-0">
          {/* Day headers */}
          <div className="grid grid-cols-7 border-b border-border">
            {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
              <div
                key={day}
                className="border-r border-border p-3 text-center text-sm font-medium text-muted-foreground last:border-r-0"
              >
                {day}
              </div>
            ))}
          </div>

          {/* Calendar days */}
          <div className="grid grid-cols-7">
            {paddedDays.map((day, index) => {
              if (!day) {
                return (
                  <div
                    key={`empty-${index}`}
                    className="min-h-[120px] border-b border-r border-border bg-muted/30 last:border-r-0"
                  />
                );
              }

              const posts = getPostsForDate(day);
              const isCurrentDay = isToday(day);

              return (
                <div
                  key={day.toISOString()}
                  className={cn(
                    "min-h-[120px] border-b border-r border-border p-2 last:border-r-0",
                    !isSameMonth(day, currentMonth) && "bg-muted/30"
                  )}
                >
                  <div
                    className={cn(
                      "mb-1 flex h-7 w-7 items-center justify-center rounded-full text-sm",
                      isCurrentDay
                        ? "bg-primary font-medium text-primary-foreground"
                        : "font-medium"
                    )}
                  >
                    {format(day, "d")}
                  </div>
                  <div className="space-y-1">
                    {posts.slice(0, 2).map((post) => (
                      <div
                        key={post.id}
                        className="flex items-center gap-1 rounded bg-primary/10 px-1.5 py-1 text-xs"
                      >
                        {post.platform === "instagram" ? (
                          <Instagram className="h-3 w-3 text-primary" />
                        ) : (
                          <Facebook className="h-3 w-3 text-primary" />
                        )}
                        <span className="truncate font-medium text-primary">
                          {post.title}
                        </span>
                      </div>
                    ))}
                    {posts.length > 2 && (
                      <p className="text-xs text-muted-foreground">
                        +{posts.length - 2} more
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
