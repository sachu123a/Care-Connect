
import { Clock, CalendarDays, UserRound, CheckCircle2 } from "lucide-react";

 function ScheduleCard({
  title = "Morning Medication",
  time = "08:00 AM",
  date = "Today, November 23",
  person = "Mary Joseph",
  category = "Medication",
  status = "Completed"
}) {
  const completed = status === "Completed";

  return (
    <div className="bg-white rounded-2xl border border-[#e7eee9] p-5 card-hover shadow-sm">
      <div className="flex justify-between items-start gap-3">
        <div className="flex gap-3">
          <div className="bg-[#e2f5eb] p-3 rounded-xl h-fit">
            <CalendarDays size={22} className="text-[#087f5b]" />
          </div>

          <div>
            <h3 className="font-bold text-[#17352b]">{title}</h3>
            <p className="text-xs text-gray-400 mt-1">{category}</p>
          </div>
        </div>

        <span className={`text-xs font-semibold px-3 py-1.5 rounded-full ${
          completed
            ? "bg-green-50 text-green-700"
            : "bg-orange-50 text-orange-600"
        }`}>
          {status}
        </span>
      </div>

      <div className="mt-5 space-y-3">
        <p className="flex items-center gap-2 text-sm text-gray-500">
          <Clock size={16} className="text-[#087f5b]" />
          {time}
        </p>

        <p className="flex items-center gap-2 text-sm text-gray-500">
          <CalendarDays size={16} className="text-[#087f5b]" />
          {date}
        </p>

        <p className="flex items-center gap-2 text-sm text-gray-500">
          <UserRound size={16} className="text-[#087f5b]" />
          {person}
        </p>
      </div>

      <div className="border-t border-gray-100 mt-4 pt-4 flex items-center gap-2">
        <CheckCircle2
          size={17}
          className={completed ? "text-green-600" : "text-gray-300"}
        />
        <span className="text-xs text-gray-500">
          {completed ? "Task completed" : "Upcoming task"}
        </span>
      </div>
    </div>
  );
}
export default ScheduleCard