
import {
  Bell,
  CalendarDays,
  HeartPulse,
  AlertCircle,
  CheckCircle2
} from "lucide-react";

 function Notification({
  title = "Appointment Reminder",
  message = "Your medical appointment is scheduled for tomorrow.",
  time = "10 minutes ago",
  type = "appointment",
  unread = true
}) {
  const icons = {
    appointment: CalendarDays,
    health: HeartPulse,
    emergency: AlertCircle,
    success: CheckCircle2
  };

  const Icon = icons[type] || Bell;

  return (
    <div className="flex items-start gap-4 p-4 bg-white border border-[#e7eee9] rounded-2xl card-hover">
      <div className="w-11 h-11 rounded-xl bg-[#e2f5eb] flex items-center justify-center shrink-0">
        <Icon size={21} className="text-[#087f5b]" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex justify-between items-start gap-2">
          <h3 className="text-sm font-bold text-[#17352b]">
            {title}
          </h3>

          {unread && (
            <span className="w-2.5 h-2.5 bg-[#16a675] rounded-full shrink-0 mt-1" />
          )}
        </div>

        <p className="text-sm text-gray-500 mt-1 leading-6">
          {message}
        </p>

        <p className="text-xs text-[#789087] mt-3">
          {time}
        </p>
      </div>
    </div>
  );
}
export default  Notification