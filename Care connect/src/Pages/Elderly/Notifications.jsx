
import { Bell, CalendarDays, Pill, HeartPulse, ShieldAlert, CheckCircle2, Clock, Info } from "lucide-react";
 function Notifications() {
  return (
    <div className="space-y-6">
      <div><h1 className="text-3xl font-bold">Notifications</h1><p className="mt-2 text-sm text-gray-500">Important updates and reminders about your care.</p></div>

      <div className="grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl bg-white p-5 shadow-sm"><div className="flex justify-between"><p className="text-sm text-gray-500">Total Notifications</p><Bell className="text-emerald-600" /></div><h2 className="mt-3 text-3xl font-bold">8</h2></div>
        <div className="rounded-2xl bg-white p-5 shadow-sm"><div className="flex justify-between"><p className="text-sm text-gray-500">Unread</p><Info className="text-blue-600" /></div><h2 className="mt-3 text-3xl font-bold">3</h2></div>
        <div className="rounded-2xl bg-white p-5 shadow-sm"><div className="flex justify-between"><p className="text-sm text-gray-500">Important</p><ShieldAlert className="text-orange-500" /></div><h2 className="mt-3 text-3xl font-bold">2</h2></div>
      </div>

      <section className="rounded-2xl bg-white p-6 shadow-sm">
        <div className="flex flex-wrap items-center justify-between gap-3"><div><h2 className="text-lg font-bold">Recent Notifications</h2><p className="mt-1 text-sm text-gray-500">Your latest care updates and reminders.</p></div><span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">3 Unread</span></div>

        <div className="mt-6 space-y-4">
          <div className="flex gap-4 rounded-xl border border-emerald-100 bg-emerald-50/60 p-4"><div className="h-fit rounded-xl bg-white p-3 text-emerald-600"><CalendarDays /></div><div className="flex-1"><div className="flex flex-wrap justify-between gap-2"><h3 className="font-bold">Upcoming Care Visit</h3><span className="rounded-full bg-emerald-100 px-2 py-1 text-xs font-semibold text-emerald-700">New</span></div><p className="mt-2 text-sm leading-6 text-gray-600">Your caregiver Anita Thomas is scheduled to visit you tomorrow at 9:00 AM.</p><p className="mt-3 flex items-center gap-2 text-xs text-gray-400"><Clock size={14} /> Today · 9:00 AM</p></div></div>

          <div className="flex gap-4 rounded-xl border border-blue-100 bg-blue-50/60 p-4"><div className="h-fit rounded-xl bg-white p-3 text-blue-600"><Pill /></div><div className="flex-1"><div className="flex flex-wrap justify-between gap-2"><h3 className="font-bold">Medication Reminder</h3><span className="rounded-full bg-blue-100 px-2 py-1 text-xs font-semibold text-blue-700">New</span></div><p className="mt-2 text-sm leading-6 text-gray-600">Your scheduled evening medication is listed for 8:00 PM. Follow your doctor's prescription.</p><p className="mt-3 flex items-center gap-2 text-xs text-gray-400"><Clock size={14} /> Today · 6:00 PM</p></div></div>

          <div className="flex gap-4 rounded-xl border border-orange-100 bg-orange-50/60 p-4"><div className="h-fit rounded-xl bg-white p-3 text-orange-600"><HeartPulse /></div><div className="flex-1"><div className="flex flex-wrap justify-between gap-2"><h3 className="font-bold">Health Check Reminder</h3><span className="rounded-full bg-orange-100 px-2 py-1 text-xs font-semibold text-orange-700">New</span></div><p className="mt-2 text-sm leading-6 text-gray-600">Your routine health check is scheduled for this week. Please keep your previous medical reports ready.</p><p className="mt-3 flex items-center gap-2 text-xs text-gray-400"><Clock size={14} /> Yesterday · 10:30 AM</p></div></div>

          <div className="flex gap-4 rounded-xl border border-gray-100 p-4"><div className="h-fit rounded-xl bg-green-50 p-3 text-green-600"><CheckCircle2 /></div><div><h3 className="font-bold">Care Visit Completed</h3><p className="mt-2 text-sm leading-6 text-gray-600">Your scheduled caregiver visit has been marked as completed.</p><p className="mt-3 flex items-center gap-2 text-xs text-gray-400"><Clock size={14} /> 20 Nov 2026 · 11:30 AM</p></div></div>

          <div className="flex gap-4 rounded-xl border border-gray-100 p-4"><div className="h-fit rounded-xl bg-purple-50 p-3 text-purple-600"><CalendarDays /></div><div><h3 className="font-bold">Appointment Confirmed</h3><p className="mt-2 text-sm leading-6 text-gray-600">Your general check-up appointment is listed for 28 November 2026 at 10:30 AM.</p><p className="mt-3 flex items-center gap-2 text-xs text-gray-400"><Clock size={14} /> 19 Nov 2026 · 2:00 PM</p></div></div>
        </div>
      </section>

      <div className="flex gap-3 rounded-2xl bg-emerald-50 p-5"><Info className="mt-1 shrink-0 text-emerald-700" /><div><h3 className="font-semibold text-emerald-900">Stay Informed</h3><p className="mt-1 text-sm leading-6 text-emerald-800">These are sample notifications for the frontend demonstration. Live reminders and alerts require backend integration.</p></div></div>
    </div>
  );
}

export default Notifications